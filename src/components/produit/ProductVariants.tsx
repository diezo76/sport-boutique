"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export interface VariationAttribute {
  name: string;
  label: string;
  value: string;
}

export interface ProductVariation {
  id: string;
  databaseId: number;
  name: string;
  price: string;
  regularPrice: string;
  salePrice?: string;
  stockStatus: string;
  stockQuantity?: number;
  image?: { sourceUrl: string; altText: string } | null;
  attributes: {
    nodes: VariationAttribute[];
  };
}

interface ProductVariantsProps {
  variations: ProductVariation[];
  onSelect: (variation: ProductVariation | null) => void;
  selectedVariation: ProductVariation | null;
}

export default function ProductVariants({
  variations,
  onSelect,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  selectedVariation,
}: ProductVariantsProps) {
  const [selections, setSelections] = useState<Record<string, string>>({});

  const attributeNames = Array.from(
    new Set(variations.flatMap((v) => v.attributes.nodes.map((a) => a.name)))
  );

  const getValuesForAttribute = (attrName: string) => {
    const values = new Set<string>();
    variations.forEach((v) => {
      const attr = v.attributes.nodes.find((a) => a.name === attrName);
      if (attr) values.add(attr.value);
    });
    return Array.from(values);
  };

  const handleSelect = (attrName: string, value: string) => {
    const newSelections = { ...selections, [attrName]: value };
    setSelections(newSelections);
    const matchingVariation = variations.find((v) =>
      v.attributes.nodes.every((a) => newSelections[a.name] === a.value)
    );
    onSelect(matchingVariation ?? null);
  };

  const getLabel = (attrName: string) => {
    const attr = variations[0]?.attributes.nodes.find((a) => a.name === attrName);
    return attr?.label || attrName.replace("pa_", "").replace(/-/g, " ");
  };

  if (variations.length === 0) return null;

  return (
    <div className="space-y-5">
      {attributeNames.map((attrName) => {
        const values = getValuesForAttribute(attrName);
        const label = getLabel(attrName);

        return (
          <div key={attrName}>
            <p className="text-sm font-accent italic mb-3">{label}</p>
            <div className="flex flex-wrap gap-2">
              {values.map((value) => {
                const isSelected = selections[attrName] === value;
                const isColor = attrName.toLowerCase().includes("couleur") || attrName.toLowerCase().includes("color");

                return (
                  <motion.button
                    key={value}
                    onClick={() => handleSelect(attrName, value)}
                    className={`
                      px-5 py-2.5 rounded-full text-sm font-medium transition-all
                      ${isSelected
                        ? "bg-v-black text-v-white"
                        : "bg-v-gray-100 text-v-black hover:bg-v-gray-300"
                      }
                      ${isColor ? "w-10 h-10 p-0 rounded-full" : ""}
                    `}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={
                      isColor && value.match(/^#[0-9a-fA-F]{3,6}$/)
                        ? { backgroundColor: isSelected ? value : value, opacity: isSelected ? 1 : 0.6 }
                        : undefined
                    }
                  >
                    {isColor && value.match(/^#[0-9a-fA-F]{3,6}$/) ? "" : value}
                  </motion.button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
