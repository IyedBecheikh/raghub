import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RAGHub - GitHub Repository RAG Indexing SaaS",
  description: "Index your GitHub repositories with AI-powered search",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

