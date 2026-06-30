import { BarChart3, Boxes, DollarSign, Package, UsersRound } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const metrics: Array<[string, string, LucideIcon]> = [
  ["Revenue", "$482K", DollarSign],
  ["Orders", "1,284", Package],
  ["Customers", "18.6K", UsersRound],
  ["Inventory Alerts", "27", Boxes]
];

export function AdminPage() {
  return (
    <main className="bg-surface">
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold text-secondary">Admin Dashboard</h1>
        <p className="mt-3 text-slate-600">Manage products, images, categories, inventory, customers, staff, reviews, discounts, sales, revenue, and inventory analytics.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {metrics.map(([label, value, Icon]) => (
            <article key={label} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <Icon className="text-primary" />
              <div className="mt-4 font-heading text-2xl font-bold text-secondary">{value}</div>
              <div className="text-sm font-semibold text-slate-500">{label}</div>
            </article>
          ))}
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_360px]">
          <section className="rounded-lg border border-slate-200 bg-white p-5">
            <div className="mb-5 flex items-center gap-2 font-heading text-xl font-bold text-secondary"><BarChart3 className="text-primary" /> Revenue Analytics</div>
            <div className="grid h-80 grid-cols-12 items-end gap-2">
              {[42, 55, 44, 71, 63, 88, 77, 96, 83, 104, 98, 121].map((height, index) => (
                <div key={index} className="rounded-t bg-primary/80" style={{ height: `${height * 2}px` }} />
              ))}
            </div>
          </section>
          <aside className="rounded-lg border border-slate-200 bg-white p-5">
            <h2 className="font-heading text-xl font-bold text-secondary">Operations Queue</h2>
            {["Approve bulk quote", "Review warranty claim", "Restock NVMe drives", "Assign service technician"].map((item) => (
              <div key={item} className="mt-4 rounded-md bg-surface p-3 text-sm font-semibold text-slate-700">{item}</div>
            ))}
          </aside>
        </div>
      </section>
    </main>
  );
}
