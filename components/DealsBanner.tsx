import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { typography } from "../constants/typography";

interface DealsBannerProps {
  onPress: () => void;
}

const DealsBanner: React.FC<DealsBannerProps> = ({ onPress }) => {
  return (
    <View style={styles.wrapper}>
      <ImageBackground
        source={require("../assets/deals/banner.png")}
        style={styles.bannerContainer}
        imageStyle={styles.imageStyle}
      >
        <View style={styles.content}>
          {/* Text Section */}
          <View style={styles.textContainer}>
            <View style={styles.discountBadge}>
              <Text style={styles.discountText}>50% Off</Text>
            </View>
            <Text style={styles.mainText}>BLACK</Text>
            <Text style={styles.mainText}>FRIDAY</Text>
            <Text style={styles.collectionText}>COLLECTION</Text>
          </View>

          {/* Arrow Button Section */}
          <TouchableOpacity
            style={styles.arrowButton}
            onPress={onPress}
            activeOpacity={0.7}
          >
            <Ionicons name="arrow-forward" size={24} color="#1C1C1E" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 0, // Matches the screen's horizontal padding
    marginTop: 16, // Space above the banner
  },
  bannerContainer: {
    width: "100%",
    height: 180,
    justifyContent: "center",
  },
  imageStyle: {
    borderRadius: 0, // Rounded corners for the image itself
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  textContainer: {
    // This view groups all the text elements
  },
  discountBadge: {
    backgroundColor: "#EAEAEA",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 4,
    alignSelf: "flex-start", // Important to keep the badge size to its content
    marginBottom: 8,
  },
  discountText: {
    fontFamily: typography.fontFamily.bold,
    fontSize: typography.fontSize.sm, // 14px
    color: "#1C1C1E",
  },
  mainText: {
    fontFamily: typography.fontFamily.black, // Using the thickest font weight
    fontSize: 40, // Custom large font size
    color: "#FFFFFF",
    lineHeight: 44, // Tighten the line height for the stacked text
  },
  collectionText: {
    fontFamily: typography.fontFamily.bold,
    fontSize: typography.fontSize.lg, // 18px
    color: "#FFFFFF",
    letterSpacing: 2, // Add spacing between letters
    marginTop: 4,
  },
  arrowButton: {
    width: 56,
    height: 56,
    borderRadius: 28, // Half of width/height to make it a circle
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});

export default DealsBanner;