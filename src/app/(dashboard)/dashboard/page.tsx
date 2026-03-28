import { Server, Cpu, HardDrive, Activity } from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";
import { UsageChart } from "@/components/dashboard/UsageChart";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground mt-2">
          Overview of your hosted servers and resource usage.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard 
          title="Active Servers" 
          value="12" 
          icon={Server} 
          trend="+2" 
          trendUp={true} 
        />
        <StatCard 
          title="Avg CPU Load" 
          value="45%" 
          icon={Cpu} 
          trend="-5%" 
          trendUp={true} 
        />
        <StatCard 
          title="Memory Usage" 
          value="64 GB" 
          icon={HardDrive} 
          trend="+8 GB" 
          trendUp={false} 
        />
        <StatCard 
          title="Network Traffic" 
          value="2.4 TB" 
          icon={Activity} 
          trend="+15%" 
          trendUp={false} 
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-7">
        <div className="bg-card border border-border rounded-xl p-6 shadow-sm lg:col-span-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold">System Resource Usage</h3>
              <p className="text-sm text-muted-foreground">CPU and Memory consumption over 24h</p>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-primary mr-2" />
                <span>CPU</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-emerald-500 mr-2" />
                <span>RAM</span>
              </div>
            </div>
          </div>
          <UsageChart />
        </div>

        <div className="bg-card border border-border rounded-xl p-6 shadow-sm lg:col-span-3">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-6">
            {[
              { title: "Minecraft SMP Started", time: "10 minutes ago", status: "success" },
              { title: "CS:GO Match Server Restarted", time: "2 hours ago", status: "warning" },
              { title: "Web Server CPU Spike", time: "5 hours ago", status: "danger" },
              { title: "Valheim Server Stopped", time: "Current", status: "neutral" },
            ].map((activity, i) => (
              <div key={i} className="flex items-start">
                <div className="mt-0.5">
                  <div className={`w-2.5 h-2.5 rounded-full ${
                    activity.status === 'success' ? 'bg-emerald-500' :
                    activity.status === 'warning' ? 'bg-amber-500' :
                    activity.status === 'danger' ? 'bg-red-500' :
                    'bg-slate-500'
                  }`} />
                </div>
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">{activity.title}</p>
                  <p className="text-sm text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
