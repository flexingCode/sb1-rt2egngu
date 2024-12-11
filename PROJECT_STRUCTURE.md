# Project Structure

```
├── dist/                     # Production build output
│   └── assets/              # Compiled assets
├── public/                   # Static public assets
├── src/                     # Source code
│   ├── assets/             # Project assets
│   │   └── icons/          # SVG icons and icon components
│   ├── components/         # Reusable components
│   │   ├── common/        # Shared UI components
│   │   ├── dashboard/     # Dashboard-specific components
│   │   ├── enrollments/   # Enrollment-related components
│   │   ├── files/         # File management components
│   │   ├── layout/        # Layout components
│   │   ├── metrics/       # Metrics and statistics components
│   │   ├── org-development/ # Organization development components
│   │   └── stats/         # Statistical components
│   ├── contexts/          # React context providers
│   │   ├── AppContext.tsx
│   │   └── BreadcrumbContext.tsx
│   ├── data/             # Mock data and constants
│   │   ├── dashboardStats.tsx
│   │   ├── mockBusinessGroups.ts
│   │   ├── mockFiles.ts
│   │   ├── mockGroupTasks.ts
│   │   ├── mockSites.ts
│   │   ├── mockSiteTaskGroups.ts
│   │   ├── mockSiteTasks.ts
│   │   ├── mockTaskGroups.ts
│   │   └── mockUsers.ts
│   ├── hooks/            # Custom React hooks
│   │   ├── useBreadcrumbUpdate.ts
│   │   ├── useBusinessGroups.ts
│   │   ├── useFilteredData.ts
│   │   ├── useGroups.ts
│   │   ├── useSites.ts
│   │   ├── useTaskGroups.ts
│   │   ├── useTasks.ts
│   │   └── useUsers.ts
│   ├── pages/            # Page components
│   │   ├── Dashboard.tsx
│   │   ├── Enrollments.tsx
│   │   ├── FAQs.tsx
│   │   ├── Files.tsx
│   │   ├── MapPins.tsx
│   │   ├── NewsFeeds.tsx
│   │   ├── NotFound.tsx
│   │   ├── OrgDevelopment.tsx
│   │   ├── PreBuiltPlans/
│   │   ├── Sites.tsx
│   │   └── Users.tsx
│   ├── routes/           # Routing configuration
│   │   └── index.tsx
│   ├── store/           # State management
│   │   └── useAuthStore.ts
│   ├── test/            # Test utilities and setup
│   │   ├── setup.ts
│   │   └── test-utils.tsx
│   ├── types/           # TypeScript type definitions
│   │   ├── businessGroup.ts
│   │   ├── dashboard.ts
│   │   ├── file.ts
│   │   ├── group.ts
│   │   ├── site.ts
│   │   ├── task.ts
│   │   ├── taskGroup.ts
│   │   └── user.ts
│   ├── utils/           # Utility functions
│   │   └── businessGroupUtils.ts
│   ├── App.tsx          # Root application component
│   ├── index.css        # Global styles
│   ├── main.tsx         # Application entry point
│   ├── theme.ts         # Theme configuration
│   └── vite-env.d.ts    # Vite type declarations
├── .eslintrc.js         # ESLint configuration
├── .gitignore          # Git ignore rules
├── index.html          # HTML entry point
├── package.json        # Project dependencies and scripts
├── postcss.config.js   # PostCSS configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
└── vitest.config.ts    # Vitest configuration
```

## Key Directories

### `/src/components`
Reusable UI components organized by feature/domain.

### `/src/contexts`
React context providers for global state management.

### `/src/data`
Mock data and constants used throughout the application.

### `/src/hooks`
Custom React hooks for shared logic and state management.

### `/src/pages`
Top-level page components that correspond to routes.

### `/src/types`
TypeScript type definitions and interfaces.

### `/src/utils`
Utility functions and helper methods.

## Technology Stack

1. Framework: React with TypeScript
2. Styling: Material-UI (MUI) + Tailwind CSS
3. State Management: React Context + Zustand
4. Testing: Vitest + React Testing Library
5. Build Tool: Vite
6. Package Manager: npm

## Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run test` - Run tests
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build