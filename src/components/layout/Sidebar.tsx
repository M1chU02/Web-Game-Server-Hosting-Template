import Link from "next/link";
import {
  Server,
  LayoutDashboard,
  CreditCard,
  Settings,
  Terminal,
  LogOut,
  ChevronRight
} from "lucide-react";

export function Sidebar() {
  const routes = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/dashboard",
      color: "text-primary",
    },
    {
      label: "Servers",
      icon: Server,
      href: "/servers",
      color: "text-primary",
    },
    {
      label: "Billing",
      icon: CreditCard,
      href: "/billing",
      color: "text-primary",
    },
    {
      label: "Settings",
      icon: Settings,
      href: "/settings",
      color: "text-muted-foreground",
    },
  ];

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-card border-r border-border w-64 text-card-foreground">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <Terminal className="w-8 h-8 text-primary mr-2" />
          <h1 className="text-2xl font-bold">
            Nexus
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-accent hover:text-accent-foreground rounded-lg transition-all"
            >
              <div className="flex items-center flex-1">
                <route.icon className={`h-5 w-5 mr-3 ${route.color}`} />
                {route.label}
              </div>
              <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition duration-200" />
            </Link>
          ))}
        </div>
      </div>
      
      {/* Footer Log Out Area */}
      <div className="px-3">
        <Link href="/login" className="text-sm group flex p-3 w-full justify-start font-medium cursor-pointer text-muted-foreground hover:bg-accent hover:text-accent-foreground rounded-lg transition-all">
          <LogOut className="h-5 w-5 mr-3" />
          Log Out
        </Link>
      </div>
    </div>
  );
}
