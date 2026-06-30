import { ArrowRight, CheckCircle2, Cpu, Headphones, Network, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { ProductCard } from "../components/ProductCard";
import { categories, products, services } from "../data/catalog";

const stats = [
  ["24/7", "Business support"],
  ["3K+", "Devices deployed"],
  ["98%", "Customer satisfaction"],
  ["42", "Certified technicians"]
];

const trustSignals: Array<[LucideIcon, string]> = [
  [Truck, "Fast Delivery"],
  [ShieldCheck, "Secure Warranty"],
  [Headphones, "Expert Support"]
];

export function HomePage() {
  return (
    <main>
      <section className="hero-grid overflow-hidden bg-surface">
        <div className="mx-auto grid min-h-[620px] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-bold text-primary shadow-sm">
              <Sparkles size={17} /> Empowering Businesses Through Technology.
            </span>
            <h1 className="mt-6 font-heading text-5xl font-extrabold tracking-tight text-secondary sm:text-6xl">
              Skyline Computer World
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              A premium technology marketplace for devices, infrastructure, IT services, support, procurement, and scalable business solutions.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/catalog" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-bold text-white shadow-skyline hover:bg-blue-700">
                Shop Technology <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-3 font-bold text-secondary hover:border-primary hover:text-primary">
                Book IT Service
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map(([value, label]) => (
                <div key={label} className="rounded-lg border border-slate-200 bg-white p-4">
                  <div className="font-heading text-2xl font-bold text-secondary">{value}</div>
                  <div className="text-sm text-slate-500">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55 }} className="relative">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1500&q=80"
              alt="Modern technology workspace"
              className="h-[470px] w-full rounded-lg object-cover shadow-skyline"
            />
            <div className="glass absolute bottom-5 left-5 right-5 grid gap-3 rounded-lg p-4 sm:grid-cols-3">
              {trustSignals.map(([Icon, label]) => (
                <div key={label} className="flex items-center gap-2 text-sm font-bold text-secondary">
                  <Icon className="text-primary" size={18} /> {label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Section title="Featured Products" action="/catalog">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </Section>

      <Section title="Popular Categories">
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {categories.slice(0, 10).map((category) => (
            <Link key={category} to={`/catalog?category=${encodeURIComponent(category)}`} className="rounded-lg border border-slate-200 bg-white p-4 font-bold text-secondary shadow-sm hover:border-primary hover:text-primary">
              {category}
            </Link>
          ))}
        </div>
      </Section>

      <Section title="IT Services">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service, index) => (
            <div key={service} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-md bg-blue-50 text-primary">
                {index % 3 === 0 ? <Cpu /> : index % 3 === 1 ? <Network /> : <ShieldCheck />}
              </div>
              <h3 className="font-heading text-lg font-bold text-secondary">{service}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">Certified technicians, clear estimates, appointment booking, and warranty-backed work.</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Why Choose Us">
        <div className="grid gap-4 md:grid-cols-3">
          {["Enterprise-grade procurement", "Verified technical experts", "Transparent support lifecycle"].map((item) => (
            <div key={item} className="flex gap-3 rounded-lg bg-surface p-5">
              <CheckCircle2 className="mt-1 shrink-0 text-success" />
              <div>
                <h3 className="font-bold text-secondary">{item}</h3>
                <p className="mt-1 text-sm text-slate-600">Built for reliable purchasing, deployment, maintenance, and long-term technology planning.</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Latest Technology News">
        <div className="grid gap-4 md:grid-cols-3">
          {["AI PCs arrive for business teams", "How Wi-Fi 7 changes office networks", "Choosing storage for creative workloads"].map((title) => (
            <article key={title} className="rounded-lg border border-slate-200 bg-white p-5">
              <span className="text-xs font-bold uppercase tracking-wide text-primary">Insights</span>
              <h3 className="mt-2 font-heading text-lg font-bold text-secondary">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">Practical guidance from Skyline engineers for smarter technology decisions.</p>
            </article>
          ))}
        </div>
      </Section>

      <footer className="bg-secondary py-12 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
          <div>
            <h2 className="font-heading text-2xl font-bold">Skyline Computer World</h2>
            <p className="mt-3 max-w-xl text-slate-300">Technology marketplace, support desk, and business IT partner in one scalable digital platform.</p>
          </div>
          <div>
            <h3 className="font-bold">Platform</h3>
            <p className="mt-3 text-sm text-slate-300">Marketplace, services, support, accounts, warranties, orders, analytics.</p>
          </div>
          <div>
            <h3 className="font-bold">Newsletter</h3>
            <div className="mt-3 flex gap-2">
              <input className="min-w-0 flex-1 rounded-md border-0 px-3 py-2 text-slate-900" placeholder="Email address" />
              <button className="rounded-md bg-accent px-4 py-2 font-bold text-secondary">Join</button>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Section({ title, action, children }: { title: string; action?: string; children: ReactNode }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mb-7 flex items-center justify-between gap-4">
        <h2 className="font-heading text-3xl font-bold text-secondary">{title}</h2>
        {action && <Link to={action} className="font-bold text-primary hover:text-blue-700">View all</Link>}
      </div>
      {children}
    </section>
  );
}
