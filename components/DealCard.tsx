import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

// --- Define the shape of the different offer types ---
// This is a discriminated union. The 'type' property tells us which kind of offer it is.

// For offers with a new price and an original price
type PriceOffer = {
  type: "price";
  newPrice: number;
  originalPrice: number;
};

// For offers with a percentage discount
type DiscountOffer = {
  type: "discount";
  percentage: number;
};

// The component will accept one of these two offer types
export type Offer = PriceOffer | DiscountOffer;

// --- Component Props Interface ---
interface DealCardProps {
  imageUrl: ImageSourcePropType;
  category: string;
  title: string;
  offer: Offer; // The offer prop must be one of the types defined above
  isTrending?: boolean; // Optional prop for the "Trending Now" banner
  onPress: () => void;
}

const DealCard: React.FC<DealCardProps> = ({
  imageUrl,
  category,
  title,
  offer,
  isTrending = false,
  onPress,
}) => {
  // --- Helper function to render the correct offer type ---
  const renderOffer = () => {
    if (offer.type === "price") {
      return (
        <View style={styles.offerContainer}>
          <Text style={styles.newPrice}>${offer.newPrice}</Text>
          <Text style={styles.originalPrice}>${offer.originalPrice}</Text>
        </View>
      );
    }

    if (offer.type === "discount") {
      return (
        <View style={styles.offerContainer}>
          <Ionicons name="flash" size={20} color="#4A90E2" />
          <Text style={styles.discountText}>{offer.percentage}% OFF</Text>
        </View>
      );
    }

    return null; // Should not happen with correct props
  };

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {/* --- Image Section --- */}
      <View style={styles.imageWrapper}>
        <Image source={imageUrl} style={styles.image} />
        {isTrending && (
          <View style={styles.trendingBanner}>
            <Ionicons name="flame" size={16} color="#FFFFFF" />
            <Text style={styles.trendingText}>Trending Now</Text>
          </View>
        )}
      </View>

      {/* --- Content Section --- */}
      <View style={styles.contentContainer}>
        <Text style={styles.categoryText}>{category}</Text>
        <Text style={styles.titleText} numberOfLines={2}>
          {title}
        </Text>

        {/* --- Bottom Row: Offer and Arrow Button --- */}
        <View style={styles.bottomRow}>
          {renderOffer()}
          <View style={styles.arrowButton}>
            <Ionicons name="chevron-forward" size={18} color="#333" />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    overflow: "hidden",
    width: 250, // Or adjust as needed
    margin: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  imageWrapper: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: 150,
    backgroundColor: "#F0F0F0",
  },
  trendingBanner: {
    position: "absolute",
    top: 12,
    left: 12,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4A90E2", // Blue color for the banner
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  trendingText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 12,
    marginLeft: 6,
  },
  contentContainer: {
    padding: 16,
  },
  categoryText: {
    color: "#6C6C6C",
    fontSize: 12,
    marginBottom: 4,
  },
  titleText: {
    color: "#1C1C1E",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    minHeight: 44, // Ensures consistent height for 1 or 2 lines
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  offerContainer: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  newPrice: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1C1C1E",
    marginRight: 8,
  },
  originalPrice: {
    fontSize: 16,
    color: "#E53935", // Red color for strikethrough
    textDecorationLine: "line-through",
  },
  discountText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4A90E2", // Blue color for discount text
    marginLeft: 6,
  },
  arrowButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#F0F0F0",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DealCard;