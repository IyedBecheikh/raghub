# Contributing to RAGHub

Thank you for your interest in contributing to RAGHub! This document provides guidelines and instructions for contributing.

## Code of Conduct

Be respectful and constructive in all interactions. We're building this together!

## How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported in [Issues](https://github.com/IyedBecheikh/raghub/issues)
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable
   - Environment details (OS, Node version, browser)

### Suggesting Features

1. Check [Issues](https://github.com/IyedBecheikh/raghub/issues) for existing feature requests
2. Create a new issue with:
   - Clear description of the feature
   - Use cases and benefits
   - Possible implementation approach

### Pull Requests

1. **Fork the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/raghub.git
   cd raghub
   ```

2. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

3. **Make your changes**
   - Follow the existing code style
   - Add tests if applicable
   - Update documentation if needed

4. **Test your changes**
   ```bash
   npm run lint
   npm run build
   npm run dev  # Manual testing
   ```

5. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add amazing feature"
   ```
   
   Use conventional commit messages:
   - `feat:` - New feature
   - `fix:` - Bug fix
   - `docs:` - Documentation changes
   - `style:` - Code style changes (formatting)
   - `refactor:` - Code refactoring
   - `test:` - Test additions or changes
   - `chore:` - Build process or tooling changes

6. **Push and create PR**
   ```bash
   git push origin feature/your-feature-name
   ```
   
   Then create a Pull Request on GitHub with:
   - Clear title and description
   - Reference any related issues
   - Screenshots/videos for UI changes

## Development Setup

See [SETUP.md](SETUP.md) for detailed setup instructions.

## Code Style

### TypeScript

- Use TypeScript for all new code
- Avoid `any` types - use proper typing
- Use interfaces for object shapes
- Prefer `const` over `let`

### React/Next.js

- Use functional components
- Use Server Components by default, Client Components only when needed
- Follow the App Router patterns
- Keep components small and focused

### Styling

- Use Tailwind CSS utility classes
- Follow the existing color scheme
- Ensure responsive design (mobile-first)
- Use shadcn-ui components when possible

### File Organization

- One component per file
- Group related files in directories
- Use clear, descriptive names
- Follow the existing structure:
  ```
  app/          - Pages and routes
  components/   - Reusable components
  lib/          - Utilities and helpers
  ```

## Testing

Currently, the project doesn't have automated tests, but we welcome contributions to add:

- Unit tests (Jest/Vitest)
- Integration tests
- E2E tests (Playwright)

## Documentation

When adding features:

- Update README.md if needed
- Add JSDoc comments for functions
- Update SETUP.md for setup changes
- Create examples for complex features

## Areas for Contribution

### Priority Areas

1. **GitHub API Integration**
   - Replace mocked data with real GitHub API calls
   - Handle pagination and rate limiting
   - Add repository filtering

2. **RAG Indexing Backend**
   - Set up vector database
   - Implement code parsing and chunking
   - Create embeddings pipeline

3. **Database Setup**
   - Choose and set up database (PostgreSQL/MongoDB)
   - Design schema
   - Add Prisma/Drizzle ORM

4. **VS Code Extension**
   - Set up extension project
   - Implement search functionality
   - Add code navigation features

5. **Search Functionality**
   - Build search UI
   - Implement vector similarity search
   - Add filters and sorting

### Nice to Have

- Dark mode toggle (currently auto)
- Repository settings page
- Webhook support for auto-indexing
- Analytics dashboard
- Team collaboration features
- API documentation
- Comprehensive test coverage

## Questions?

- Open a [Discussion](https://github.com/IyedBecheikh/raghub/discussions)
- Create an [Issue](https://github.com/IyedBecheikh/raghub/issues)

Thank you for contributing! 🎉
