# Next.js Mantine Starter

A modern Next.js application template with **Mantine UI**, **Jest testing**, and **Storybook** component documentation. Built with a scalable clean architecture.

## 🎯 Overview

This starter template provides a production-ready setup for building web applications with:
- **Next.js** - React framework for server-side rendering
- **Mantine** - Comprehensive React components library
- **Jest** - Unit and integration testing
- **Storybook** - Interactive component documentation
- **Clean Architecture** - Organized code structure for scalability

## 📦 Tech Stack

- **JavaScript** (81.7%) - Core application logic
- **TypeScript** (15.1%) - Type safety and better DX
- **CSS** (3.2%) - Styling with Mantine components
- **Next.js** - React framework
- **Mantine UI** - Component library
- **Jest** - Testing framework
- **Storybook** - Component showcase

## 🚀 Features

✅ **Next.js Setup**
- Server-side rendering (SSR)
- Static site generation (SSG)
- API routes
- File-based routing

✅ **Mantine UI Components**
- Pre-built accessible components
- Dark mode support
- Responsive design
- Customizable themes

✅ **Testing**
- Jest configuration
- Unit tests
- Component testing
- Test utilities

✅ **Storybook**
- Interactive component library
- Live documentation
- Component showcase
- Accessibility testing

## 🛠️ Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
npm install
# ou
yarn install
```

### Running the Development Server

```bash
npm run dev
# ou
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Running Storybook

```bash
npm run storybook
```

Storybook will start on [http://localhost:6006](http://localhost:6006)

### Running Tests

```bash
npm run test
# Watch mode
npm run test:watch
```

### Building for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
src/
├── data/              # Data models and types
├── domain/            # Business logic and domain models
├── infra/             # External services and integrations
├── main/              # App configuration and setup
├── presentation/      # Pages, components, and UI logic
├── store/             # State management (Redux, Zustand, etc.)
└── validation/
    └── schema/        # Validation schemas (Zod, Yup, etc.)

pages/                 # Next.js pages
public/                # Static assets
stories/               # Storybook stories
__tests__/             # Test files
```

## 💡 Architecture

This project follows **Clean Architecture** principles:

- **Data Layer** (`data/`) - Data models and API contracts
- **Domain Layer** (`domain/`) - Business rules and entities
- **Infrastructure Layer** (`infra/`) - External service clients
- **Presentation Layer** (`presentation/`) - UI components and pages
- **State Management** (`store/`) - Global state
- **Validation** (`validation/`) - Data validation rules

## 📝 Development Guidelines

- Components should be documented in Storybook
- Write tests for business logic and components
- Use TypeScript for better type safety
- Follow Mantine's component API conventions

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Mantine Documentation](https://mantine.dev)
- [Jest Documentation](https://jestjs.io)
- [Storybook Documentation](https://storybook.js.org)

## 📄 License

MIT License - See LICENSE file for details

---

**Last Updated**: April 2026
