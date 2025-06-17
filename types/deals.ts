import { Ionicons } from "@expo/vector-icons";

export type Banner = {
  text: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
};

export type PriceOffer = { type: "price"; newPrice: number; originalPrice: number };
export type DiscountOffer = { type: "discount"; percentage: number };
export type ActionOffer = { type: "action"; text: string };

export type Offer = PriceOffer | DiscountOffer | ActionOffer;

export interface DealItem {
  id: string;
  title: string;
  category: string;
  imageUrl: any; // Using any since we're using require()
  offer: Offer;
  banner?: Banner;
}
