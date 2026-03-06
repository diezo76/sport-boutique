"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryImage {
  sourceUrl: string;
  altText: string;
}

interface ProductGalleryProps {
  images: GalleryImage[];
  productName: string;
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });

  const displayImages = images.length > 0 ? images : [{ sourceUrl: "", altText: productName }];
  const currentImage = displayImages[selectedIndex];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed || !currentImage.sourceUrl) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPosition({ x, y });
  };

  return (
    <div className="space-y-4">
      <motion.div
        className="relative aspect-square overflow-hidden rounded-2xl bg-v-card"
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
        onMouseMove={handleMouseMove}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {currentImage.sourceUrl ? (
          <div
            className={`relative w-full h-full transition-transform duration-300 ${
              isZoomed ? "scale-150" : "scale-100"
            }`}
            style={{ transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%` }}
          >
            <Image
              src={currentImage.sourceUrl}
              alt={currentImage.altText || productName}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-v-muted">
            <span className="text-6xl">📦</span>
          </div>
        )}
        <AnimatePresence>
          {isZoomed && currentImage.sourceUrl && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-3 right-3 bg-v-bg/80 text-v-muted text-xs px-3 py-1 rounded-full"
            >
              Zoom actif
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {displayImages.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2">
          {displayImages.map((img, i) => (
            <motion.button
              key={i}
              onClick={() => setSelectedIndex(i)}
              className={`relative flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                selectedIndex === i
                  ? "border-v-white"
                  : "border-v-border hover:border-v-muted"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {img.sourceUrl ? (
                <Image
                  src={img.sourceUrl}
                  alt={img.altText || `${productName} ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-xl">
                  📦
                </div>
              )}
            </motion.button>
          ))}
        </div>
      )}
    </div>
  );
}
