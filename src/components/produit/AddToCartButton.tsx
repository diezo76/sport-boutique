"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useCartStore } from "@/store/cartStore";
import toast from "react-hot-toast";

interface AddToCartButtonProps {
  productId: string;
  productName: string;
  price: number;
  image: string;
  quantity?: number;
  size?: string;
  color?: string;
  stockStatus: string;
  isVariableProduct?: boolean;
  selectedVariation?: {
    id: string;
    name: string;
    price: string;
    image?: { sourceUrl: string } | null;
    attributes: { nodes: { name: string; value: string }[] };
  } | null;
}

function parsePrice(priceStr: string): number {
  const cleaned = priceStr.replace(/[^\d,.]/g, "").replace(",", ".");
  return parseFloat(cleaned) || 0;
}

export default function AddToCartButton({
  productId,
  productName,
  price,
  image,
  quantity = 1,
  size,
  color,
  stockStatus,
  isVariableProduct,
  selectedVariation,
}: AddToCartButtonProps) {
  const addItem = useCartStore((s) => s.addItem);
  const toggleCart = useCartStore((s) => s.toggleCart);
  const [isAdding, setIsAdding] = useState(false);

  const isOutOfStock = stockStatus === "OUT_OF_STOCK";
  const canAdd = !isOutOfStock && (!isVariableProduct || (isVariableProduct && selectedVariation));

  const handleAddToCart = () => {
    if (!canAdd) {
      if (isVariableProduct && !selectedVariation) toast.error("Veuillez sélectionner une option");
      else if (isOutOfStock) toast.error("Produit épuisé");
      return;
    }

    setIsAdding(true);

    const itemId = isVariableProduct && selectedVariation ? selectedVariation.id : productId;
    const itemName = isVariableProduct && selectedVariation
      ? `${productName} - ${selectedVariation.attributes.nodes.map((a) => a.value).join(" / ")}`
      : productName;
    const itemPrice = isVariableProduct && selectedVariation ? parsePrice(selectedVariation.price) : price;
    const itemImage = isVariableProduct && selectedVariation?.image?.sourceUrl ? selectedVariation.image.sourceUrl : image;

    const sizeAttr = selectedVariation?.attributes.nodes.find(
      (a) => a.name.toLowerCase().includes("taille") || a.name.toLowerCase().includes("size")
    );
    const colorAttr = selectedVariation?.attributes.nodes.find(
      (a) => a.name.toLowerCase().includes("couleur") || a.name.toLowerCase().includes("color")
    );

    addItem({
      id: itemId,
      name: itemName,
      price: itemPrice,
      quantity,
      image: itemImage,
      size: sizeAttr?.value ?? size,
      color: colorAttr?.value ?? color,
    });

    toast.success("Ajouté au panier");
    toggleCart();
    setIsAdding(false);
  };

  return (
    <motion.button
      onClick={handleAddToCart}
      disabled={!canAdd || isAdding}
      className={`
        inline-flex items-center justify-center gap-3 py-4 px-8 font-bold text-sm rounded-full transition-all duration-300
        ${canAdd
          ? "bg-v-black text-v-white hover:bg-v-gray-900"
          : "bg-v-gray-100 text-v-gray-500 cursor-not-allowed"
        }
      `}
      whileHover={canAdd ? { scale: 1.02 } : {}}
      whileTap={canAdd ? { scale: 0.98 } : {}}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
      {isAdding ? "Ajout..." : isOutOfStock ? "Épuisé" : "Add to Cart"}
    </motion.button>
  );
}
