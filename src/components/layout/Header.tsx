import { Bell, Search, User } from "lucide-react";

export function Header() {
  return (
    <header className="h-16 flex items-center justify-between px-6 bg-background border-b border-border sticky top-0 z-10 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60">
      
      <div className="flex items-center w-full max-w-sm ml-auto">
        {/* Can put breadcrumbs here if we want */}
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Search servers..." 
            className="h-9 w-64 rounded-md border border-border bg-card px-8 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
        
        <button className="relative p-2 rounded-full hover:bg-accent text-muted-foreground hover:text-foreground transition-colors">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-primary ring-2 ring-background"></span>
        </button>

        <button className="flex items-center gap-2 p-1.5 rounded-full border border-border hover:bg-accent transition-colors pl-2 pr-4">
          <div className="h-7 w-7 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium text-xs">
            JD
          </div>
          <span className="text-sm font-medium">J. Doe</span>
        </button>
      </div>
    </header>
  );
}
