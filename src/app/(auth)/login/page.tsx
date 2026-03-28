import Link from "next/link";
import { Terminal } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="border border-border bg-card/50 backdrop-blur-xl p-8 rounded-2xl shadow-2xl">
      <div className="flex flex-col items-center mb-8">
        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 border border-primary/20">
          <Terminal className="w-6 h-6 text-primary" />
        </div>
        <h1 className="text-2xl font-bold text-card-foreground">Welcome back</h1>
        <p className="text-muted-foreground text-sm mt-2">Enter your credentials to access your servers</p>
      </div>

      <form className="space-y-4">
        <div>
          <label className="text-sm font-medium text-card-foreground mb-1.5 block">Email</label>
          <input 
            type="email" 
            placeholder="admin@example.com" 
            className="w-full h-10 rounded-lg border border-border bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-card-foreground mb-1.5 block">Password</label>
          <input 
            type="password" 
            placeholder="••••••••" 
            className="w-full h-10 rounded-lg border border-border bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground"
          />
        </div>

        <div className="flex items-center justify-between mt-2">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 rounded border-border bg-background text-primary focus:ring-primary focus:ring-offset-background" />
            <span className="text-xs text-muted-foreground font-medium">Remember me</span>
          </label>
          <Link href="#" className="text-xs text-primary hover:text-primary/80 transition-colors font-medium">
            Forgot password?
          </Link>
        </div>

        <Link href="/dashboard" className="w-full h-10 mt-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg flex items-center justify-center text-sm font-medium transition-colors">
          Sign In
        </Link>
      </form>

      <div className="mt-6 flex items-center justify-center space-x-4 text-xs text-muted-foreground">
        <div className="h-px flex-1 bg-border" />
        <span className="uppercase text-[10px] font-semibold tracking-wider">or continue with</span>
        <div className="h-px flex-1 bg-border" />
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <button className="h-10 border border-border rounded-lg flex items-center justify-center space-x-2 hover:bg-accent transition-colors">
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"></path></svg>
          <span className="text-sm font-medium">GitHub</span>
        </button>
        <button className="h-10 border border-border rounded-lg flex items-center justify-center space-x-2 hover:bg-accent transition-colors">
          <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true" focusable="false"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path></svg>
          <span className="text-sm font-medium">Google</span>
        </button>
      </div>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="text-primary hover:text-primary/80 font-medium transition-colors">
          Sign up
        </Link>
      </p>
    </div>
  );
}
