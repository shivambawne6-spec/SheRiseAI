# SheRise Hub - Frontend (React + Vite)

A modern, responsive React + Vite application with a beautiful purple theme designed to empower women through education, jobs, and safety resources.

## 🎨 Features

✅ **Modern Purple Theme** - Elegant UI with gradients and smooth animations  
✅ **React Router Navigation** - Seamless page transitions  
✅ **Fully Responsive** - Works on desktop, tablet, and mobile  
✅ **Reusable Components** - Modular, maintainable code  
✅ **Fast Performance** - Built with Vite for instant HMR  

## 📄 Pages

1. **Home** - Hero section with call-to-action
2. **Login** - User authentication interface
3. **Skills** - 6 free courses (Web Dev, Java, DSA, Communication, Digital Marketing, Python)
4. **Jobs** - Job listings and internship opportunities
5. **Government Schemes** - Women-focused government programs
6. **Contacts** - Emergency contacts and trusted contacts manager

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd c:\SheRise-Hub
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open in browser:
```
http://localhost:5173
```

## 📁 Project Structure

```
src/
├── components/           # Reusable components
│   ├── SkillCard.jsx
│   ├── SchemeCard.jsx
│   ├── JobCard.jsx
│   ├── EmergencyCard.jsx
│   └── TrustedContactForm.jsx
├── pages/               # Page components
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Skills.jsx
│   ├── Jobs.jsx
│   ├── Schemes.jsx
│   └── Contacts.jsx
├── styles/             # CSS files
│   ├── app.css        # Main app & navbar styles
│   ├── pages.css      # Page-specific styles
│   └── components.css # Component styles
├── App.jsx            # Main app component with routing
├── Navbar.jsx         # Navigation bar
├── Main.jsx           # React DOM entry
└── vite.config.js     # Vite configuration
```

## 🎯 Component Overview

### SkillCard
Displays course information with:
- Course icon and title
- Description
- Level and duration badges
- Start Learning button

### SchemeCard
Shows government scheme details:
- Scheme name and category
- Short description
- Eligibility requirements
- Read More button

### JobCard
Job listing with:
- Job title and type (Full-time/Internship)
- Company name
- Location
- Salary range
- Required skills tags
- Apply Now button

### EmergencyCard
Emergency contact display:
- Icon and title
- Large emergency number
- Description
- Call Now button

### TrustedContactForm
Add/manage trusted contacts:
- Input fields for name and phone
- Add button
- Display saved contacts with remove option

## 🎨 Color Scheme

```
Primary Purple: #7c3aed
Secondary Purple: #6d28d9
Light Purple: #ede9fe
Dark Purple: #4c1d95
Accent Pink: #ec4899
```

## 📱 Responsive Design

- **Desktop**: Full grid layouts (2-4 columns)
- **Tablet**: 2-column layouts  
- **Mobile**: Single column with full-width cards

## 🔄 Navigation

The Navbar includes links to:
- Home
- Safety (Contacts page)
- Jobs
- Courses (Skills page)
- Schemes
- Login button

## ⚡ Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Styling Guidelines

### CSS Variables
All colors and spacing use CSS variables defined in `:root` for easy customization.

### Animations
- Smooth hover effects on cards
- Fade-in animations on page load
- Underline animation on navbar links
- Transform effects on buttons

### Accessibility
- Semantic HTML structure
- Focus states on form inputs
- Color contrast compliance
- Mobile-friendly navigation

## 🚀 Future Enhancements

- [ ] Backend API integration
- [ ] User authentication with JWT
- [ ] Job application submission
- [ ] Course enrollment tracking
- [ ] Saved jobs/courses feature
- [ ] User profile management
- [ ] Search and filter functionality
- [ ] Dark mode theme

## 📚 Technologies Used

- **React** 19.1.1 - UI library
- **Vite** 7.1.2 - Build tool
- **React Router DOM** 7.8.2 - Client-side routing
- **Axios** 1.12.2 - HTTP client (ready for backend)

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test responsiveness on mobile
4. Submit a pull request

## 📄 License

MIT License - Feel free to use this project for your hackathon!

## 💡 Tips

- Each card has hover animations for better UX
- Use the purple gradient buttons throughout for consistency
- All forms have proper validation states
- Components are easily customizable with props
- CSS is organized for easy maintenance

---

Built with ❤️ for empowering women through technology.
