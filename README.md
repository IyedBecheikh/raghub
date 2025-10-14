# RAGHub

A GitHub Repository RAG (Retrieval-Augmented Generation) Indexing SaaS platform with a VS Code extension.

## Features

- 🔐 **GitHub OAuth Authentication** - Secure login with NextAuth.js
- 📊 **Dashboard** - View and manage your connected GitHub repositories
- 🔍 **Repository Indexing** - Index repositories for AI-powered search (mocked for MVP)
- 🎨 **Modern UI** - Built with shadcn-ui components and Tailwind CSS
- ⚡ **TypeScript** - Full type safety throughout the application

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn-ui
- **Authentication**: NextAuth.js v5 with GitHub OAuth
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- A GitHub account
- GitHub OAuth App credentials

### Setup GitHub OAuth App

1. Go to GitHub Settings → Developer settings → OAuth Apps → New OAuth App
2. Fill in the details:
   - **Application name**: RAGHub (or your preferred name)
   - **Homepage URL**: `http://localhost:3000`
   - **Authorization callback URL**: `http://localhost:3000/api/auth/callback/github`
3. Click "Register application"
4. Copy the **Client ID** and generate a new **Client Secret**

### Installation

1. Clone the repository:
```bash
git clone https://github.com/IyedBecheikh/raghub.git
cd raghub
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory:
```bash
cp .env.example .env.local
```

4. Update `.env.local` with your credentials:
```env
AUTH_SECRET=your-secret-key-here  # Generate with: openssl rand -base64 32
NEXTAUTH_URL=http://localhost:3000
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
raghub/
├── app/
│   ├── api/auth/[...nextauth]/  # NextAuth.js API routes
│   ├── dashboard/               # Dashboard page (protected)
│   ├── globals.css              # Global styles with Tailwind
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Homepage with login
├── components/
│   └── ui/                      # shadcn-ui components
├── lib/
│   ├── auth/                    # Authentication configuration
│   └── utils.ts                 # Utility functions
├── public/                      # Static assets
└── ...config files
```

## Available Scripts

- `npm run dev` - Start development server (with Turbopack)
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Features Overview

### Homepage
- Clean, modern landing page
- GitHub OAuth login button
- Gradient background with responsive design

### Authentication
- GitHub OAuth integration via NextAuth.js
- Session management
- Protected routes

### Dashboard
- Display connected GitHub repositories (mocked data for MVP)
- Repository cards with:
  - Repository name and description
  - Programming language indicator
  - Star count
  - Private/Public status
  - Index status (Not Indexed, Indexing, Indexed)
- "Index Repository" button with visual feedback
- User profile display
- Sign out functionality

## MVP Notes

This is an MVP implementation with the following limitations:

- Repository data is mocked (not fetched from GitHub API)
- Index functionality is simulated (no actual backend processing)
- No database integration yet
- No VS Code extension yet

These features are placeholders for the full implementation.

## Future Enhancements

- [ ] Integrate GitHub API to fetch real repositories
- [ ] Implement actual RAG indexing backend
- [ ] Add database for storing indexed data
- [ ] Develop VS Code extension
- [ ] Add search functionality
- [ ] Implement webhook support for auto-indexing
- [ ] Add analytics and usage statistics
- [ ] Support for multiple OAuth providers

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

MIT License - see [LICENSE](LICENSE) file for details

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

