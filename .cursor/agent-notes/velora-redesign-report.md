# Compte-rendu : Redesign exact style Velora (v2)

## Date : 6 mars 2026

## Résumé
Redesign complet du site pour reproduire exactement le template Velora (velora99.webflow.io).
Design éditorial streetwear : fond blanc principal, sections dark contrastées, police ultra-condensée.

## Polices
- **Bebas Neue** (`font-display`) — titres condensés all-caps (hero, sections, display)
- **Playfair Display** (`font-accent`) — accents italic (noms produit, taglines)
- **Inter** (`font-body`) — texte body, UI

## Palette de couleurs (v-*)
- `--v-black: #0d0d0d` — texte principal, fond dark sections
- `--v-dark: #1a1a1a`
- `--v-gray-900: #222222`
- `--v-gray-700: #555555` — texte secondaire
- `--v-gray-500: #888888` — texte muted
- `--v-gray-300: #c0c0c0` — bordures
- `--v-gray-100: #f2f2f2` — fonds légers
- `--v-white: #ffffff` — fond principal
- `--v-red: #c0392b` — badges Sale
- `--v-green: #27ae60` — badges New
- `--v-purple: #8e44ad` — badges Drop

## Design patterns
- Fond **BLANC** pour : NewDrops, StorySection, FeaturedDrops, WhyShopWithUs, Newsletter, page produit, boutique
- Fond **NOIR** pour : TopBanner, Hero, ProductSpotlight, Footer
- Fond **Image** pour : BannerSection, JoinCTA (avec gradient overlay)
- Boutons avec **icône flèche dans cercle** + texte (style Velora exactement)
- Cards avec `rounded-2xl` / `rounded-3xl`
- Boutons `rounded-full`
- Product pills `rounded-full` noir quand sélectionné, gris sinon
- Layout max-width `1400px` avec padding `px-6 sm:px-10`

## Structure homepage (page.tsx)
1. `TopBanner` — barre noire "Livraison offerte dès 100€"
2. `Header` — fixed, transparent → blanc au scroll, logo Bebas, nav, cart+user icons
3. `HeroSlider` — plein écran, images FollowMee, text overlay gauche, indicateurs 01-04 avec progress bar
4. `NewDrops` — fond blanc, 3 produits avec vrais photos et badges colorés
5. `BannerSection` — 2 cards avec images en fond + gradient + text overlay
6. `StorySection` — fond blanc, 2 colonnes : titre Bebas énorme gauche + texte droite
7. `FeaturedDrops` — fond blanc, 6 cards avec image full et text overlay en bas
8. `ProductSpotlight` — fond noir, texte Bebas gauche + image+thumbnails droite
9. `JoinCTA` — image avec overlay rouge, texte centré
10. `WhyShopWithUs` — fond blanc, 2 colonnes : titre gauche + 4 features droite
11. `Newsletter` — fond blanc, image gauche + form droite
12. `Footer` — fond noir, logo Bebas, tagline Playfair italic, colonnes links

## Images produit
Situées dans `public/images/` :
- `1. T-shirt - Bleu Blanc Rouge/` (12 images)
- `2. T-shirt - Noir Jaune/` (7 images)
- `3. T-shirt - Vert Orange/` (8 images)
- `4. T-shirt - Vert Jaune/` (11 images)
- `5. T-shirt - Noir Orange/` (5 images)
- `6. T-shirt - Gris Orange/` (3 images)

Les chemins ont des espaces → utiliser `encodeURI()` dans les composants.

## Page produit (fond blanc)
- Header + TopBanner
- Galerie avec zoom + thumbnails grille 4 colonnes
- Nom produit en Playfair italic
- 5 étoiles jaunes
- Prix bold
- Variantes en pills rounded-full (noir si sélectionné)
- Sélecteur quantité
- Bouton "Add to Cart" rounded-full noir avec icône cart
- Icônes social (G, f, 𝕏, ig)
- Description en bas
- Produits similaires

## Fichiers modifiés
- `src/app/globals.css` — nouveau thème blanc/noir
- `src/app/layout.tsx` — polices Bebas + Playfair + Inter
- `src/app/page.tsx` — assemblage 12 sections
- `src/app/boutique/page.tsx` — fond blanc
- `src/app/produit/[slug]/page.tsx` — fond blanc + header/footer
- Tous les composants dans `src/components/home/`
- Tous les composants dans `src/components/shop/`
- Tous les composants dans `src/components/produit/`

## À faire ensuite
- Connecter les vrais produits WooCommerce aux sections homepage (NewDrops, FeaturedDrops)
- Optimiser les images (elles font 3-8MB chacune, trop lourd)
- Ajouter les pages À Propos, Collection, Catégorie
- Implémenter recherche dans le Header
- Ajouter login/signup modals
- Page panier/checkout
