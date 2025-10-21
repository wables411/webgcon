# Web G Construction Website

A modern, cyberpunk-inspired construction company website built with React and deployed on Netlify.

## Features

- **Cyberpunk Aesthetic**: Texas tan and red color scheme with subtle tech elements
- **Responsive Design**: Mobile-first approach with smooth animations
- **Netlify Forms**: Contact form with form handling
- **Modern Tech Stack**: React, TypeScript, CSS modules
- **Professional Content**: Construction industry focused with digital transformation theme

## Tech Stack

- React 18 with TypeScript
- React Router for navigation
- CSS with custom properties and animations
- Netlify for hosting and forms
- GitHub for version control

## Pages

- **Home**: Hero section, company overview, core services preview
- **About Us**: Company mission, values, team information
- **Services**: Detailed service offerings with process timeline
- **Contact**: Contact form with Netlify integration, office locations

## Design System

### Colors
- **Texas Tan**: #D4A574 (primary), #C19A6B (secondary)
- **Red**: #8B0000 (primary), #DC143C (secondary)
- **Cyberpunk Accents**: #00D4FF (blue), #00FF88 (green)

### Typography
- **Primary**: Inter (modern, clean)
- **Secondary**: JetBrains Mono (tech/code aesthetic)

## Deployment

### Netlify Deployment

1. **Connect Repository**:
   - Go to [Netlify](https://app.netlify.com/teams/wables411/projects)
   - Click "New site from Git"
   - Connect to GitHub repository: `wables411/webgcon`

2. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `build`
   - Node version: 18

3. **Environment Variables** (if needed):
   - No environment variables required for basic deployment

4. **Form Handling**:
   - Netlify Forms are automatically enabled
   - Form submissions will appear in Netlify dashboard
   - Form name: `contact`

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Test production build locally
npm install -g serve
serve -s build
```

## Form Configuration

The contact form includes:
- Name (required)
- Email (required)
- Services Interested In (checkboxes):
  - Digital Construction Management
  - Smart Building Integration
  - Advanced Tech Integration
- How Did You Hear About Us (dropdown):
  - Google Search
  - Social Media
  - Referral
- Message (optional)

## Customization

### Colors
Edit `src/styles/variables.css` to modify the color scheme.

### Content
- Home page: `src/pages/Home.tsx`
- About page: `src/pages/About.tsx`
- Services page: `src/pages/Services.tsx`
- Contact page: `src/pages/Contact.tsx`

### Styling
- Global styles: `src/styles/global.css`
- Component styles: Individual CSS files in component directories

## Contact Information

- **Email**: jt@webgstrategies.org
- **Offices**: 
  - New York City, NY
  - Katy, TX

## License

© 2025 Web G Construction. All rights reserved.