# Compte-rendu : Redesign complet style Velora

## Date : 6 mars 2026

## Résumé
Le site a été entièrement redesigné pour copier le template Velora (velora99.webflow.io).
Thème : streetwear e-commerce, fond noir, typographie clean, boutons blancs arrondis, cards sombres.

## Palette de couleurs (v-*)
- `--v-bg: #0d0d0d` (fond principal)
- `--v-card: #141414` (cards)
- `--v-card-hover: #1a1a1a` (cards hover)
- `--v-border: #1f1f1f` (bordures)
- `--v-white: #ffffff` (texte principal, boutons)
- `--v-muted: #888888` (texte secondaire)
- `--v-muted-light: #b0b0b0` (texte tertiaire)
- `--v-sale: #e74c3c` (badge promo)
- `--v-new: #2ecc71` (badge nouveau)
- `--v-drop: #9b59b6` (badge drop)

## Polices
- **Syne** (font-sans, display headings) — extrabold pour les titres
- **Inter** (font-body) — body text

## Structure de la homepage (page.tsx)
1. `TopBanner` — barre blanche "Livraison offerte dès 100€"
2. `Header` — logo FollowMee + nav + cart (sticky, blur au scroll)
3. `HeroSlider` — 4 slides avec animation + indicateurs numérotés
4. `NewDrops` — 3 produits avec badges (Sale/Drop/New)
5. `BannerSection` — 2 cartes CTA côte à côte
6. `StorySection` — section "Porte Le Mouvement, Brise Les Codes"
7. `FeaturedDrops` — grille 6 produits
8. `ProductSpotlight` — mise en avant d'un produit (Nightfall Hoodie)
9. `JoinCTA` — bannière "Rejoins Le Mouvement"
10. `WhyShopWithUs` — 4 features (livraison, sécurité, retour, support)
11. `Newsletter` — formulaire email avec image
12. `Footer` — 4 colonnes (logo, menu, pages, social)

## Fichiers modifiés/créés
### Créés
- `src/components/home/TopBanner.tsx`
- `src/components/home/HeroSlider.tsx`
- `src/components/home/NewDrops.tsx`
- `src/components/home/BannerSection.tsx`
- `src/components/home/StorySection.tsx`
- `src/components/home/FeaturedDrops.tsx`
- `src/components/home/ProductSpotlight.tsx`
- `src/components/home/JoinCTA.tsx`
- `src/components/home/WhyShopWithUs.tsx`
- `src/components/home/Newsletter.tsx`

### Modifiés
- `src/app/globals.css` — nouveau thème v-* (remplace velora-*)
- `src/app/layout.tsx` — polices Syne + Inter
- `src/app/page.tsx` — assemblage complet
- `src/app/boutique/page.tsx` — nouveau thème
- `src/app/produit/[slug]/page.tsx` — nouveau thème + header/footer
- `src/components/home/Header.tsx` — redesign complet
- `src/components/home/Footer.tsx` — redesign complet
- `src/components/shop/CartDrawer.tsx` — thème v-*
- `src/components/shop/ProductCard.tsx` — thème v-*
- `src/components/shop/ProductGrid.tsx` — thème v-*
- `src/components/produit/ProductPageClient.tsx` — thème v-*
- `src/components/produit/ProductGallery.tsx` — thème v-*
- `src/components/produit/AddToCartButton.tsx` — thème v-*
- `src/components/produit/ProductVariants.tsx` — thème v-*

### Supprimés
- `src/components/home/Hero.tsx` (remplacé par HeroSlider)
- `src/components/home/Categories.tsx` (plus utilisé)
- `src/components/home/FeaturedProducts.tsx` (remplacé par FeaturedDrops)
- `src/components/home/PromoBanner.tsx` (remplacé par BannerSection + JoinCTA)

## Convention Tailwind
Toutes les classes utilisent le préfixe `v-` : `bg-v-bg`, `text-v-white`, `border-v-border`, etc.
L'ancien préfixe `velora-` et les couleurs `neon-*` / `dark-*` sont encore définis dans `globals.css`
dans `@theme inline` mais ne sont plus utilisés dans les composants principaux.

## Design pattern
- `max-w-[1400px]` pour le container principal
- `rounded-2xl` / `rounded-3xl` pour les cartes
- `rounded-full` pour les boutons
- Police Syne extrabold pour les headings
- Framer Motion pour toutes les animations
- Images placeholder (emojis) quand pas de vraies images

## À faire après
- Ajouter les vraies images produit dans `/public/images/products/`
- Connecter les produits WooCommerce aux sections NewDrops et FeaturedDrops
- Supprimer les anciennes variables CSS inutilisées (neon-*, dark-*, velora-*)
- Ajouter les animations de transition de page
- Implémenter la fonctionnalité de recherche dans le Header
