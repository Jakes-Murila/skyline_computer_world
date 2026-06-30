import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Scale, ShoppingCart, Star } from "lucide-react";
import { products } from "../data/catalog";
import { ProductCard } from "../components/ProductCard";
import { useCart } from "../store/cart";

export function ProductDetailsPage() {
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug) ?? products[0];
  const [image, setImage] = useState(product.images[0]);
  const related = useMemo(() => products.filter((item) => item.category === product.category && item.id !== product.id).concat(products).slice(0, 3), [product]);
  const cart = useCart();

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Link to="/catalog" className="text-sm font-bold text-primary">Back to catalog</Link>
      <section className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <div className="overflow-hidden rounded-lg bg-surface">
            <img src={image} alt={product.name} className="h-[520px] w-full object-cover transition hover:scale-105" />
          </div>
          <div className="mt-3 flex gap-3">
            {product.images.map((item) => (
              <button key={item} onClick={() => setImage(item)} className={`h-20 w-24 overflow-hidden rounded-md border ${image === item ? "border-primary" : "border-slate-200"}`}>
                <img src={item} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>
        <div>
          <span className="text-sm font-bold uppercase tracking-wide text-primary">{product.brand} / {product.category}</span>
          <h1 className="mt-2 font-heading text-4xl font-bold text-secondary">{product.name}</h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">{product.description}</p>
          <div className="mt-5 flex items-center gap-3">
            <span className="flex items-center gap-1 font-bold text-warning"><Star size={18} fill="currentColor" /> {product.rating}</span>
            <span className="text-slate-500">{product.reviewCount} reviews</span>
            <span className="rounded-md bg-green-50 px-2 py-1 text-sm font-bold text-success">{product.availability}</span>
          </div>
          <div className="mt-6 flex items-end gap-3">
            <span className="font-heading text-4xl font-bold text-secondary">${product.price.toLocaleString()}</span>
            {product.oldPrice && <span className="text-lg font-semibold text-slate-400 line-through">${product.oldPrice.toLocaleString()}</span>}
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <button onClick={() => cart.add(product.id)} className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 font-bold text-white hover:bg-blue-700">
              <ShoppingCart size={19} /> Add to Cart
            </button>
            <button className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 px-5 py-3 font-bold text-secondary hover:border-primary hover:text-primary">
              <Scale size={19} /> Compare
            </button>
          </div>
          <dl className="mt-8 grid gap-3 rounded-lg border border-slate-200 bg-surface p-5 sm:grid-cols-2">
            <div><dt className="text-sm font-bold text-slate-500">Warranty</dt><dd className="font-semibold">{product.warranty}</dd></div>
            <div><dt className="text-sm font-bold text-slate-500">Delivery</dt><dd className="font-semibold">{product.deliveryEstimate}</dd></div>
            {Object.entries(product.specs).map(([key, value]) => (
              <div key={key}><dt className="text-sm font-bold text-slate-500">{key}</dt><dd className="font-semibold">{value}</dd></div>
            ))}
          </dl>
        </div>
      </section>
      <section className="mt-14 grid gap-5 lg:grid-cols-3">
        {["Features", "Frequently Bought Together", "Questions & Answers"].map((title) => (
          <div key={title} className="rounded-lg border border-slate-200 p-5">
            <h2 className="font-heading text-xl font-bold text-secondary">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">Detailed guidance, compatibility checks, customer Q&A, and technician-backed recommendations live here.</p>
          </div>
        ))}
      </section>
      <section className="mt-14">
        <h2 className="mb-5 font-heading text-2xl font-bold text-secondary">Related Products</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {related.map((item) => <ProductCard key={`${product.id}-${item.id}`} product={item} />)}
        </div>
      </section>
    </main>
  );
}
