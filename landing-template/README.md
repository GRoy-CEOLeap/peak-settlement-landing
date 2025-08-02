# Peak Settlement Landing Page Template

A complete landing page template for personal injury law firms. This template provides a professional, conversion-optimized website with integrated quiz functionality through seamless redirects.

## Features

- Professional header with contact information
- Compelling hero section with clear value proposition
- About us section with trust indicators
- Process explanation with step-by-step flow
- Educational content and FAQ section
- Contact form and information
- Professional footer with legal disclaimers
- Responsive design optimized for all devices
- SEO-friendly structure
- Integration with separate quiz application

## Quick Start

1. **Clone or Import Repository**
   ```bash
   git clone [your-repo-url]
   cd peak-settlement-landing
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   ```

## Deployment

### Netlify Deployment

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy

### Quiz Integration

To integrate with a separate quiz deployment:

1. Deploy your quiz application first
2. Note the quiz deployment URL (e.g., `https://quiz-app.netlify.app`)
3. Update `public/_redirects` file:
   ```
   /quiz/* https://quiz-app.netlify.app/:splat 200
   /* /index.html 200
   ```
4. Update `netlify.toml` with the same redirect configuration

This ensures that when users click "Start Assessment" or visit `/quiz`, they're seamlessly redirected to your quiz application.

## Customization

### Branding

Replace the following assets:
- Logo: `public/Logo with Navy Blue Accent 1.png`
- Favicon: `public/favicon.ico`
- Update company name throughout components

### Content

Edit the following components to customize content:

#### Header (`src/components/Header.jsx`)
- Contact phone number and email
- Navigation links
- CTA button text

#### Hero Section (`src/components/Hero.jsx`)
- Main headline and value proposition
- Trust indicators and statistics
- CTA button text and links

#### About Us (`src/components/AboutUs.jsx`)
- Company description and values
- Team expertise highlights
- Case results and statistics

#### Process Section (`src/components/ProcessSection.jsx`)
- Step-by-step process explanation
- Service descriptions
- Process benefits

#### Educational Content (`src/components/EducationalContent.jsx`)
- Educational articles and resources
- FAQ questions and answers
- Legal information

#### Contact Section (`src/components/ContactSection.jsx`)
- Office address and contact information
- Contact form fields
- Office hours and availability

#### Footer (`src/components/Footer.jsx`)
- Company information
- Legal links and disclaimers
- Social media links

### Styling

The template uses Tailwind CSS for styling:

- **Colors**: Update the color scheme in `tailwind.config.js`
- **Typography**: Modify font families and sizes
- **Spacing**: Adjust margins, padding, and layout
- **Components**: Customize individual component styles

### SEO Optimization

Update the following for SEO:

1. **Page Title**: Edit `index.html` title tag
2. **Meta Description**: Add meta description in `index.html`
3. **Structured Data**: Add JSON-LD structured data
4. **Alt Text**: Update image alt attributes
5. **Headings**: Ensure proper heading hierarchy

## File Structure

```
src/
├── components/
│   ├── Header.jsx              # Navigation and contact info
│   ├── Hero.jsx                # Main value proposition
│   ├── AboutUs.jsx             # Company information
│   ├── ProcessSection.jsx      # How it works
│   ├── EducationalContent.jsx  # Resources and FAQ
│   ├── ContactSection.jsx      # Contact form and info
│   └── Footer.jsx              # Footer with legal info
├── App.jsx                     # Main app component
├── main.jsx                    # Application entry point
└── index.css                   # Global styles
```

## Integration Architecture

This landing page is designed to work seamlessly with a separate quiz application:

```
Landing Page (yourdomain.com)
├── All marketing content
├── Lead capture forms
└── /quiz/* → Redirects to Quiz App

Quiz App (quiz-subdomain.netlify.app)
├── Assessment questions
├── Qualification logic
├── Result pages
└── Lead submission
```

Benefits of this architecture:
- **Separation of Concerns**: Marketing content separate from quiz logic
- **Independent Development**: Teams can work on each part separately
- **Easy Maintenance**: Update quiz without affecting landing page
- **Scalability**: Reuse quiz across multiple landing pages
- **Performance**: Optimized loading for each component

## Performance Optimization

The template includes several performance optimizations:

- **Code Splitting**: Automatic code splitting with Vite
- **Image Optimization**: Optimized image loading
- **CSS Optimization**: Tailwind CSS purging
- **Bundle Analysis**: Built-in bundle analysis tools

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Legal Considerations

The template includes standard legal disclaimers and privacy considerations for law firms:

- Attorney-client privilege notices
- Results disclaimers
- Privacy policy links
- Terms of service links

Update these sections with your specific legal requirements and jurisdictional compliance needs.

## Support

For questions or issues with this template, please refer to the main documentation or contact the development team.

## License

This template is proprietary and intended for use within Peak Settlement projects only.

