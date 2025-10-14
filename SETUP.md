# RAGHub Setup Guide

## Quick Start

### 1. Prerequisites

- Node.js 18+ and npm
- A GitHub account
- Git

### 2. Clone and Install

```bash
# Clone the repository
git clone https://github.com/IyedBecheikh/raghub.git
cd raghub

# Install dependencies
npm install
```

### 3. Set Up GitHub OAuth

To enable GitHub authentication, you need to create a GitHub OAuth App:

1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Click **OAuth Apps** → **New OAuth App**
3. Fill in the application details:
   - **Application name**: RAGHub (or your preferred name)
   - **Homepage URL**: `http://localhost:3000`
   - **Authorization callback URL**: `http://localhost:3000/api/auth/callback/github`
4. Click **Register application**
5. Copy the **Client ID**
6. Click **Generate a new client secret** and copy the **Client Secret**

### 4. Configure Environment Variables

```bash
# Copy the example environment file
cp .env.example .env.local
```

Edit `.env.local` and update with your credentials:

```env
# Generate a secret key (you can use: openssl rand -base64 32)
AUTH_SECRET=your-randomly-generated-secret-key

# Your local development URL
NEXTAUTH_URL=http://localhost:3000

# Your GitHub OAuth credentials from step 3
GITHUB_CLIENT_ID=your_github_client_id_here
GITHUB_CLIENT_SECRET=your_github_client_secret_here
```

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 6. Test the Application

1. Click **"Sign in with GitHub"** on the homepage
2. Authorize the application
3. You'll be redirected to the dashboard showing mocked repositories
4. Try clicking **"Index Repository"** to see the mocked indexing animation

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
raghub/
├── app/                          # Next.js App Router
│   ├── api/auth/[...nextauth]/  # NextAuth.js API routes
│   ├── dashboard/               # Dashboard page (protected)
│   │   ├── dashboard-client.tsx # Client component with interactivity
│   │   └── page.tsx             # Server component with auth check
│   ├── globals.css              # Global styles with Tailwind
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Homepage with login
├── components/
│   └── ui/                      # shadcn-ui components
│       ├── badge.tsx
│       ├── button.tsx
│       └── card.tsx
├── lib/
│   ├── auth/                    # Authentication configuration
│   │   └── auth.ts              # NextAuth.js setup
│   └── utils.ts                 # Utility functions (cn helper)
├── public/                      # Static assets
├── .env.example                 # Environment variables template
├── .env.local                   # Your local environment (not committed)
├── components.json              # shadcn-ui configuration
├── tailwind.config.ts           # Tailwind CSS configuration
└── tsconfig.json                # TypeScript configuration
```

## Features

### ✅ Implemented (MVP)

- **Homepage** with clean design and GitHub login
- **GitHub OAuth Authentication** via NextAuth.js
- **Protected Routes** (dashboard requires authentication)
- **Dashboard** displaying mocked repositories with:
  - Repository cards (name, description, language, stars)
  - Index status badges (Not Indexed, Indexing, Indexed)
  - Interactive "Index Repository" button
  - User profile display
  - Sign out functionality
- **Responsive Design** using Tailwind CSS
- **Modern UI Components** from shadcn-ui

### 🔜 Future Enhancements

- Integrate GitHub API to fetch real repositories
- Implement actual RAG indexing backend
- Add database for storing indexed data
- Develop VS Code extension
- Add search functionality across indexed repos
- Implement webhook support for auto-indexing
- Add analytics and usage statistics

## Tech Stack Details

### Frontend
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn-ui (built on Radix UI)
- **Icons**: Lucide React

### Authentication
- **NextAuth.js v5** (Auth.js) with GitHub provider
- Server-side session management
- Protected API routes

### Development Tools
- **Turbopack** for fast builds
- **ESLint** for code quality
- **TypeScript** for type safety

## Troubleshooting

### Build Errors

If you encounter build errors, try:

```bash
# Clean the build cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Build again
npm run build
```

### Authentication Issues

1. Verify your `.env.local` file has all required variables
2. Check that your GitHub OAuth callback URL matches: `http://localhost:3000/api/auth/callback/github`
3. Make sure you've generated a secure `AUTH_SECRET`

### Port Already in Use

If port 3000 is already in use:

```bash
# Run on a different port
PORT=3001 npm run dev
```

Don't forget to update your GitHub OAuth callback URL if you change the port.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard:
   - `AUTH_SECRET`
   - `NEXTAUTH_URL` (your production URL)
   - `GITHUB_CLIENT_ID`
   - `GITHUB_CLIENT_SECRET`
4. Update GitHub OAuth callback URL to your production domain

### Other Platforms

The application can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- Render
- AWS Amplify
- Self-hosted with Docker

Ensure you update environment variables and OAuth callback URLs accordingly.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have questions:

1. Check the [README.md](README.md) and this setup guide
2. Review [Next.js documentation](https://nextjs.org/docs)
3. Check [NextAuth.js documentation](https://authjs.dev)
4. Open an issue on GitHub

## Next Steps

After getting the app running:

1. ✅ Test the authentication flow
2. ✅ Explore the dashboard UI
3. 🔄 Set up a database (PostgreSQL, MongoDB, etc.)
4. 🔄 Implement GitHub API integration
5. 🔄 Build the RAG indexing backend
6. 🔄 Create the VS Code extension

Happy coding! 🚀
