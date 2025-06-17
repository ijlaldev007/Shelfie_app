import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Offer, Banner } from '../types/deals';

interface DealCardProps {
  imageUrl: ImageSourcePropType;
  category: string;
  title: string;
  offer: Offer;
  banner?: Banner;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const DealCard: React.FC<DealCardProps> = ({
  imageUrl,
  category,
  title,
  offer,
  banner,
  onPress,
  style,
}) => {
  const renderOffer = () => {
    switch (offer.type) {
      case "price":
        return (
          <View style={styles.offerContainer}>
            <Text style={styles.newPrice}>${offer.newPrice}</Text>
            <Text style={styles.originalPrice}>${offer.originalPrice}</Text>
          </View>
        );
      case "discount":
        return (
          <View style={styles.offerContainer}>
            <Ionicons name="flash" size={20} color="#4A90E2" />
            <Text style={styles.discountText}>{offer.percentage}% OFF</Text>
          </View>
        );
      case "action":
        return (
          <View style={styles.offerContainer}>
            <Text style={styles.actionText}>{offer.text}</Text>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <TouchableOpacity
      style={[styles.cardContainer, style]} // Apply dynamic styles here
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.imageWrapper}>
        <Image source={imageUrl} style={styles.image} />
        {banner && (
          <View style={[styles.banner, { backgroundColor: banner.color }]}>
            <Ionicons name={banner.icon} size={16} color="#FFFFFF" />
            <Text style={styles.bannerText}>{banner.text}</Text>
          </View>
        )}
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.categoryText}>{category}</Text>
        <Text style={styles.titleText} numberOfLines={2}>
          {title}
        </Text>
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
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 12, // Space between rows
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderWidth: 1, // --- ADDED ---
    borderColor: "#F1F0F3", // --- ADDED ---
  },
  imageWrapper: {
    position: "relative",
    padding: 8, // --- ADDED --- (for top, left, right padding)
    paddingBottom: 0, // --- ADDED --- (image is flush with content below)
    
  },
  image: {
    width: "100%",
    height: 100, // Adjusted height for grid layout
    backgroundColor: "#F0F0F0",
    borderRadius: 4, // Match card border radius
  },
  banner: {
    position: "absolute",
    top: 25,
    left: 0,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 8 ,
  },
  bannerText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 12,
    marginLeft: 6,
  },
  contentContainer: { padding: 12 },
  categoryText: {
    color: "#6C6C6C",
    fontSize: 11,
    marginBottom: 4,
  },
  titleText: {
    color: "#1C1C1E",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 12,
    minHeight: 34, // Ensures consistent height for 1 or 2 lines
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  offerContainer: {
    flexDirection: "row",
    alignItems: "center", // Use center for better alignment
    flex: 1, // Allow offer to take available space
  },
  newPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1C1C1E",
    marginRight: 8,
  },
  originalPrice: {
    fontSize: 14,
    color: "#E53935",
    textDecorationLine: "line-through",
  },
  discountText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4A90E2",
    marginLeft: 6,
  },
  actionText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4A90E2",
  },
  arrowButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#F0F0F0",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DealCard;
