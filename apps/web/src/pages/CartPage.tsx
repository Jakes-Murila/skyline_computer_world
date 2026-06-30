import { products } from "../data/catalog";
import { useCart } from "../store/cart";

export function CartPage() {
  const cart = useCart();
  const tax = cart.subtotal * 0.0825;
  const shipping = cart.subtotal > 1000 || cart.subtotal === 0 ? 0 : 39;
  const total = cart.subtotal + tax + shipping;

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="font-heading text-4xl font-bold text-secondary">Shopping Cart</h1>
      <div className="mt-7 grid gap-6 lg:grid-cols-[1fr_360px]">
        <section className="space-y-3">
          {cart.lines.length === 0 && <div className="rounded-lg bg-surface p-8 text-slate-600">Your cart is ready for products, services, warranties, and bundles.</div>}
          {cart.lines.map((line) => {
            const product = products.find((item) => item.id === line.productId)!;
            return (
              <article key={line.productId} className="grid gap-4 rounded-lg border border-slate-200 p-4 sm:grid-cols-[120px_1fr_auto]">
                <img src={product.images[0]} alt={product.name} className="h-28 w-full rounded-md object-cover" />
                <div>
                  <h2 className="font-heading text-lg font-bold text-secondary">{product.name}</h2>
                  <p className="mt-1 text-sm text-slate-600">{product.warranty} / {product.deliveryEstimate}</p>
                  <button onClick={() => cart.remove(product.id)} className="mt-3 text-sm font-bold text-danger">Remove</button>
                </div>
                <div className="flex items-center gap-3 sm:flex-col sm:items-end">
                  <input type="number" min={1} max={99} value={line.quantity} onChange={(event) => cart.update(product.id, Number(event.target.value))} className="w-20 rounded-md border border-slate-200 px-3 py-2" />
                  <span className="font-heading text-xl font-bold">${(product.price * line.quantity).toLocaleString()}</span>
                </div>
              </article>
            );
          })}
        </section>
        <aside className="h-fit rounded-lg border border-slate-200 bg-surface p-5">
          <h2 className="font-heading text-xl font-bold text-secondary">Order Summary</h2>
          <div className="mt-5 space-y-3 text-sm">
            <Row label="Subtotal" value={cart.subtotal} />
            <Row label="Shipping" value={shipping} />
            <Row label="Tax" value={tax} />
          </div>
          <input className="mt-5 w-full rounded-md border border-slate-200 px-3 py-2" placeholder="Coupon code" />
          <button className="mt-4 w-full rounded-md bg-primary px-4 py-3 font-bold text-white">Checkout</button>
          <div className="mt-5 border-t border-slate-200 pt-4 text-right font-heading text-2xl font-bold text-secondary">
            ${total.toLocaleString(undefined, { maximumFractionDigits: 2 })}
          </div>
        </aside>
      </div>
    </main>
  );
}

function Row({ label, value }: { label: string; value: number }) {
  return <div className="flex justify-between"><span className="text-slate-600">{label}</span><span className="font-bold">${value.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span></div>;
}
