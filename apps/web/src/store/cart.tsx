import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { products } from "../data/catalog";

type CartLine = { productId: string; quantity: number };

type CartContextValue = {
  lines: CartLine[];
  count: number;
  subtotal: number;
  add: (productId: string) => void;
  remove: (productId: string) => void;
  update: (productId: string, quantity: number) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);

  const value = useMemo<CartContextValue>(() => {
    const subtotal = lines.reduce((sum, line) => {
      const product = products.find((item) => item.id === line.productId);
      return sum + (product?.price ?? 0) * line.quantity;
    }, 0);

    return {
      lines,
      count: lines.reduce((sum, line) => sum + line.quantity, 0),
      subtotal,
      add(productId) {
        setLines((current) => {
          const existing = current.find((line) => line.productId === productId);
          if (existing) {
            return current.map((line) =>
              line.productId === productId ? { ...line, quantity: line.quantity + 1 } : line
            );
          }
          return [...current, { productId, quantity: 1 }];
        });
      },
      remove(productId) {
        setLines((current) => current.filter((line) => line.productId !== productId));
      },
      update(productId, quantity) {
        setLines((current) =>
          current.map((line) => (line.productId === productId ? { ...line, quantity } : line))
        );
      }
    };
  }, [lines]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
}
