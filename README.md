# Swift Trucking LLC - Professional Dispatch Website

A production-ready React website for Swift Trucking LLC, a professional truck logistics and dispatch company. Built with modern web technologies and optimized for performance, accessibility, and SEO.

## 🚚 About Swift Trucking LLC

Swift Trucking LLC provides professional dispatch services for owner-operators and small fleets across all 48 states. We specialize in finding high-paying freight opportunities while handling all the paperwork, negotiations, and compliance requirements.

### Services Offered
- **Freight Dispatch** - Complete load booking and dispatch services
- **Equipment Types** - Dry van, reefer, flatbed, stepdeck, conestoga, box trucks
- **24/7 Support** - Round-the-clock dispatch and emergency assistance
- **Industry Coverage** - Manufacturing, retail, construction, food & beverage, and more

## 🛠 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Build Tool**: Vite
- **UI Components**: Shadcn/ui
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Forms**: React Hook Form + Zod validation
- **Animations**: Tailwind CSS + custom animations

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd swift-trucking-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:8080`

### Build for Production

```bash
npm run build
# or
yarn build
```

## 🎨 Brand Guidelines

### Color Palette
- **Primary**: `#004990` (Midnight Blue) - Headers, buttons, primary elements
- **Silver**: `#A8A9AD` (Metallic Silver) - Borders, secondary text, dividers  
- **Gainsboro**: `#DCDCDC` (Light Gray) - Backgrounds, cards, subtle surfaces

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold weight, semantic HTML structure
- **Body**: Normal weight, optimized line height for readability

### Usage Rules
- Use Primary color for call-to-action elements and headers
- Apply Silver for subtle borders and secondary information
- Utilize Gainsboro for background surfaces and cards
- Maintain 4.5:1 contrast ratio for WCAG AA compliance

## 📱 Features

### Core Sections
1. **Hero** - Value proposition with strong CTAs and statistics
2. **Services** - Six main dispatch services with detailed descriptions
3. **Why Choose Us** - Key differentiators and company benefits
4. **Industries** - Supported industries and equipment types
5. **Process** - 5-step workflow from onboarding to payment
6. **Testimonials** - Client success stories with revenue metrics
7. **Pricing** - Transparent commission structure (5-7%)
8. **FAQ** - Common questions about dispatch services
9. **Contact** - Lead capture form with validation
10. **Footer** - Links, compliance info, emergency contact

### Technical Features
- **Responsive Design** - Mobile-first approach with breakpoint optimization
- **Accessibility** - WCAG 2.1 AA compliant with keyboard navigation
- **SEO Optimized** - Meta tags, structured data, semantic HTML
- **Performance** - Lazy loading, optimized images, efficient code splitting
- **Smooth Scrolling** - Enhanced navigation experience
- **Form Validation** - Client-side validation with error handling

## 🔧 Customization

### Updating Brand Assets

#### Logo
Replace the logo placeholder in `src/components/Header.tsx`:
```tsx
// Update the logo section
<div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center">
  <img src="/your-logo.png" alt="Swift Trucking LLC" className="h-8 w-8" />
</div>
```

#### Hero Image
Replace `src/assets/hero-trucks.jpg` with your own trucking imagery. Recommended dimensions: 1920x1080px.

#### Contact Information
Update contact details in:
- `src/components/Header.tsx` - Phone number in header
- `src/components/ContactForm.tsx` - Contact cards and emergency info
- `src/components/Footer.tsx` - Footer contact section
- `index.html` - Schema.org structured data

### Color Customization

Update brand colors in `src/index.css`:
```css
:root {
  --brand-primary: [your-primary-hsl];
  --brand-silver: [your-silver-hsl]; 
  --brand-gainsboro: [your-surface-hsl];
}
```

### Content Updates

#### Services
Modify services in `src/components/Services.tsx` to match your specific offerings.

#### Testimonials  
Update client testimonials in `src/components/Testimonials.tsx` with real customer feedback.

#### Pricing Plans
Adjust commission percentages and features in `src/components/Pricing.tsx`.

## 🌐 Deployment

### Environment Setup
1. Update contact information throughout the codebase
2. Replace placeholder images with actual brand assets
3. Update meta tags and structured data in `index.html`
4. Configure form submission endpoint in `ContactForm.tsx`

### Performance Targets
- **Lighthouse Performance**: ≥90
- **Lighthouse Accessibility**: ≥95  
- **Lighthouse SEO**: ≥90
- **First Contentful Paint**: <2s
- **Largest Contentful Paint**: <2.5s

## 📞 Contact & Support

**Swift Trucking LLC**
- **Phone**: (555) 123-4567 (24/7 Dispatch)
- **Email**: dispatch@swifttrucking.com
- **Address**: 123 Logistics Way, Dallas, TX 75201

For technical support with this website, please refer to the development team or hosting provider.

## 📄 License & Compliance

- Website built for Swift Trucking LLC
- All images should be replaced with properly licensed content
- Ensure DOT and FMCSA compliance information is accurate
- Update legal pages (Privacy Policy, Terms of Service) before going live

---

**Note**: This is a production-ready template. Before launching, ensure all placeholder content is replaced with actual company information, images are properly licensed, and contact forms are configured with working endpoints.