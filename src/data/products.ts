import granular from "@/assets/product-granular.jpg";
import liquid from "@/assets/product-liquid.jpg";
import vermicompost from "@/assets/product-vermicompost.jpg";
import seaweed from "@/assets/product-seaweed.jpg";
import crop from "@/assets/product-crop.jpg";
import bionpk from "@/assets/product-bionpk.jpg";

export type ProductCategory =
  | "Granular Fertilizers"
  | "Liquid Fertilizers"
  | "Soil Conditioners"
  | "Crop-Specific";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  tag: string;
  image: string;
  short: string;
  details: string;
  benefits: string[];
}

export const products: Product[] = [
  {
    id: "granular-npk",
    name: "Organic Granular NPK Fertilizer",
    category: "Granular Fertilizers",
    tag: "Granular",
    image: granular,
    short:
      "Slow-release, balanced NPK granules to feed soil microbes and crops throughout the season.",
    details:
      "A complete granular NPK blend derived from plant and mineral sources. Releases nutrients gradually to support steady crop growth while improving soil structure.",
    benefits: [
      "Balanced N-P-K nutrition",
      "Improves soil aggregation",
      "Slow-release for season-long feeding",
    ],
  },
  {
    id: "liquid-bio",
    name: "Liquid Bio-Fertilizer (Foliar Spray)",
    category: "Liquid Fertilizers",
    tag: "Liquid",
    image: liquid,
    short:
      "Ready-to-spray foliar formulation with beneficial microbes and plant-based nutrients.",
    details:
      "Designed for rapid leaf absorption. Boosts chlorophyll, flowering and overall vigor when applied as a foliar spray during key growth stages.",
    benefits: [
      "Fast nutrient uptake via leaves",
      "Boosts flowering & fruiting",
      "Compatible with most crops",
    ],
  },
  {
    id: "vermicompost",
    name: "Vermicompost Soil Conditioner",
    category: "Soil Conditioners",
    tag: "Granular",
    image: vermicompost,
    short:
      "Earthworm-processed organic matter that restores soil biology and water-holding capacity.",
    details:
      "Premium-grade vermicompost rich in humus, beneficial microbes and slow-release nutrients. Ideal for soil rebuilding and organic conversion.",
    benefits: [
      "Restores soil microbial life",
      "Improves moisture retention",
      "Reduces dependence on chemicals",
    ],
  },
  {
    id: "seaweed",
    name: "Seaweed Liquid Growth Promoter",
    category: "Liquid Fertilizers",
    tag: "Liquid",
    image: seaweed,
    short:
      "Cold-extracted seaweed concentrate packed with natural plant growth regulators.",
    details:
      "A natural biostimulant rich in cytokinins, auxins and trace minerals from Ascophyllum nodosum. Improves stress tolerance and yield quality.",
    benefits: [
      "Natural growth hormones",
      "Improves stress tolerance",
      "Enhances crop quality",
    ],
  },
  {
    id: "crop-specific",
    name: "Crop-Specific Organic Blend",
    category: "Crop-Specific",
    tag: "Granular",
    image: crop,
    short:
      "Tailored organic blends for paddy, cotton, sugarcane, vegetables and fruit crops.",
    details:
      "Custom-formulated nutrient profiles for the specific demands of each crop. Available in 5kg, 25kg and 50kg packaging for farms of every size.",
    benefits: [
      "Crop-tuned NPK ratios",
      "Higher yield potential",
      "Available in multiple pack sizes",
    ],
  },
  {
    id: "bio-npk-consortia",
    name: "Bio NPK Consortia",
    category: "Liquid Fertilizers",
    tag: "Microbial",
    image: bionpk,
    short:
      "Living consortium of nitrogen-fixing, phosphate- and potash-mobilising microbes.",
    details:
      "A scientifically developed microbial consortium that fixes atmospheric nitrogen and unlocks soil-bound phosphorus and potassium for the plant.",
    benefits: [
      "Reduces chemical fertilizer need",
      "Improves nutrient availability",
      "Restores soil microbiome",
    ],
  },
];
