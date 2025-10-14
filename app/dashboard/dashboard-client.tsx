"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, LogOut, Loader2, CheckCircle2, Clock } from "lucide-react";
import { useState } from "react";

interface Repo {
  id: number;
  name: string;
  fullName: string;
  description: string | null;
  isPrivate: boolean;
  stars: number;
  language: string | null;
  indexStatus: "not_indexed" | "indexing" | "indexed";
}

const mockRepos: Repo[] = [
  {
    id: 1,
    name: "raghub",
    fullName: "IyedBecheikh/raghub",
    description: "GitHub Repository RAG Indexing SaaS",
    isPrivate: false,
    stars: 42,
    language: "TypeScript",
    indexStatus: "indexed",
  },
  {
    id: 2,
    name: "awesome-project",
    fullName: "IyedBecheikh/awesome-project",
    description: "An awesome project with great features",
    isPrivate: false,
    stars: 128,
    language: "JavaScript",
    indexStatus: "not_indexed",
  },
  {
    id: 3,
    name: "private-repo",
    fullName: "IyedBecheikh/private-repo",
    description: "A private repository for internal use",
    isPrivate: true,
    stars: 5,
    language: "Python",
    indexStatus: "indexing",
  },
  {
    id: 4,
    name: "data-science-toolkit",
    fullName: "IyedBecheikh/data-science-toolkit",
    description: "Collection of data science utilities and tools",
    isPrivate: false,
    stars: 256,
    language: "Python",
    indexStatus: "not_indexed",
  },
];

export function DashboardClient({ user }: { user: { name?: string | null; email?: string | null } }) {
  const [repos, setRepos] = useState<Repo[]>(mockRepos);

  const handleIndexRepo = (repoId: number) => {
    setRepos((prevRepos) =>
      prevRepos.map((repo) =>
        repo.id === repoId ? { ...repo, indexStatus: "indexing" } : repo
      )
    );

    setTimeout(() => {
      setRepos((prevRepos) =>
        prevRepos.map((repo) =>
          repo.id === repoId ? { ...repo, indexStatus: "indexed" } : repo
        )
      );
    }, 3000);
  };

  const getStatusBadge = (status: Repo["indexStatus"]) => {
    switch (status) {
      case "indexed":
        return (
          <Badge variant="default" className="bg-green-600 hover:bg-green-600/80">
            <CheckCircle2 className="mr-1 h-3 w-3" />
            Indexed
          </Badge>
        );
      case "indexing":
        return (
          <Badge variant="secondary">
            <Loader2 className="mr-1 h-3 w-3 animate-spin" />
            Indexing...
          </Badge>
        );
      case "not_indexed":
        return (
          <Badge variant="outline">
            <Clock className="mr-1 h-3 w-3" />
            Not Indexed
          </Badge>
        );
    }
  };

  const getActionButton = (repo: Repo) => {
    switch (repo.indexStatus) {
      case "indexed":
        return (
          <Button variant="outline" size="sm" disabled>
            <CheckCircle2 className="mr-2 h-4 w-4" />
            Indexed
          </Button>
        );
      case "indexing":
        return (
          <Button variant="secondary" size="sm" disabled>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Indexing...
          </Button>
        );
      case "not_indexed":
        return (
          <Button
            variant="default"
            size="sm"
            onClick={() => handleIndexRepo(repo.id)}
          >
            Index Repository
          </Button>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <header className="border-b bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Github className="h-8 w-8" />
            <div>
              <h1 className="text-2xl font-bold">RAGHub</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">Repository Indexing Dashboard</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm font-medium">{user?.name || "User"}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{user?.email}</p>
            </div>
            <form action="/api/auth/signout" method="POST">
              <Button variant="outline" size="sm" type="submit">
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </Button>
            </form>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Your Repositories</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Connected repositories from your GitHub account
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo) => (
            <Card key={repo.id} className="flex flex-col">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg">{repo.name}</CardTitle>
                  {getStatusBadge(repo.indexStatus)}
                </div>
                <CardDescription className="text-xs font-mono">
                  {repo.fullName}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {repo.description || "No description available"}
                </p>
                <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
                  {repo.language && (
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-500 mr-1" />
                      {repo.language}
                    </div>
                  )}
                  <div>⭐ {repo.stars}</div>
                  {repo.isPrivate && (
                    <Badge variant="outline" className="text-xs">
                      Private
                    </Badge>
                  )}
                </div>
              </CardContent>
              <CardFooter>{getActionButton(repo)}</CardFooter>
            </Card>
          ))}
        </div>

        {repos.length === 0 && (
          <Card>
            <CardContent className="py-12 text-center">
              <Github className="h-12 w-12 mx-auto mb-4 text-gray-500 dark:text-gray-400" />
              <h3 className="text-lg font-semibold mb-2">No repositories found</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Connect your GitHub account to see your repositories here.
              </p>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
}
