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
      if (isVariableProduct && !selectedVariation) {
        toast.error("Veuillez sélectionner une option");
      } else if (isOutOfStock) {
        toast.error("Produit épuisé");
      }
      return;
    }

    setIsAdding(true);

    const itemId = isVariableProduct && selectedVariation ? selectedVariation.id : productId;
    const itemName = isVariableProduct && selectedVariation
      ? `${productName} - ${selectedVariation.attributes.nodes.map((a) => a.value).join(" / ")}`
      : productName;
    const itemPrice = isVariableProduct && selectedVariation
      ? parsePrice(selectedVariation.price)
      : price;
    const itemImage = isVariableProduct && selectedVariation?.image?.sourceUrl
      ? selectedVariation.image.sourceUrl
      : image;

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
        w-full py-4 px-6 font-sans font-bold text-sm rounded-full transition-all duration-300
        ${canAdd
          ? "bg-v-white text-v-bg hover:bg-v-muted-light"
          : "bg-v-border text-v-muted cursor-not-allowed"
        }
      `}
      whileHover={canAdd ? { scale: 1.02 } : {}}
      whileTap={canAdd ? { scale: 0.98 } : {}}
    >
      {isAdding ? "Ajout..." : isOutOfStock ? "Épuisé" : "+ Ajouter au panier"}
    </motion.button>
  );
}
