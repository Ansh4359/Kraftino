# TaxaGO Consultancy Services Website

A modern, responsive website for TaxaGO Consultancy Services built with Next.js, TypeScript, and Tailwind CSS. This professional website showcases the company's accounting, taxation, financial, and investment advisory services.

## 🌟 Features

- **Modern Design**: Clean, professional UI with gradient backgrounds and animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Components**: 
  - Animated carousels for insights, testimonials, and hero sections
  - Smooth scroll animations and hover effects
  - Dynamic search functionality
- **Multi-page Architecture**: Comprehensive site structure with dedicated pages for:
  - Company information (mission, team, offices, technology)
  - Services and practices
  - Contact forms with email integration
  - Knowledge base and updates
- **Contact System**: Functional contact form with email integration via API routes
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Performance Optimized**: Fast loading with Next.js optimization features

## 🛠️ Tech Stack

- **Framework**: [Next.js 15.4.2](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Development**: ESLint, TypeScript

## 📁 Project Structure

src/
├── app/
│ ├── Components/ # Reusable UI components
│ │ ├── header.tsx # Navigation header
│ │ ├── footer.tsx # Site footer
│ │ ├── about2.tsx # About section
│ │ ├── countup.tsx # Counter animation component
│ │ ├── haveQuestions.tsx # CTA section
│ │ ├── insightsCorousel.tsx # Insights carousel
│ │ ├── ourPracticesSection.tsx # Services section
│ │ ├── taxCorousel.tsx # Hero carousel
│ │ └── testimonialCorousel.tsx # Client testimonials
│ ├── about/ # About pages
│ │ ├── global/ # Global reach page
│ │ ├── location/ # Office locations
│ │ ├── mission/ # Mission & values
│ │ ├── team/ # Team members
│ │ └── technology/ # Technology focus
│ ├── api/
│ │ └── email/ # Email API endpoint
│ ├── contact/ # Contact page
│ ├── knowledge/ # Knowledge base
│ ├── search/ # Search functionality
│ ├── signup/ # User registration
│ ├── globals.css # Global styles
│ ├── layout.tsx # Root layout
│ └── page.tsx # Homepage
├── components/
│ └── ui/ # shadcn/ui components
│ ├── button.tsx
│ └── card.tsx
└── lib/
└── utils.ts # Utility functions



## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm/bun
- Git

### Installation

1. **Clone the repository**

2. **Install dependencies**

3. **Run the development server**

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

### Network Access

For local network testing:
This runs the server on `0.0.0.0`, making it accessible from other devices on your network.

## 📜 Available Scripts

- `dev` - Start development server with Turbopack
- `dev2` - Start development server accessible from network (0.0.0.0)
- `build` - Build the application for production
- `start` - Start the production server
- `lint` - Run ESLint for code quality checks

## ⚙️ Configuration

### Environment Setup

The project uses Next.js configuration for:
- **Image Optimization**: Configured for external image sources (Unsplash, Pexels)
- **TypeScript**: Strict mode enabled
- **Tailwind CSS**: Custom design system with dark mode support
- **ESLint**: Code quality and consistency

### Key Configuration Files

- `next.config.ts` - Next.js configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `components.json` - shadcn/ui configuration

## 🎨 Styling

The project uses a custom design system built with Tailwind CSS featuring:

- **Color Palette**: Professional blue, gray, and accent colors
- **Typography**: Geist Sans and Geist Mono fonts
- **Components**: Custom styled components with hover effects
- **Animations**: Smooth transitions and micro-interactions
- **Responsive Design**: Mobile-first approach

## 📧 Email Integration

The contact form integrates with an external email service via:
- API route at `/api/email`
- Form validation and error handling
- Success/error status feedback
- Integration with Hono worker service

## 🔍 Search Functionality

Advanced search features include:
- Real-time search suggestions
- Categorized results (Pages, Services, Careers, Resources)
- Keyword-based matching
- Responsive search interface

## 🌐 Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

1. Push your code to a Git repository
2. Import your project to Vercel
3. Deploy automatically with zero configuration

### Manual Deployment

1. **Build the project**

2. **Start the production server**

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is proprietary and belongs to TaxaGO Consultancy Services.

## 📞 Support

For support, email taxagocs@gmail.com or contact:
- **Phone**: +91 9999473062, +91 8475956557
- **Address**: KH-827, Near Bank of Baroda, Bamanheri, Muzaffarnagar, Uttar Pradesh - 251001

## 🔗 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Framer Motion Documentation](https://www.framer.com/motion/)

---

**Built with ❤️ by the TaxaGO Development Team**
