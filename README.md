# E-Commerce Frontend Application

A modern, responsive e-commerce platform built with React and Vite. This application provides a seamless shopping experience with features like product browsing, detailed product views, shopping cart management, and user authentication.

## 📋 Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Running the Application](#running-the-application)
- [Building for Production](#building-for-production)
- [Pages & Routes](#pages--routes)
- [Components Overview](#components-overview)
- [Product Categories](#product-categories)
- [Styling & Theming](#styling--theming)
- [Development Guidelines](#development-guidelines)

## ✨ Features

### User Experience
- **Responsive Design**: Fully responsive layout that works seamlessly on mobile, tablet, and desktop devices
- **Dark Mode Support**: Toggle between light and dark themes for comfortable browsing in any environment
- **Smooth Animations**: Integrated AOS (Animate On Scroll) library for smooth, engaging page transitions
- **Product Carousels**: React Slick powered image sliders for showcasing products

### Shopping Features
- **Product Catalog**: Extensive product database with multiple categories (Women's, Men's, Kids', Electronics)
- **Product Search & Filter**: Browse products by category and view detailed product information
- **Product Reviews**: Star-based rating system and customer testimonials
- **Shopping Cart**: Add/remove items, manage quantities, and view cart totals
- **Secure Checkout**: Complete checkout process for purchases

### Authentication & Security
- **User Registration**: Create new customer accounts with email validation
- **Login System**: Secure user login with session management
- **Password Recovery**: Forgot password functionality with recovery options
- **Protected Routes**: Cart and checkout pages are protected and require authentication
- **Firebase Integration**: Secure authentication powered by Firebase

### Additional Features
- **Hero Section**: Eye-catching landing page banner
- **Top Rated Products**: Showcase of best-selling and highest-rated products
- **Newsletter Subscription**: Email subscription feature for promotions
- **Customer Testimonials**: Display of customer reviews and feedback
- **Product Details Page**: Comprehensive product information including reviews, descriptions, and pricing

## 🛠️ Technology Stack

### Frontend Framework & Build Tool
- **React** (v19.1.0) - UI library for building interactive components
- **Vite** (v6.2.0) - Modern build tool with fast HMR (Hot Module Replacement)
- **React Router DOM** (v7.5.1) - Client-side routing for navigation between pages

### Styling & Theme
- **Tailwind CSS** (v3.4.17) - Utility-first CSS framework for responsive design
- **PostCSS** (v8.5.3) - CSS transformation tool
- **Autoprefixer** - Automatically adds vendor prefixes for CSS compatibility

### UI Components & Icons
- **React Icons** (v5.5.0) - Icon library with extensive icon collection
- **React Slick** (v1.12.2) - Carousel/slider component library
- **Slick Carousel** (v1.8.1) - Base carousel library

### Animation & Interaction
- **AOS** (v2.3.4) - Animate On Scroll library for entrance animations
- **React Scroll** (v1.9.3) - Smooth scrolling functionality

### Backend & Data
- **Axios** (v1.9.0) - HTTP client for API communication
- **Firebase** (v11.6.1) - Cloud platform for authentication services
- **MongoDB** (v6.16.0) - Database connection support

### Development Tools
- **ESLint** (v9.21.0) - JavaScript linter for code quality
- **React Hooks Plugin** - Plugin to enforce React Hooks rules

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14.0.0 or higher)
- **npm** (v6.0.0 or higher) or **yarn** (v1.22.0 or higher)
- **Git** (for version control)

## 💾 Installation

Follow these steps to set up the project locally:

### 1. Clone the Repository
```bash
git clone <repository-url>
cd ecom_2
```

### 2. Install Dependencies
```bash
npm install
```

This command installs all required packages listed in `package.json`.

### 3. Configure Environment Variables
Create a `.env.local` file in the project root directory and add your Firebase configuration:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### 4. Start the Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (default Vite port).

## 📁 Project Structure

```
ecom_2/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Auth/           # Authentication related components
│   │   │   ├── AuthContext.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── ForgotPassword.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   ├── Navbar/         # Navigation components
│   │   │   ├── Navbar.jsx
│   │   │   └── DarkMode.jsx
│   │   ├── Cart and Checkout/  # Shopping cart components
│   │   │   ├── Cart.jsx
│   │   │   ├── Checkout.jsx
│   │   │   └── CartContext.jsx
│   │   ├── Products/       # Product display components
│   │   │   └── Products.jsx
│   │   ├── TopProducts/    # Featured products section
│   │   │   └── TopProducts.jsx
│   │   ├── Banner/         # Promotional banners
│   │   │   └── Banner.jsx
│   │   ├── Hero/           # Landing page hero section
│   │   │   └── Hero.jsx
│   │   ├── ProductDetails/ # Product detail page components
│   │   │   ├── ProductDetails.jsx
│   │   │   └── StarRating.jsx
│   │   ├── Testimonials/   # Customer testimonials section
│   │   │   └── Testimonials.jsx
│   │   ├── Subscribe/      # Newsletter subscription
│   │   │   └── Subscribe.jsx
│   │   └── Footer/         # Footer component
│   │       └── Footer.jsx
│   ├── Pages/              # Full-page components
│   │   ├── HomePage.jsx
│   │   ├── ProductDetailPage.jsx
│   │   ├── CartPage.jsx
│   │   └── ProductsPage.jsx
│   ├── data/               # Mock data and product catalogs
│   │   ├── Products.js     # Rated products data
│   │   ├── TopProducts.js  # Top products data
│   │   └── productCatalog.js  # Complete product catalog
│   ├── assets/             # Static images and media
│   │   ├── electronics/
│   │   ├── hero/
│   │   ├── kids/
│   │   ├── men/
│   │   ├── reviewer/
│   │   ├── shirt/
│   │   ├── website/
│   │   └── women/
│   ├── App.jsx             # Main application component
│   ├── App.css             # Application styles
│   ├── main.jsx            # Vite entry point
│   └── index.css           # Global styles
├── public/                 # Static files served as-is
├── eslint.config.js        # ESLint configuration
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── package.json            # Project dependencies
└── README.md              # This file
```

## 🚀 Running the Application

### Development Server
Start the development server with hot module replacement:
```bash
npm run dev
```

The application will automatically reload when you make changes to the code.

### Build for Production
Create an optimized production build:
```bash
npm build
```

The build output will be in the `dist/` directory.

### Preview Production Build
Preview the production build locally:
```bash
npm run preview
```

### Code Quality Check
Run ESLint to check code quality:
```bash
npm run lint
```

## 📄 Pages & Routes

The application includes the following main pages and routes:

| Route | Page | Description |
|-------|------|-------------|
| `/` | HomePage | Landing page with hero, top products, banners, and testimonials |
| `/products` | ProductsPage | Complete product catalog with filtering and search |
| `/product/:id` | ProductDetailPage | Detailed view of a single product with reviews |
| `/cart` | CartPage | Shopping cart display with checkout option |
| `/login` | Login | User login page with email/password form |
| `/register` | Register | New user registration page |
| `/forgotpwd` | ForgotPassword | Password recovery page |

**Note**: The `/cart` route is a protected route that requires user authentication.

## 🔧 Components Overview

### Navigation Components
- **Navbar.jsx**: Main navigation bar with logo, menu, dark mode toggle, and cart icon
- **DarkMode.jsx**: Dark/light theme toggle button
- **ProtectedRoute.jsx**: Route wrapper that ensures user authentication before accessing pages

### Product Components
- **Products.jsx**: Displays grid of products with add-to-cart functionality
- **TopProducts.jsx**: Showcase carousel of featured products
- **ProductDetails.jsx**: Detailed product view with images, description, reviews, and ratings
- **StarRating.jsx**: Star-based rating component for product reviews

### Auth Components
- **Login.jsx**: User login form with email/password fields
- **Register.jsx**: User registration form with validation
- **ForgotPassword.jsx**: Password recovery form

### Page Layout Components
- **Hero.jsx**: Eye-catching landing section
- **Banner.jsx**: Promotional banner section
- **Subscribe.jsx**: Email subscription form for newsletter
- **Testimonials.jsx**: Customer reviews and feedback section
- **Footer.jsx**: Footer with links, contact, and information
- **Cart.jsx**: Shopping cart display with item management

## 🛍️ Product Categories

The application features products across multiple categories:

### Categories Included
1. **Women's Wear** - Ethnic and Western styles
2. **Men's Wear** - Casual and formal clothing
3. **Kids' Wear** - Children's clothing and accessories
4. **Electronics** - Electronic devices and gadgets
5. **Shirts** - Various shirt styles and colors

Each product includes:
- Product image
- Title and description
- Price with discount percentage
- Customer ratings (1-5 stars)
- Customer reviews and testimonials
- Available colors/variants

## 🎨 Styling & Theming

### Tailwind CSS Configuration
The project uses Tailwind CSS with custom configuration:

**Custom Colors:**
- **Primary**: `#fea928` (Orange/Gold)
- **Secondary**: `#ed8900` (Darker Orange)

**Dark Mode:**
- Enabled with `darkMode: 'class'` configuration
- Toggle between light and dark themes using the DarkMode component

**Responsive Design:**
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Responsive container with custom padding

### Global Styles
- Defined in `src/index.css`
- Tailwind utilities and custom CSS
- Smooth transitions and animations

### Component-level Styling
- Individual component CSS files (e.g., `App.css`)
- Tailwind utility classes for inline styling
- AOS animations for scroll effects

## 🐛 Development Guidelines

### Code Quality
- Follow ESLint rules defined in `eslint.config.js`
- Components should be functional components with React Hooks
- Use meaningful variable and component names

### Component Structure
- One component per file (with exceptions for tightly coupled sub-components)
- Default export for main component
- Prop validation recommended for complex components

### Styling Best Practices
- Use Tailwind utility classes first
- Use custom CSS only when Tailwind classes are insufficient
- Maintain consistent spacing and sizing using Tailwind scale
- Use custom colors (primary/secondary) from theme for branding

### Routing & Navigation
- Use `react-router-dom` for page navigation
- Use `react-scroll` for smooth scrolling to sections
- Always wrap Router in appropriate providers in `main.jsx`

### Performance Tips
- Use React semantic imports and lazy loading for non-critical components
- Optimize image sizes and use appropriate image formats
- Minimize bundle size with tree-shaking
- Use Vite's built-in optimization features

## 📝 Contributing Guidelines

When contributing to this project:

1. Create a new branch for your feature: `git checkout -b feature/your-feature-name`
2. Make your changes and commit: `git commit -am 'Add new feature'`
3. Push to the branch: `git push origin feature/your-feature-name`
4. Submit a pull request with a clear description

### Commit Message Convention
- Use clear, descriptive commit messages
- Example: `feat: add product filter functionality`
- Example: `fix: resolve cart calculation bug`

## 🔐 Security Notes

- Firebase authentication is used for secure user sessions
- Never commit `.env.local` file with sensitive credentials
- Keep dependencies updated: `npm update`
- Review ESLint warnings and fix security issues

## 📞 Support & Troubleshooting

### Common Issues

**Port 5173 already in use:**
```bash
npm run dev -- --port 3000
```

**Dependencies not installing:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Vite cache issues:**
```bash
npm run dev -- --force
```

## 📄 License

This project is part of a personal learning/portfolio project.

## 🙏 Acknowledgments

- **React** - UI library foundation
- **Vite** - Fast build tool
- **Tailwind CSS** - Modern styling framework
- **Firebase** - Authentication services
- **React Router** - Client-side routing
- **AOS** - Smooth scroll animations
