import { User, Bell, Shield, KeyRound } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground mt-2">Manage your account preferences and security.</p>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        {/* Settings Navigation */}
        <div className="md:col-span-1 space-y-1">
          <button className="w-full flex items-center px-4 py-2.5 text-sm font-medium rounded-lg bg-primary/10 text-primary transition-colors text-left">
            <User className="w-4 h-4 mr-3" /> Profile
          </button>
          <button className="w-full flex items-center px-4 py-2.5 text-sm font-medium rounded-lg hover:bg-accent text-muted-foreground hover:text-foreground transition-colors text-left">
            <Shield className="w-4 h-4 mr-3" /> Security
          </button>
          <button className="w-full flex items-center px-4 py-2.5 text-sm font-medium rounded-lg hover:bg-accent text-muted-foreground hover:text-foreground transition-colors text-left">
            <Bell className="w-4 h-4 mr-3" /> Notifications
          </button>
          <button className="w-full flex items-center px-4 py-2.5 text-sm font-medium rounded-lg hover:bg-accent text-muted-foreground hover:text-foreground transition-colors text-left">
            <KeyRound className="w-4 h-4 mr-3" /> API Keys
          </button>
        </div>

        {/* Settings Content */}
        <div className="md:col-span-3 space-y-6">
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-6">Profile Information</h3>
            <div className="space-y-5">
              <div className="flex items-center space-x-6 mb-6">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center text-primary text-2xl font-bold">
                  JD
                </div>
                <div>
                  <button className="px-4 py-2 bg-accent hover:bg-accent/80 text-foreground text-sm font-medium rounded-lg transition-colors border border-border">
                    Upload new picture
                  </button>
                  <p className="text-xs text-muted-foreground mt-2">JPG or PNG. Max size of 2MB.</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">First Name</label>
                  <input type="text" defaultValue="John" className="w-full h-10 rounded-lg border border-border bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Last Name</label>
                  <input type="text" defaultValue="Doe" className="w-full h-10 rounded-lg border border-border bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Email Address</label>
                <input type="email" defaultValue="admin@example.com" className="w-full h-10 rounded-lg border border-border bg-muted text-muted-foreground px-3 text-sm focus:outline-none cursor-not-allowed" readOnly />
                <p className="text-xs text-muted-foreground mt-1">To change your email address, please contact support.</p>
              </div>

              <div className="pt-4 border-t border-border flex justify-end">
                <button className="px-6 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-colors text-sm">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
