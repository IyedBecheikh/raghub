import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github } from "lucide-react";
import { signIn } from "@/lib/auth/auth";

export default async function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-3xl font-bold">RAGHub</CardTitle>
          <CardDescription className="text-base">
            GitHub Repository RAG Indexing SaaS
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground text-center">
              Index your GitHub repositories and get intelligent insights with AI-powered search.
            </p>
          </div>
          <form
            action={async () => {
              "use server"
              await signIn("github", { redirectTo: "/dashboard" })
            }}
          >
            <Button className="w-full" size="lg" type="submit">
              <Github className="mr-2 h-5 w-5" />
              Sign in with GitHub
            </Button>
          </form>
          <p className="text-xs text-center text-muted-foreground">
            By signing in, you agree to our Terms of Service and Privacy Policy.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

