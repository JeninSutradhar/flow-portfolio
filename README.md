# Flow Portfolio - Modern Dark Portfolio Template

  

A sleek, dark-mode developer portfolio template built with Next.js and Tailwind CSS. Stop using basic templates and build your dev presence like a pro.

  
## Table of Contents

  

- [Screenshots](#-screenshots)
- [Features](#-features)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Configuration](#️-configuration)
- [Customization](#-customization)
- [Tech Stack](#️-tech-stack)
- [License](#-license)

  

## 📸 Screenshots

  

### Hero Section
<img width="1888" height="884" alt="image" src="https://github.com/user-attachments/assets/b253b0bf-d0d0-40fd-9b29-3f861558e160" />

### About Section  
<img width="1910" height="974" alt="image" src="https://github.com/user-attachments/assets/69aba79c-14e4-4257-9a04-744d822f779a" />

### Skills & Experience
<img width="1606" height="1008" alt="image" src="https://github.com/user-attachments/assets/d0949652-dc52-4561-b803-4da173be5d3d" />

### Projects Showcase
<img width="1389" height="778" alt="image" src="https://github.com/user-attachments/assets/abf880fd-8ff8-42a6-a296-c4f70d4d51b4" />

### Contact Section
<img width="1727" height="827" alt="image" src="https://github.com/user-attachments/assets/aa9c3435-bf56-4622-80b6-c7824e5417bd" />

  

## Features

  

- **Modern Dark Design** - Sleek, professional dark theme
- **Fully Responsive** - Perfect on all devices
- **Smooth Animations** - Fluid transitions and hover effects
- **Fast Performance** - Optimized with Next.js 15
- **SEO Optimized** - Built-in meta tags and structured data
- **Easy Customization** - Simple configuration file
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling

  

### Quick Start

Follow these steps to get your portfolio up and running:

---

### 1. Clone the Repository

```bash
git clone https://github.com/JeninSutradhar/flow-portfolio.git
cd flow-portfolio
````

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Customize Your Content

* Edit `site.config.ts` to add your personal information.
* Replace images in the `/public` directory.
* Update project details inside the components as needed.

---

### 4. Run Development Server

```bash
npm run dev
```

> Your site will be available at `http://localhost:3000`

---

### 5. Build for Production

```bash
npm run build
```

> Then run it with `npm start` or deploy to platforms like **Vercel**, **Netlify**, or your preferred hosting.

---

## Project Structure
```

flow-portfolio/

├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── projects/          # Projects page
├── components/            # React components
│   ├── hero-section.tsx   # Hero section
│   ├── about-section.tsx  # About section
│   ├── projects-section.tsx # Projects showcase
│   └── ...
├── public/               # Static assets
│   ├── hero.png         # Profile image
│   └── mocks/           # Project images
├── site.config.ts       # Site configuration
└── README.md

```

  

## ⚙️ Configuration
Edit `site.config.ts` to customize your portfolio:

```typescript
export const profile = {
  name: "Your Name",
  bio: "Your Professional Title",
  location: "Your Location",
  email: "your.email@example.com",
  github: "https://github.com/yourusername"
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
}
```

  

## 🎨 Customization

  

### Adding Projects

  

Update the projects array in `components/projects-section.tsx`:

  

```typescript

const projects = [
  {
    id: 1,
    title: "Your Project Name",
    description: "Project description",
    category: "Category",
    type: "Type",
    link: "https://your-project.com",
    image: "/path-to-image.png",
  },
  // Add more projects...
]

```

### Changing Colors
The template uses a dark theme with customizable accent colors. Modify the Tailwind config or CSS variables to change the color scheme.

  
### Adding Sections
Create new components in the `components/` directory and import them in `app/page.tsx`.


## 🛠️ Tech Stack
- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Lucide React
- **Animations**: CSS Transitions
- **Deployment**: Netlify/Vercel

  
## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


## 📞 Support
If you have any questions or need help customizing the template:
- Create an issue on GitHub
- Follow [@me](https://twitter.com/jeninsutradhar) on Twitter
---


⭐ Star this repo if you found it helpful!
