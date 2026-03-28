import Link from "next/link";
import { Server, MoreVertical, Play, Square, RotateCw } from "lucide-react";

export default function ServersPage() {
  const servers = [
    { id: "srv-1", name: "Minecraft SMP", type: "Minecraft", status: "online", players: "12/20", ip: "192.168.1.100:25565" },
    { id: "srv-2", name: "CS:GO Matchmaking", type: "Source Engine", status: "online", players: "10/10", ip: "192.168.1.101:27015" },
    { id: "srv-3", name: "Valheim Co-op", type: "Valheim", status: "offline", players: "0/10", ip: "192.168.1.102:2456" },
    { id: "srv-4", name: "Rust Main", type: "Rust", status: "restarting", players: "-/-", ip: "192.168.1.103:28015" },
    { id: "srv-5", name: "Company Website", type: "Web Server", status: "online", players: "N/A", ip: "192.168.1.104:80" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Servers</h2>
          <p className="text-muted-foreground mt-2">Manage all your hosted game and web servers.</p>
        </div>
        <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg font-medium transition-colors text-sm">
          + Create Server
        </button>
      </div>

      <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-muted/50 text-muted-foreground border-b border-border">
              <tr>
                <th className="px-6 py-4 font-medium">Server Name</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Game / Type</th>
                <th className="px-6 py-4 font-medium">Address</th>
                <th className="px-6 py-4 font-medium">Players</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {servers.map((server) => (
                <tr key={server.id} className="hover:bg-accent/50 transition-colors group">
                  <td className="px-6 py-4">
                    <Link href={`/servers/${server.id}`} className="flex items-center font-medium text-foreground hover:text-primary transition-colors">
                      <Server className="w-4 h-4 mr-3 text-muted-foreground group-hover:text-primary transition-colors" />
                      {server.name}
                    </Link>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className={`w-2 h-2 rounded-full mr-2 ${
                        server.status === 'online' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' :
                        server.status === 'restarting' ? 'bg-amber-500 animate-pulse' :
                        'bg-red-500'
                      }`} />
                      <span className="capitalize">{server.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">{server.type}</td>
                  <td className="px-6 py-4 font-mono text-xs text-muted-foreground">{server.ip}</td>
                  <td className="px-6 py-4">{server.players}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end space-x-2">
                      <button className="p-1.5 text-muted-foreground hover:text-emerald-500 hover:bg-emerald-500/10 rounded transition-colors" title="Start">
                        <Play className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-muted-foreground hover:text-amber-500 hover:bg-amber-500/10 rounded transition-colors" title="Restart">
                        <RotateCw className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-muted-foreground hover:text-red-500 hover:bg-red-500/10 rounded transition-colors" title="Stop">
                        <Square className="w-4 h-4" />
                      </button>
                      <div className="w-px h-5 bg-border mx-1 my-auto" />
                      <button className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-accent rounded transition-colors">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
