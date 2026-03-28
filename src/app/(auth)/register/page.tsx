import Link from "next/link";
import { Terminal } from "lucide-react";

export default function RegisterPage() {
  return (
    <div className="border border-border bg-card/50 backdrop-blur-xl p-8 rounded-2xl shadow-2xl">
      <div className="flex flex-col items-center mb-8">
        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 border border-primary/20">
          <Terminal className="w-6 h-6 text-primary" />
        </div>
        <h1 className="text-2xl font-bold text-card-foreground">Create an account</h1>
        <p className="text-muted-foreground text-sm mt-2">Start hosting your servers in seconds</p>
      </div>

      <form className="space-y-4">
        <div>
          <label className="text-sm font-medium text-card-foreground mb-1.5 block">Full Name</label>
          <input 
            type="text" 
            placeholder="John Doe" 
            className="w-full h-10 rounded-lg border border-border bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground"
          />
        </div>
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

        <Link href="/dashboard" className="w-full h-10 mt-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg flex items-center justify-center text-sm font-medium transition-colors">
          Create Account
        </Link>
      </form>

      <p className="mt-6 text-center text-sm text-muted-foreground leading-relaxed">
        By clicking continue, you agree to our{" "}
        <Link href="#" className="underline hover:text-foreground">Terms of Service</Link>{" "}
        and{" "}
        <Link href="#" className="underline hover:text-foreground">Privacy Policy</Link>.
      </p>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link href="/login" className="text-primary hover:text-primary/80 font-medium transition-colors">
          Sign in
        </Link>
      </p>
    </div>
  );
}
