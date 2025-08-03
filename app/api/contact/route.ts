import { Pool } from 'pg';
import { NextResponse } from 'next/server';

const connectionString = process.env.NEON_DATABASE_URL;

if (!connectionString) {
  throw new Error('NEON_DATABASE_URL is not set');
}

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    const client = await pool.connect();
    const result = await client.query(
      'INSERT INTO contact_messages(name, email, subject, message) VALUES($1, $2, $3, $4) RETURNING *;',
      [name, email, subject, message]
    );
    client.release();

    return NextResponse.json({ success: true, data: result.rows[0] }, { status: 200 });
  } catch (error) {
    console.error('Error inserting contact message:', error);
    return NextResponse.json({ success: false, message: 'Failed to send message.' }, { status: 500 });
  }
} 