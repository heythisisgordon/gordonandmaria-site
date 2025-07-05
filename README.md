# Human-Centered Systems LLC Website

A professional corporate website for Human-Centered Systems LLC, an engineering and human-centered design firm.

## 🌐 Live Site

Visit the live site at: [humancenteredsystems.io](https://humancenteredsystems.io)

## 📋 Current State

This is a modern, responsive website built with professional design principles and accessibility in mind. The site currently features:

### Pages
- **Home** - Professional hero section with company messaging and call-to-action buttons
- **About** - Complete company overview with Gordon Banks's professional background and credentials
- **Research** - Placeholder for case studies and research findings
- **Portfolio** - Project showcase with placeholder content
- **Team** - Professional experience and team information
- **Contact** - Contact form for client inquiries
- **Vibe Coding 101** - Fully functional code submission system for educational programming classes

### Design Features
- Responsive design optimized for mobile, tablet, and desktop
- Custom DaisyUI "professional" theme with engineering-focused color palette
- Section 508 accessibility compliance with proper ARIA labels and keyboard navigation
- Cross-browser compatibility (Chrome, Firefox, Edge, Brave)
- Clean, modern layout with professional typography and consistent spacing
- Dark gradient hero sections with professional styling

### Functional Features
- **Code Submission System**: Complete Vibe Coding 101 platform with file upload, password protection, and student showcase pages
- **Professional Navigation**: Clean navbar with mobile responsiveness and active state indicators
- **Contact Integration**: Ready for backend service integration
- **Student Showcases**: Individual password-protected pages for displaying submitted code

## 🛠 Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS v3.4.15 + DaisyUI v5.0.43
- **Routing**: React Router DOM v7.6.2
- **Theme**: Custom "professional" DaisyUI theme
- **Fonts**: Inter font family via Google Fonts
- **Deployment**: Render (static site)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/humancenteredsystems/site.git
cd site
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── NavBar.jsx      # Professional navigation with mobile menu
│   └── Footer.jsx      # Site footer with company information
├── pages/              # Page components
│   ├── Main.jsx        # Homepage with hero section and services
│   ├── About.jsx       # Complete company and founder background
│   ├── Research.jsx    # Research page (placeholder content)
│   ├── Portfolio.jsx   # Portfolio page (placeholder content)
│   ├── Resume.jsx      # Team/resume page
│   ├── Contact.jsx     # Contact form
│   ├── InfoSession.jsx # Vibe Coding 101 submission system
│   └── StudentShowcase.jsx # Individual code showcase pages
├── App.jsx             # Main app component with routing
├── main.jsx            # Application entry point
└── index.css           # Global styles (Tailwind v3 imports)
```

## ✅ Completed Features

### Recently Implemented
- [x] **Vibe Coding 101 Platform**: Complete code submission system with file upload, password protection, and workflow steps
- [x] **Student Showcase System**: Individual password-protected pages for displaying submitted code with syntax highlighting
- [x] **Professional About Page**: Complete company background with Gordon Banks's credentials and experience
- [x] **Custom Professional Theme**: Engineering-focused color palette with blue/orange accent colors
- [x] **Responsive Navigation**: Professional navbar with mobile menu and active state indicators
- [x] **Section 508 Compliance**: Accessibility features including skip links, ARIA labels, and keyboard navigation
- [x] **Workshop Container Integration**: Static container configuration with auto-opening VS Code workspace functionality

## 🔮 Future Development Plans

### Content Population
- [ ] Add real project case studies to Portfolio
- [ ] Populate Research section with published papers, presentations, patents
- [ ] Add professional headshots and company photos
- [ ] Create detailed service offerings pages

### Feature Enhancements
- [ ] Integrate contact form with backend service (Netlify Forms, Formspree, etc.)
- [ ] Add backend processing for Vibe Coding 101 submissions (currently frontend-only)
- [ ] Implement user authentication for student showcase access
- [ ] Add admin dashboard for managing code submissions

### Technical Improvements
- [ ] Add SEO optimization (meta tags, structured data)
- [ ] Implement analytics tracking (Google Analytics, etc.)
- [ ] Add performance monitoring
- [ ] Set up automated testing
- [ ] Implement progressive web app (PWA) features

### Content Management
- [ ] Consider headless CMS integration (Strapi, Contentful)
- [ ] Add admin interface for content updates
- [ ] Implement automated content deployment

## 🛠 Workshop Container Management

The Vibe Coding 101 page uses a static configuration for workshop containers to avoid external dependencies and CSP issues.

### Container Configuration

Containers are defined in `src/pages/VibeCoding101.jsx` in the `WORKSHOP_CONTAINERS` array:

```javascript
const WORKSHOP_CONTAINERS = [
  {
    id: 1,
    name: 'vibe-container-1',
    password: 'workshop2025-1',
    url: 'https://vibe-container-1.onrender.com/?workspace=/home/coder/project/workspace.code-workspace&open=/home/coder/project/landing-page.md'
  },
  // ... more containers
]
```

### Adding/Removing Containers

To modify workshop containers:

1. **Edit the Array**: Update `WORKSHOP_CONTAINERS` in `src/pages/VibeCoding101.jsx`
2. **Follow URL Pattern**: `https://vibe-container-{N}.onrender.com/?workspace=/home/coder/project/workspace.code-workspace&open=/home/coder/project/landing-page.md`
3. **Update Passwords**: Match the container's actual password configuration
4. **Test Locally**: Run `npm run dev` and verify containers display correctly
5. **Deploy**: Push changes to trigger automatic deployment

### URL Parameters

Each container URL includes query parameters for auto-opening functionality:
- `workspace=/home/coder/project/workspace.code-workspace` - Loads the VS Code workspace
- `open=/home/coder/project/landing-page.md` - Opens the landing page automatically

This ensures students get immediate access to a properly configured coding environment.

## 🚀 Deployment

The site is automatically deployed to Render when changes are pushed to the `main` branch.

### Build Configuration
- **Build Command**: `npm install && npm run build`
- **Output Directory**: `dist`
- **Node Version**: 22.16.0

## 🤝 Contributing

This is a private repository for Human-Centered Systems LLC. For internal development:

1. Create a feature branch from `main`
2. Make your changes
3. Test locally with `npm run dev`
4. Commit and push to your branch
5. Create a pull request for review

## 📄 License

Private repository - All rights reserved by Human-Centered Systems LLC.

## 📞 Contact

For questions about this website or Human-Centered Systems LLC services:
- Email: info@humancenteredsystems.io
- Website: [humancenteredsystems.io](https://humancenteredsystems.io)
