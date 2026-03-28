"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, Play, Square, RotateCw, Terminal, Settings, Activity, Cpu, HardDrive, CpuIcon, Server } from "lucide-react";
import { UsageChart } from "@/components/dashboard/UsageChart";

export default function ServerDetailsPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock server info
  const server = {
    id: params.id,
    name: "Minecraft SMP",
    type: "Minecraft Java Edition",
    status: "online",
    ip: "192.168.1.100:25565",
    node: "Node-EU-West-03"
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Link href="/servers" className="p-2 hover:bg-accent rounded-lg transition-colors border border-transparent hover:border-border">
          <ChevronLeft className="w-5 h-5" />
        </Link>
        <div>
          <div className="flex items-center space-x-3">
            <h2 className="text-3xl font-bold tracking-tight">{server.name}</h2>
            <div className="flex items-center px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-semibold uppercase tracking-wider">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse" />
              Online
            </div>
          </div>
          <p className="text-muted-foreground mt-1 text-sm font-mono">{server.ip}</p>
        </div>
        
        <div className="ml-auto flex items-center space-x-3">
          <button className="flex items-center px-4 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-500 border border-emerald-500/20 rounded-lg text-sm font-medium transition-colors">
            <Play className="w-4 h-4 mr-2" /> Start
          </button>
          <button className="flex items-center px-4 py-2 bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 border border-amber-500/20 rounded-lg text-sm font-medium transition-colors">
            <RotateCw className="w-4 h-4 mr-2" /> Restart
          </button>
          <button className="flex items-center px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/20 rounded-lg text-sm font-medium transition-colors">
            <Square className="w-4 h-4 mr-2" /> Stop
          </button>
        </div>
      </div>

      <div className="flex space-x-1 border-b border-border">
        {['overview', 'console', 'settings'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors capitalize ${
              activeTab === tab 
                ? 'border-primary text-primary' 
                : 'border-transparent text-muted-foreground hover:text-foreground hover:border-border'
            }`}
          >
            <div className="flex items-center">
              {tab === 'overview' && <Activity className="w-4 h-4 mr-2" />}
              {tab === 'console' && <Terminal className="w-4 h-4 mr-2" />}
              {tab === 'settings' && <Settings className="w-4 h-4 mr-2" />}
              {tab}
            </div>
          </button>
        ))}
      </div>

      <div className="pt-4">
        {activeTab === 'overview' && (
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-6 md:col-span-1">
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4 text-card-foreground">Details</h3>
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="text-muted-foreground mb-1">Server ID</dt>
                    <dd className="font-mono bg-background p-2 rounded border border-border">{server.id}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground mb-1">Node</dt>
                    <dd className="font-medium flex items-center"><Server className="w-3.5 h-3.5 mr-2 text-muted-foreground"/> {server.node}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground mb-1">Game Type</dt>
                    <dd className="font-medium">{server.type}</dd>
                  </div>
                </dl>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4 text-card-foreground">Resources</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="flex items-center text-muted-foreground"><Cpu className="w-3.5 h-3.5 mr-1.5"/> CPU</span>
                      <span className="font-medium text-foreground">55% / 200%</span>
                    </div>
                    <div className="w-full bg-background rounded-full h-2 border border-border overflow-hidden">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '27.5%' }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="flex items-center text-muted-foreground"><HardDrive className="w-3.5 h-3.5 mr-1.5"/> Memory</span>
                      <span className="font-medium text-foreground">4.2 GB / 8 GB</span>
                    </div>
                    <div className="w-full bg-background rounded-full h-2 border border-border overflow-hidden">
                      <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '52.5%' }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="flex items-center text-muted-foreground"><HardDrive className="w-3.5 h-3.5 mr-1.5"/> Disk</span>
                      <span className="font-medium text-foreground">12 GB / 20 GB</span>
                    </div>
                    <div className="w-full bg-background rounded-full h-2 border border-border overflow-hidden">
                      <div className="bg-amber-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm h-full">
                <h3 className="text-lg font-semibold mb-4 text-card-foreground">Usage Statistics</h3>
                <UsageChart />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'console' && (
          <div className="bg-[#0c0c0c] border border-border rounded-xl shadow-xl overflow-hidden font-mono text-sm leading-relaxed flex flex-col h-[600px]">
            <div className="bg-card px-4 py-2 border-b border-border flex items-center justify-between">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              </div>
              <span className="text-xs text-muted-foreground font-sans">root@{server.node}: ~/server</span>
            </div>
            <div className="p-4 overflow-y-auto flex-1 text-gray-300 space-y-1">
              <div><span className="text-emerald-400">[12:44:03] [Server thread/INFO]:</span> Starting minecraft server version 1.20.1</div>
              <div><span className="text-emerald-400">[12:44:03] [Server thread/INFO]:</span> Loading properties</div>
              <div><span className="text-emerald-400">[12:44:03] [Server thread/INFO]:</span> Default game type: SURVIVAL</div>
              <div><span className="text-emerald-400">[12:44:03] [Server thread/INFO]:</span> Generating keypair</div>
              <div><span className="text-emerald-400">[12:44:04] [Server thread/INFO]:</span> Starting Minecraft server on *:25565</div>
              <div><span className="text-amber-400">[12:44:04] [Server thread/WARN]:</span> Using default channel type</div>
              <div><span className="text-emerald-400">[12:44:06] [Server thread/INFO]:</span> Preparing level "world"</div>
              <div><span className="text-emerald-400">[12:44:07] [Server thread/INFO]:</span> Preparing start region for dimension minecraft:overworld</div>
              <div><span className="text-emerald-400">[12:44:08] [Server thread/INFO]:</span> Time elapsed: 1475 ms</div>
              <div><span className="text-emerald-400">[12:44:08] [Server thread/INFO]:</span> Done (5.146s)! For help, type "help"</div>
              <div><span className="text-blue-400">[14:12:33] [User Authenticator/INFO]:</span> UUID of player Notch is 069a79f4-44e9-4726-a5be-fca90e38aaf5</div>
              <div><span className="text-emerald-400">[14:12:33] [Server thread/INFO]:</span> Notch joined the game</div>
            </div>
            <div className="p-4 bg-black/40 border-t border-border flex items-center">
              <span className="text-emerald-400 mr-2">❯</span>
              <input type="text" className="bg-transparent border-none outline-none text-gray-300 flex-1 font-mono text-sm placeholder:text-gray-600" placeholder="Type a command..." />
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm max-w-2xl">
            <h3 className="text-lg font-semibold mb-6 text-card-foreground">Server Configuration</h3>
            <div className="space-y-6">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Server Name</label>
                <input type="text" defaultValue={server.name} className="w-full h-10 rounded-lg border border-border bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Startup Command</label>
                <input type="text" defaultValue="java -Xms128M -Xmx8192M -jar server.jar nogui" className="w-full h-10 rounded-lg border border-border bg-background px-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/50" />
              </div>
              <div className="space-y-3 pt-4 border-t border-border">
                <h4 className="text-sm font-medium text-foreground">Advanced Actions</h4>
                <div className="flex items-center justify-between p-4 border border-border rounded-lg bg-background">
                  <div>
                    <h5 className="text-sm font-medium text-foreground">Reinstall Server</h5>
                    <p className="text-xs text-muted-foreground mt-1">This will delete all files and start fresh.</p>
                  </div>
                  <button className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg text-sm font-medium transition-colors">
                    Reinstall
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 border border-red-500/20 rounded-lg bg-red-500/5">
                  <div>
                    <h5 className="text-sm font-medium text-red-500">Delete Server</h5>
                    <p className="text-xs text-red-500/80 mt-1">This action cannot be undone. All data will be lost.</p>
                  </div>
                  <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm font-medium transition-colors">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
