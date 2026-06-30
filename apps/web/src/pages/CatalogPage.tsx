import { Filter, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { ProductCard } from "../components/ProductCard";
import { categories, products } from "../data/catalog";

export function CatalogPage({ title = "Product Catalog" }: { title?: string }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(2600);

  const filtered = useMemo(() => {
    const normalized = query.toLowerCase();
    return products.filter((product) => {
      const searchable = [product.name, product.brand, product.category, product.shortDescription, ...Object.values(product.specs), ...product.tags].join(" ").toLowerCase();
      return searchable.includes(normalized) && (category === "All" || product.category === category) && product.price <= maxPrice;
    });
  }, [category, maxPrice, query]);

  return (
    <main className="bg-surface">
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-7">
          <h1 className="font-heading text-4xl font-bold text-secondary">{title}</h1>
          <p className="mt-3 max-w-2xl text-slate-600">Search by product, brand, category, processor, RAM, storage, graphics, operating system, price, and future AI-style shopping intent.</p>
        </div>
        <div className="grid gap-5 lg:grid-cols-[280px_1fr]">
          <aside className="h-fit rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center gap-2 font-heading text-lg font-bold text-secondary">
              <Filter size={19} /> Filters
            </div>
            <label className="text-sm font-bold text-slate-700">Category</label>
            <select value={category} onChange={(event) => setCategory(event.target.value)} className="mt-2 w-full rounded-md border border-slate-200 px-3 py-2">
              <option>All</option>
              {categories.map((item) => <option key={item}>{item}</option>)}
            </select>
            <label className="mt-5 block text-sm font-bold text-slate-700">Max price: ${maxPrice}</label>
            <input type="range" min="300" max="3000" step="50" value={maxPrice} onChange={(event) => setMaxPrice(Number(event.target.value))} className="mt-2 w-full" />
            <div className="mt-5 space-y-2 text-sm text-slate-600">
              {["Brand", "RAM", "Storage", "Processor", "Graphics Card", "Operating System", "Availability", "Rating", "Warranty"].map((filter) => (
                <div key={filter} className="flex items-center gap-2">
                  <input type="checkbox" className="rounded border-slate-300 text-primary" /> {filter}
                </div>
              ))}
            </div>
          </aside>
          <div>
            <div className="mb-5 flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm">
              <Search className="text-slate-400" />
              <input value={query} onChange={(event) => setQuery(event.target.value)} className="w-full border-0 outline-none" placeholder="Try: Best laptop for programming, RTX, office laptop with 16GB RAM" />
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filtered.map((product) => <ProductCard key={product.id} product={product} />)}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
