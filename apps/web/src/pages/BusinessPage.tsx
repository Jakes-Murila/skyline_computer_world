import { BriefcaseBusiness, Cloud, Network, UsersRound } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const solutions: Array<[string, LucideIcon]> = [
  ["Bulk Procurement", BriefcaseBusiness],
  ["Corporate Accounts", UsersRound],
  ["Managed IT Services", Network],
  ["Cloud Solutions", Cloud],
  ["Infrastructure Planning", Network],
  ["Technology Consulting", BriefcaseBusiness]
];

export function BusinessPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="font-heading text-4xl font-bold text-secondary">Business Solutions</h1>
      <p className="mt-3 max-w-3xl text-slate-600">Procurement, managed services, network design, cloud migration, and advisory workflows for schools, companies, and organizations.</p>
      <section className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {solutions.map(([label, Icon]) => (
          <article key={label} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <Icon className="mb-4 text-primary" />
            <h2 className="font-heading text-xl font-bold text-secondary">{label}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">Account-based pricing, SLA support, approvals, invoices, project milestones, and deployment documentation.</p>
          </article>
        ))}
      </section>
      <section className="mt-10 rounded-lg bg-secondary p-8 text-white">
        <h2 className="font-heading text-2xl font-bold">Corporate Technology Desk</h2>
        <p className="mt-3 max-w-3xl text-slate-300">Give procurement teams a portal for quotes, purchase history, warranty claims, multi-location inventory, and executive analytics.</p>
      </section>
    </main>
  );
}
