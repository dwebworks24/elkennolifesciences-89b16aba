import rudhra from "@/assets/rudhra.png.asset.json";
import bestSoil from "@/assets/product-best-soil.jpg";
import kennoGrow from "@/assets/product-kenno-grow.jpg";
import calkenno from "@/assets/product-calkenno.jpg";
import protectBv from "@/assets/product-protect-bv.jpg";
import flowerPlus from "@/assets/product-flower-plus.jpg";
import powerK from "@/assets/product-power-k.jpg";
import quantumPower from "@/assets/product-quantum-power.jpg";
import nutriBoost from "@/assets/product-nutri-boost.jpg";

export type ProductCategory =
  | "Granular Fertilizers"
  | "Liquid Fertilizers"
  | "Soil Conditioners"
  | "Crop-Specific"
  | "Plant Protection"
  | "Growth Promoters"
  | "Flowering Boosters"
  | "Micronutrient Fertilizers"
  | "Potassium Fertilizers";

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
    id: "rudhra",
    name: "Rudhra",
    category: "Plant Protection",
    tag: "Bio-Pesticide",
    image: rudhra.url,
    short:
      "Natural plant protector that guards crops against pests and diseases while keeping soil and produce residue-free.",
    details:
      "Rudhra is a bio-based plant protector formulated with botanical extracts and beneficial microorganisms. It helps control common pests and fungal issues without harming beneficial insects or leaving harmful residues.",
    benefits: [
      "Natural pest and disease defense",
      "Safe for beneficial insects",
      "Residue-free produce",
    ],
  },
  {
    id: "best-soil",
    name: "Best Soil",
    category: "Liquid Fertilizers",
    tag: "Foliar Spray",
    image: bestSoil,
    short:
      "Seaweed-enriched organic liquid bio-fertilizer that improves soil health and supports vigorous plant growth.",
    details:
      "Best Soil is a foliar-ready liquid bio-fertilizer enriched with seaweed extract and natural plant nutrients. It enhances nutrient uptake, improves soil biology, and promotes healthier, more productive crops.",
    benefits: [
      "Boosts soil microbial activity",
      "Enhances plant growth naturally",
      "Improves crop yield potential",
    ],
  },
  {
    id: "kenno-grow",
    name: "Kenno Grow",
    category: "Growth Promoters",
    tag: "Plant Growth Promoter",
    image: kennoGrow,
    short:
      "Organic growth promoter designed to stimulate root development, vigorous vegetative growth, and higher yields.",
    details:
      "Kenno Grow is an organic plant growth promoter that supports strong root establishment and vigorous vegetative growth. Ideal for use during early and mid-growth stages across a wide range of crops.",
    benefits: [
      "Stimulates root development",
      "Encourages vigorous growth",
      "Supports higher yields",
    ],
  },
  {
    id: "calkenno",
    name: "Calkenno",
    category: "Liquid Fertilizers",
    tag: "Calcium Rich",
    image: calkenno,
    short:
      "Calcium-rich organic liquid fertilizer for stronger cell walls, better fruit quality, and reduced blossom-end rot.",
    details:
      "Calkenno delivers readily available calcium in an organic liquid form. It strengthens plant cell structure, improves fruit firmness and shelf life, and helps prevent calcium-related disorders in vegetables and fruits.",
    benefits: [
      "Strengthens plant cell walls",
      "Improves fruit quality and firmness",
      "Reduces blossom-end rot risk",
    ],
  },
  {
    id: "protect-bv",
    name: "Protect-BV",
    category: "Plant Protection",
    tag: "Bio-Pesticide",
    image: protectBv,
    short:
      "Eco-friendly bio-pesticide that protects crops from pests and diseases while being safe for plants and the environment.",
    details:
      "Protect-BV is a broad-spectrum organic bio-pesticide that targets common crop pests and pathogens. Its microbial and botanical composition makes it safe for repeated application and compatible with integrated pest management programs.",
    benefits: [
      "Controls pests and diseases naturally",
      "Safe for environment and applicators",
      "Compatible with IPM practices",
    ],
  },
  {
    id: "flower-plus",
    name: "Flower Plus",
    category: "Flowering Boosters",
    tag: "Flowering Booster",
    image: flowerPlus,
    short:
      "Organic flowering booster that encourages more blooms, better fruit set, and improved yield quality.",
    details:
      "Flower Plus is a natural flowering booster formulated to support reproductive growth in flowering and fruiting crops. It helps increase flower retention, improve fruit set, and enhance overall harvest quality.",
    benefits: [
      "Encourages abundant flowering",
      "Improves fruit set",
      "Enhances yield quality",
    ],
  },
  {
    id: "power-k",
    name: "Power-K",
    category: "Potassium Fertilizers",
    tag: "Potassium Rich",
    image: powerK,
    short:
      "Potassium-rich liquid fertilizer for improved flowering, fruiting, stress tolerance, and overall plant health.",
    details:
      "Power-K provides a concentrated organic potassium source that supports flowering, fruit development, and plant stress resilience. It is ideal for use during the reproductive and maturity stages of crop growth.",
    benefits: [
      "Enhances flowering and fruiting",
      "Improves stress tolerance",
      "Strengthens overall plant health",
    ],
  },
  {
    id: "quantum-power",
    name: "Quantum Power",
    category: "Micronutrient Fertilizers",
    tag: "Micronutrient Mix",
    image: quantumPower,
    short:
      "Complete micronutrient fertilizer that corrects nutrient deficiencies and promotes balanced, high-quality crop growth.",
    details:
      "Quantum Power delivers a balanced blend of essential micronutrients in an organic chelated form. It helps correct hidden deficiencies, improves photosynthesis, and supports uniform crop development and quality.",
    benefits: [
      "Corrects micronutrient deficiencies",
      "Supports balanced crop nutrition",
      "Improves yield and quality",
    ],
  },
  {
    id: "nutri-boost",
    name: "Nutri Boost",
    category: "Growth Promoters",
    tag: "Nutrient Booster",
    image: nutriBoost,
    short:
      "Organic nutrient booster that enhances absorption, stimulates growth, and increases natural yield potential.",
    details:
      "Nutri Boost is an organic nutrient booster that improves nutrient absorption and utilization within the plant. It supports vigorous growth, greener foliage, and better yield across cereals, vegetables, fruits, and cash crops.",
    benefits: [
      "Enhances nutrient absorption",
      "Stimulates healthy growth",
      "Increases yield naturally",
    ],
  },
];
