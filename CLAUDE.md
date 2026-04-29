# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

This is an Angular CLI project. Commonly used commands include:

- `ng serve` or `npm start` - Start development server at http://localhost:4200/
- `ng build` or `npm run build` - Build for production (outputs to dist/)
- `ng test` or `npm test` - Run unit tests with Vitest
- `ng e2e` - Run end-to-end tests
- `ng generate component <name>` - Generate new component
- `ng generate service <name>` - Generate new service
- `ng build --watch` - Build with file watching

## Architecture Overview

### Core Structure
- `src/app/` - Main application module containing components, services, guards, and pages
- `src/app/app.routes.ts` - Application routing configuration
- `src/app/app.config.ts` - Application providers and configuration
- `src/main.ts` - Application bootstrap entry point
- `src/styles.css` - Global styles
- `src/index.html` - Main HTML template

### Key Directories
- `components/` - Reusable UI components (navbar, product-card, etc.)
- `pages/` - Page-level components representing views/routes
- `services/` - Injectable services for business logic (auth, cart, product)
- `guards/` - Route protection logic (auth.guard.ts)
- `models/` - TypeScript interfaces for data structures

### Important Files
- `src/app/services/auth.ts` - Authentication service (login, register, token handling)
- `src/app/services/cart.ts` - Shopping cart state management
- `src/app/services/product.ts` - Product data fetching and manipulation
- `src/app/guards/auth.guard.ts` - Route protection for authenticated pages
- `src/app/models/user.model.ts` and `product.model.ts` - Data type definitions

## Development Notes

This project was renamed from "MonEcommerce" to "Velène" (see commit 60c9c8e). The application implements:
- User authentication with JWT token storage
- Product browsing and shopping cart functionality
- Protected routes requiring authentication
- Responsive design with Angular Material-like styling

Testing is configured with Vitest (as seen in package.json devDependencies) alongside Angular's testing utilities.

When making changes:
- Update corresponding spec.ts files when modifying components/services
- Follow existing patterns for service injection and component communication
- Maintain consistency with existing routing patterns in app.routes.ts