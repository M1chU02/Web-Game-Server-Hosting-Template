import { CheckCircle2, CreditCard, Sparkles } from "lucide-react";

export default function BillingPage() {
  return (
    <div className="space-y-8 max-w-5xl">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Billing & Plans</h2>
        <p className="text-muted-foreground mt-2">Manage your subscription and payment methods.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Current Plan Card */}
        <div className="md:col-span-2 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-10">
            <Sparkles className="w-24 h-24" />
          </div>
          <div className="relative z-10 w-full h-full flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4 border border-primary/20">
                Current Plan
              </div>
              <h3 className="text-2xl font-bold text-foreground">Pro Tier</h3>
              <p className="text-muted-foreground mt-2 max-w-md">
                You have access to 8 cores, 32GB RAM, and priority support. Perfect for community servers.
              </p>
            </div>
            <div className="mt-8 flex items-end justify-between">
              <div>
                <p className="text-3xl font-bold text-foreground">$49.99<span className="text-lg text-muted-foreground font-normal">/mo</span></p>
                <p className="text-sm text-muted-foreground mt-1">Next billing date: 28th April 2026</p>
              </div>
              <button className="px-6 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-colors">
                Upgrade Plan
              </button>
            </div>
          </div>
        </div>

        {/* Payment Method Card */}
        <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <CreditCard className="w-5 h-5 mr-2 text-muted-foreground" />
            Payment Method
          </h3>
          <div className="p-4 border border-border rounded-lg bg-background flex flex-col justify-between h-32">
            <div className="flex justify-between items-start">
              <div className="font-medium">•••• 4242</div>
              <div className="text-xs font-bold bg-muted px-2 py-1 rounded">VISA</div>
            </div>
            <div className="flex justify-between items-end text-sm text-muted-foreground">
              <span>Expires 12/28</span>
              <button className="text-primary hover:text-primary/80 transition-colors font-medium">Edit</button>
            </div>
          </div>
        </div>
      </div>

      {/* Invoices */}
      <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden mt-8">
        <div className="px-6 py-5 border-b border-border">
          <h3 className="text-lg font-semibold">Recent Invoices</h3>
        </div>
        <table className="w-full text-sm text-left border-collapse">
          <thead className="bg-muted/50 text-muted-foreground border-b border-border">
            <tr>
              <th className="px-6 py-3 font-medium">Invoice ID</th>
              <th className="px-6 py-3 font-medium">Date</th>
              <th className="px-6 py-3 font-medium">Amount</th>
              <th className="px-6 py-3 font-medium">Status</th>
              <th className="px-6 py-3 font-medium text-right">Download</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {[
              { id: "INV-2026-004", date: "Mar 28, 2026", amount: "$49.99", status: "Paid" },
              { id: "INV-2026-003", date: "Feb 28, 2026", amount: "$49.99", status: "Paid" },
              { id: "INV-2026-002", date: "Jan 28, 2026", amount: "$49.99", status: "Paid" },
            ].map((invoice, i) => (
              <tr key={i} className="hover:bg-accent/50 transition-colors">
                <td className="px-6 py-4 font-mono text-muted-foreground">{invoice.id}</td>
                <td className="px-6 py-4">{invoice.date}</td>
                <td className="px-6 py-4 font-medium">{invoice.amount}</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-medium">
                    <CheckCircle2 className="w-3 h-3 mr-1" />
                    {invoice.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-primary hover:text-primary/80 transition-colors font-medium">PDF</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
