# Human-Centered Systems LLC Website

A professional corporate website for Human-Centered Systems LLC, an engineering and human-centered design firm.

## 🌐 Live Site

Visit the live site at: [humancenteredsystems.io](https://humancenteredsystems.io)

## 📋 Current State

This is a modern, responsive website built with professional design principles and accessibility in mind. The site currently features:

### Pages
- **Home** - Hero section with company tagline and call-to-action
- **About** - Company overview and founder background
- **Research** - Placeholder for case studies and research findings
- **Portfolio** - Project showcase with placeholder content
- **Resume** - Professional experience and downloadable resume
- **Contact** - Contact form for client inquiries
- **Info Session** - Placeholder for future educational content

### Design Features
- Responsive design optimized for mobile, tablet, and desktop
- DaisyUI "corporate" theme for professional appearance
- Section 508 accessibility compliance
- Cross-browser compatibility (Chrome, Firefox, Edge, Brave)
- Clean, modern layout with consistent spacing and typography

## 🛠 Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS + DaisyUI
- **Routing**: React Router DOM
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
│   ├── NavBar.jsx      # Navigation header
│   └── Footer.jsx      # Site footer
├── pages/              # Page components
│   ├── Main.jsx        # Homepage
│   ├── About.jsx       # About page
│   ├── Research.jsx    # Research page
│   ├── Portfolio.jsx   # Portfolio page
│   ├── Resume.jsx      # Resume page
│   ├── Contact.jsx     # Contact page
│   └── InfoSession.jsx # Info session page
├── App.jsx             # Main app component with routing
├── main.jsx            # Application entry point
└── index.css           # Global styles (Tailwind imports)
```

## 🔮 Future Development Plans

### Content Population
- [ ] Replace placeholder content with actual company information
- [ ] Add real project case studies to Portfolio
- [ ] Populate Research section with published papers, presentations, patents
- [ ] Update About page with comprehensive company story
- [ ] Add professional headshots and company photos

### Feature Enhancements
- [ ] Integrate contact form with backend service (Netlify Forms, Formspree, etc.)
- [ ] Add Vibe Coding 101 info session page where participants can upload their code using a form, their name, and a password.
- [ ] Add backend logic to take a participant's uploaded code and display that as a separate web UI page containing whatever the students want it to.

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
