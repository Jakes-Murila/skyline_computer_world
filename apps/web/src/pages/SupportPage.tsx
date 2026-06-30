import { HelpCircle, LifeBuoy, MessageSquareText, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const supportChannels: Array<[string, LucideIcon]> = [
  ["Live Chat", MessageSquareText],
  ["Support Tickets", LifeBuoy],
  ["FAQ", HelpCircle],
  ["Phone Support", Phone]
];

export function SupportPage() {
  return (
    <main className="bg-surface">
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold text-secondary">Customer Support</h1>
        <p className="mt-3 max-w-3xl text-slate-600">Live chat, support tickets, FAQ, email, phone support, technician booking, returns, refunds, and warranty claims.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {supportChannels.map(([label, Icon]) => (
            <div key={label} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <Icon className="mb-4 text-primary" />
              <h2 className="font-heading text-lg font-bold text-secondary">{label}</h2>
              <p className="mt-2 text-sm text-slate-600">Track status, owners, SLA timers, and customer notifications.</p>
            </div>
          ))}
        </div>
        <form className="mt-8 max-w-2xl rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="font-heading text-xl font-bold text-secondary">Open a Ticket</h2>
          <input className="mt-4 w-full rounded-md border border-slate-200 px-3 py-3" placeholder="Subject" />
          <textarea className="mt-3 min-h-36 w-full rounded-md border border-slate-200 px-3 py-3" placeholder="Describe the issue" />
          <button className="mt-3 rounded-md bg-primary px-5 py-3 font-bold text-white">Submit Ticket</button>
        </form>
      </section>
    </main>
  );
}
