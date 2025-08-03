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

  

## �📸 Screenshots

  

### Hero Section

![Hero Section](public/screenshots/hero-section.png)

  

### About Section  

![About Section](public/screenshots/about-section.png)

  

### Skills & Experience

![Skills Section](public/screenshots/skills-section.png)

  

### Projects Showcase

![Projects Section](public/screenshots/projects-section.png)

  

### Contact Section

![Contact Section](public/screenshots/contact-section.png)

  

## ✨ Features

  

- **Modern Dark Design** - Sleek, professional dark theme

- **Fully Responsive** - Perfect on all devices

- **Smooth Animations** - Fluid transitions and hover effects

- **Fast Performance** - Optimized with Next.js 15

- **SEO Optimized** - Built-in meta tags and structured data

- **Easy Customization** - Simple configuration file

- **TypeScript** - Type-safe development

- **Tailwind CSS** - Utility-first styling

  

## 🚀 Quick Start

  

1. **Clone the repository**

   ```bash

   git clone https://github.com/JeninSutradhar/flow-portfolio.git

   cd flow-portfolio

   ```

  

2. **Install dependencies**

   ```bash

   npm install

   ```

  

3. **Customize your content**

   - Edit `site.config.ts` with your personal information

   - Replace images in `/public` folder

   - Update project data in components

  

4. **Run development server**

   ```bash

   npm run dev

   ```

  

5. **Build for production**

   ```bash

   npm run build

   ```

  

## 📁 Project Structure

  

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

  github: "https://github.com/yourusername",

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

- Follow [@jeninsutradhar](https://twitter.com/jeninsutradhar) on Twitter

  

---


⭐ Star this repo if you found it helpful!