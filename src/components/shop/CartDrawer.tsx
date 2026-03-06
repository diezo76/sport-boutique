"use client";

import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";

export default function CartDrawer() {
  const { items, isOpen, toggleCart, removeItem, updateQuantity, total } = useCartStore();

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 z-40"
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
        className="fixed top-0 right-0 h-full w-full max-w-md bg-v-white border-l border-v-gray-100 z-50 flex flex-col shadow-2xl"
      >
        <div className="flex items-center justify-between p-6 border-b border-v-gray-100">
          <h2 className="font-display text-2xl uppercase tracking-wide">
            Your Cart
          </h2>
          <button
            type="button"
            onClick={toggleCart}
            className="text-v-gray-500 hover:text-v-black transition-colors p-2"
            aria-label="Fermer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <p className="text-v-gray-500 text-sm">Votre panier est vide.</p>
          ) : (
            <ul className="space-y-5">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4 pb-5 border-b border-v-gray-100">
                  <div className="relative w-16 h-20 flex-shrink-0 bg-v-gray-100 rounded-lg overflow-hidden">
                    {item.image ? (
                      <Image src={item.image} alt={item.name} fill className="object-cover" sizes="64px" />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-xl">📦</div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm line-clamp-2 mb-1">{item.name}</p>
                    <p className="text-v-black font-bold">{(item.price * item.quantity).toFixed(2)} €</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        type="button"
                        onClick={() => {
                          const newQty = item.quantity - 1;
                          if (newQty <= 0) removeItem(item.id);
                          else updateQuantity(item.id, newQty);
                        }}
                        className="w-7 h-7 rounded-full border border-v-gray-300 text-xs hover:border-v-black transition-colors flex items-center justify-center"
                      >
                        -
                      </button>
                      <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 rounded-full border border-v-gray-300 text-xs hover:border-v-black transition-colors flex items-center justify-center"
                      >
                        +
                      </button>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="ml-auto text-v-red text-xs hover:underline"
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
          <div className="p-6 border-t border-v-gray-100">
            <div className="flex justify-between font-bold text-lg mb-4">
              <span>Subtotal</span>
              <span>{total().toFixed(2)} €</span>
            </div>
            <Link
              href="/panier"
              onClick={toggleCart}
              className="block w-full py-4 bg-v-black text-v-white font-bold text-sm text-center rounded-full hover:bg-v-gray-900 transition-colors"
            >
              Continue to Checkout
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}
