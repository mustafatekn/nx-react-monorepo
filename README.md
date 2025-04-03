# Nx React Monorepo

This monorepo is a modern web application development environment built with Nx Tools. It contains two different applications and a shared UI library, demonstrating the power of monorepo architecture in managing multiple applications with shared components. Nx provides powerful features such as project dependency visualization, intelligent build caching, parallel task execution, and automated code generation to streamline the development process. Additionally, the UI library, E-commerce and Social-media-dashboard applications were developed using Cursor.

## Project Structure

```nx-react-monorepo/
├── apps/
│   ├── e-commerce/           # E-commerce application
│   └── social-media-dashboard/ # Social media dashboard application
├── libs/
│   └── ui-library/            # Shared UI components
└── tools/                    # Nx configurations
```

## Technologies Used

- **Nx Tools**: Monorepo management and build system
- **React**: Frontend development
- **TypeScript**: Type safety
- **Styled Components**: CSS-in-JS styling solution
- **SASS/SCSS**: Advanced CSS preprocessing with nesting capabilities
- **Vite**: Fast development environment
- **Vitest**: Testing framework
- **Testing Library**: Component testing utilities

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm (v9 or later)

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

### Running the Project

You have two options to run the projects:

#### Option 1: Using Nx Console (Recommended for VS Code users)

1. Install the Nx Console extension in VS Code
2. Open the Nx Console from the VS Code sidebar
3. Select the project you want to run
4. Choose the desired command (serve, build, test, etc.)

#### Option 2: Using Nx Commands

First, build all projects:
```bash
npx nx run-many --target=build --all
```

Then, you can serve either application:

Run the e-commerce application:
```bash
npx nx serve e-commerce
```

Run the social media dashboard:
```bash
npx nx serve social-media-dashboard
```

Run ui-library tests:
```bash
npx nx test ui-library
```
