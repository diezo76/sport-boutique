"use client";

import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";

export default function CartDrawer() {
  const { items, isOpen, toggleCart, removeItem, updateQuantity, total } =
    useCartStore();

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/60 z-40"
        onClick={toggleCart}
        onKeyDown={(e) => e.key === "Escape" && toggleCart()}
        role="button"
        tabIndex={0}
        aria-label="Fermer le panier"
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Panier"
        className="fixed top-0 right-0 h-full w-full max-w-md bg-v-card border-l border-v-border z-50 flex flex-col shadow-xl"
      >
        <div className="flex items-center justify-between p-6 border-b border-v-border">
          <h2 className="font-sans text-lg font-bold">
            Your Cart
          </h2>
          <button
            type="button"
            onClick={toggleCart}
            className="text-v-muted hover:text-v-white transition-colors p-2"
            aria-label="Fermer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <p className="text-v-muted text-sm">
              Votre panier est vide.
            </p>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4 border-b border-v-border pb-4">
                  <div className="relative w-16 h-20 flex-shrink-0 bg-v-border rounded-lg overflow-hidden">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-xl">
                        📦
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-sans font-bold text-sm line-clamp-2">
                      {item.name}
                    </p>
                    <p className="text-v-white font-bold mt-1">
                      {(item.price * item.quantity).toFixed(2)} €
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        type="button"
                        onClick={() => {
                          const newQty = item.quantity - 1;
                          if (newQty <= 0) removeItem(item.id);
                          else updateQuantity(item.id, newQty);
                        }}
                        className="w-6 h-6 rounded border border-v-border text-xs hover:border-v-muted-light transition-colors"
                      >
                        -
                      </button>
                      <span className="text-sm font-medium w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 rounded border border-v-border text-xs hover:border-v-muted-light transition-colors"
                      >
                        +
                      </button>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="ml-auto text-v-muted hover:text-v-sale text-xs"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        {items.length > 0 && (
          <div className="p-6 border-t border-v-border">
            <div className="flex justify-between font-sans font-bold text-lg mb-4">
              <span>Subtotal</span>
              <span>{total().toFixed(2)} €</span>
            </div>
            <Link
              href="/panier"
              onClick={toggleCart}
              className="block w-full py-4 bg-v-white text-v-bg font-sans font-bold text-sm text-center rounded-full hover:bg-v-muted-light transition-colors"
            >
              Continue to Checkout
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}
