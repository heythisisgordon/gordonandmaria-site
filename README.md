# Gordon and Maria - Personal Family Website

A warm, welcoming family website designed to keep our loved ones connected, especially our foster children and extended family.

## 🏠 Live Site

Visit us at: [gordonandmaria.com](https://gordonandmaria-site.onrender.com)

## 📋 About This Site

This is a personal family website that serves as a digital home where we can:

### Current Features
- **Home Page** - Welcoming family introduction with social media connections
- **Contact Form** - Easy way for family members to reach out and stay in touch
- **Portal Preview** - Coming soon family connection hub

### Design Philosophy
- **Family-Friendly** - Warm, welcoming design that feels like home
- **Foster-Focused** - Special consideration for our foster children to feel included and loved
- **Connection-Centered** - Built to maintain relationships across distances and time

## 🛠 Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS v3.4.15 + DaisyUI v5.0.43
- **Routing**: React Router DOM v7.6.2
- **Backend**: Express.js with Node.js
- **Email Service**: Nodemailer with SMTP
- **Deployment**: Render (full-stack)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd gordonandmaria-site
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your email configuration
```

4. Start the development server:
```bash
npm run dev
```

5. In another terminal, start the backend server:
```bash
npm run server
```

6. Open [http://localhost:5173](http://localhost:5173) in your browser

### Available Scripts

- `npm run dev` - Start development server (frontend)
- `npm run server` - Start backend server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run test` - Run tests

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── NavBar.jsx      # Family-friendly navigation
│   └── Footer.jsx      # Site footer
├── pages/              # Page components
│   ├── Main.jsx        # Homepage with family intro & social links
│   ├── Contact.jsx     # Contact form for family communication
│   └── Portal.jsx      # Coming soon family portal
├── utils/              # Utility functions
│   ├── contactApi.js   # Contact form API integration
│   └── validation.js   # Form validation logic
├── App.jsx             # Main app component with routing
├── main.jsx            # Application entry point
└── index.css           # Global styles

server/
├── routes/
│   └── contact.js      # Contact form email handling
└── index.js            # Express server configuration
```

## ✨ Key Features

### 🏡 Home Page
- Warm family introduction
- Social media integration (YouTube, TikTok, BlueSky)
- Preview of latest content feeds (coming soon)
- Family-friendly messaging and design

### 📧 Contact System
- Full-featured contact form with validation
- Email delivery to both Gordon and Maria
- Family-appropriate messaging
- Rate limiting and security features

### 🚀 Family Portal (Coming Soon)
- Video calling capabilities
- Private family chat
- Photo sharing
- Shared calendar
- Family games
- Secure, family-only environment

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```
# Email configuration for contact form
EMAIL_PASSWORD=your_smtp_password_here

# Environment (set to 'production' on Render)
NODE_ENV=development
```

## 🚀 Deployment

The site is automatically deployed to Render when changes are pushed to the `main` branch.

### Build Configuration
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm run server`
- **Output Directory**: `dist`
- **Node Version**: 22.16.0

## 🗺️ Roadmap

### Phase 1 - Foundation ✅
- [x] Basic site structure
- [x] Family-friendly design
- [x] Contact form functionality
- [x] Social media integration planning

### Phase 2 - Portal Development (Q1-Q2 2025)
- [ ] User authentication system
- [ ] Video calling integration (WebRTC)
- [ ] Private family chat
- [ ] Photo sharing capabilities

### Phase 3 - Advanced Features (Q3 2025)
- [ ] Live social media feeds
- [ ] Family calendar integration
- [ ] Interactive family games
- [ ] Mobile app considerations

## 🤝 Family Access

This website is designed specifically for our family members, with special consideration for:

- **Foster Children**: Easy access to reach out and stay connected
- **Extended Family**: Simple way to keep in touch and share updates  
- **Close Friends**: Welcome space to connect and share life together

## 📞 Contact & Support

For technical issues or questions about the website:
- Email: info@humancenteredsystems.io
- Website: [gordonandmaria.com](https://gordonandmaria-site.onrender.com)

## 💕 A Note to Our Family

This website is built with love as a digital space where our family can stay connected. Whether you're near or far, just checking in or sharing big news, this is your space too. We're always here for you.

---

*Built with ❤️ by Gordon and Maria for our wonderful family*
