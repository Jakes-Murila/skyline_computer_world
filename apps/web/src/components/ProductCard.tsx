import { Heart, Scale, ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Product } from "@skyline/shared";
import { useCart } from "../store/cart";

export function ProductCard({ product }: { product: Product }) {
  const cart = useCart();
  const discount = product.oldPrice ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) : 0;

  return (
    <motion.article
      whileHover={{ y: -5 }}
      className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:shadow-skyline"
    >
      <Link to={`/products/${product.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-surface">
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {discount > 0 && (
            <span className="absolute left-3 top-3 rounded-md bg-danger px-2 py-1 text-xs font-bold text-white">
              {discount}% OFF
            </span>
          )}
          <span className="absolute right-3 top-3 rounded-md bg-white/90 px-2 py-1 text-xs font-bold text-primary">
            {product.availability}
          </span>
        </div>
      </Link>
      <div className="space-y-4 p-4">
        <div>
          <div className="mb-2 flex items-center justify-between gap-3 text-xs font-bold uppercase tracking-wide text-slate-500">
            <span>{product.brand}</span>
            <span>{product.category}</span>
          </div>
          <Link to={`/products/${product.slug}`} className="font-heading text-lg font-bold text-secondary hover:text-primary">
            {product.name}
          </Link>
          <p className="mt-2 line-clamp-2 text-sm text-slate-600">{product.shortDescription}</p>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="flex items-center gap-1 font-bold text-warning">
            <Star size={16} fill="currentColor" /> {product.rating}
          </span>
          <span className="text-slate-400">({product.reviewCount})</span>
          <span className="ml-auto text-xs font-semibold text-slate-500">{product.warranty}</span>
        </div>
        <div className="flex items-end gap-2">
          <span className="font-heading text-2xl font-bold text-secondary">${product.price.toLocaleString()}</span>
          {product.oldPrice && <span className="pb-1 text-sm font-semibold text-slate-400 line-through">${product.oldPrice.toLocaleString()}</span>}
        </div>
        <div className="grid grid-cols-[1fr_auto_auto] gap-2">
          <button
            onClick={() => cart.add(product.id)}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-bold text-white transition hover:bg-blue-700"
          >
            <ShoppingCart size={17} /> Add
          </button>
          <button className="rounded-md border border-slate-200 p-2 text-slate-600 hover:border-primary hover:text-primary" aria-label="Compare">
            <Scale size={18} />
          </button>
          <button className="rounded-md border border-slate-200 p-2 text-slate-600 hover:border-danger hover:text-danger" aria-label="Wishlist">
            <Heart size={18} />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
