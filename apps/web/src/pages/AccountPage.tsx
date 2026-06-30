import { Bell, FileText, Heart, MapPin, PackageCheck, UserRound } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const tiles: Array<[string, LucideIcon]> = [
  ["Profile", UserRound],
  ["Addresses", MapPin],
  ["Wishlist", Heart],
  ["Orders", PackageCheck],
  ["Invoices", FileText],
  ["Notifications", Bell]
];

export function AccountPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="font-heading text-4xl font-bold text-secondary">Account Dashboard</h1>
      <p className="mt-3 text-slate-600">A personal hub for profile, addresses, wishlist, orders, invoices, notifications, saved products, and purchase history.</p>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {tiles.map(([label, Icon]) => (
          <article key={label} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <Icon className="mb-4 text-primary" />
            <h2 className="font-heading text-xl font-bold text-secondary">{label}</h2>
            <p className="mt-2 text-sm text-slate-600">Secure authenticated access with JWT, OAuth, role permissions, and audit trails.</p>
          </article>
        ))}
      </div>
    </main>
  );
}
