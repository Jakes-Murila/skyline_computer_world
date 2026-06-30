import { Link, NavLink, Outlet } from "react-router-dom";
import { Building2, Heart, Search, ShieldCheck, ShoppingCart, UserRound } from "lucide-react";
import { useCart } from "../store/cart";

const navItems = [
  ["Marketplace", "/catalog"],
  ["Services", "/services"],
  ["Business", "/business"],
  ["Support", "/support"],
  ["Admin", "/admin"]
];

export function Layout() {
  const cart = useCart();

  return (
    <div className="min-h-screen bg-white font-body text-slate-800">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/92 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center gap-5 px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3" aria-label="Skyline Computer World home">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-primary text-white shadow-skyline">
              <Building2 size={22} />
            </span>
            <span>
              <span className="block font-heading text-lg font-bold tracking-tight text-secondary">Skyline</span>
              <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-primary">Computer World</span>
            </span>
          </Link>

          <nav className="hidden flex-1 justify-center gap-2 lg:flex">
            {navItems.map(([label, to]) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 text-sm font-semibold ${isActive ? "bg-surface text-primary" : "text-slate-600 hover:text-primary"}`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="ml-auto hidden min-w-64 items-center gap-2 rounded-lg border border-slate-200 bg-surface px-3 py-2 md:flex">
            <Search size={17} className="text-slate-400" />
            <span className="text-sm text-slate-500">Search laptops, RTX, 16GB RAM...</span>
          </div>

          <Link to="/wishlist" className="rounded-md p-2 text-slate-600 hover:bg-surface" aria-label="Wishlist">
            <Heart size={20} />
          </Link>
          <Link to="/account" className="rounded-md p-2 text-slate-600 hover:bg-surface" aria-label="Account">
            <UserRound size={20} />
          </Link>
          <Link to="/cart" className="relative rounded-md p-2 text-slate-600 hover:bg-surface" aria-label="Shopping cart">
            <ShoppingCart size={20} />
            {cart.count > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-primary px-1 text-xs font-bold text-white">
                {cart.count}
              </span>
            )}
          </Link>
        </div>
        <div className="border-t border-slate-100 bg-surface/70">
          <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-600 sm:px-6 lg:px-8">
            <ShieldCheck size={15} className="text-success" />
            Secure checkout, enterprise warranties, and professional IT support for every order.
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
}
