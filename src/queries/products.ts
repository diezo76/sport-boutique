import { gql } from "@apollo/client";

// Récupérer tous les produits
export const GET_PRODUCTS = gql`
  query GetProducts($first: Int, $after: String, $category: String) {
    products(first: $first, after: $after, where: { category: $category }) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        databaseId
        name
        slug
        ... on SimpleProduct {
          price
          regularPrice
          salePrice
          stockStatus
          stockQuantity
          image {
            sourceUrl
            altText
          }
          galleryImages {
            nodes {
              sourceUrl
              altText
            }
          }
          productCategories {
            nodes {
              name
              slug
            }
          }
        }
        ... on VariableProduct {
          price
          regularPrice
          image {
            sourceUrl
            altText
          }
          variations {
            nodes {
              id
              name
              stockStatus
              stockQuantity
              attributes {
                nodes {
                  name
                  value
                }
              }
            }
          }
          productCategories {
            nodes {
              name
              slug
            }
          }
        }
      }
    }
  }
`;

// Récupérer un produit par slug (complet pour page produit)
export const GET_PRODUCT_BY_SLUG = gql`
  query GetProductBySlug($slug: ID!) {
    product(id: $slug, idType: SLUG) {
      id
      databaseId
      slug
      name
      description
      shortDescription
      ... on SimpleProduct {
        price
        regularPrice
        salePrice
        stockStatus
        stockQuantity
        sku
        weight
        image {
          sourceUrl
          altText
        }
        galleryImages {
          nodes {
            sourceUrl
            altText
          }
        }
        productCategories {
          nodes {
            id
            slug
            name
          }
        }
      }
      ... on VariableProduct {
        price
        regularPrice
        image {
          sourceUrl
          altText
        }
        galleryImages {
          nodes {
            sourceUrl
            altText
          }
        }
        variations(first: 50) {
          nodes {
            id
            databaseId
            name
            price
            regularPrice
            salePrice
            stockStatus
            stockQuantity
            image {
              sourceUrl
              altText
            }
            attributes {
              nodes {
                name
                label
                value
              }
            }
          }
        }
        productCategories {
          nodes {
            id
            slug
            name
          }
        }
      }
    }
  }
`;

// Produits featured / bestsellers pour la page d'accueil
export const GET_FEATURED_PRODUCTS = gql`
  query GetFeaturedProducts($first: Int) {
    products(first: $first, where: { featured: true }) {
      nodes {
        id
        databaseId
        slug
        name
        ... on SimpleProduct {
          price
          regularPrice
          salePrice
          stockStatus
          image {
            sourceUrl
            altText
          }
        }
        ... on VariableProduct {
          price
          regularPrice
          image {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`;

// Produits similaires (même catégorie, exclut le produit actuel)
export const GET_SIMILAR_PRODUCTS = gql`
  query GetSimilarProducts($categoryIn: [String], $exclude: [Int], $first: Int) {
    products(
      first: $first
      where: { categoryIn: $categoryIn, exclude: $exclude }
    ) {
      nodes {
        id
        databaseId
        slug
        name
        ... on SimpleProduct {
          price
          regularPrice
          salePrice
          stockStatus
          image {
            sourceUrl
            altText
          }
        }
        ... on VariableProduct {
          price
          regularPrice
          image {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`;
