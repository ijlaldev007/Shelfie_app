import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons"; // Or your preferred icon library

// --- Component Props Interface ---
interface DealsHeaderProps {
  // A callback function to inform the parent screen when the filter button is pressed
  onFilterPress: () => void;
  // A callback to inform the parent which category is now selected
  onCategoryChange: (category: string) => void;
}

// --- Dummy Data for Categories ---
// In a real app, you would likely fetch this or pass it as a prop.
const CATEGORIES = ["All", "Shoes", "Clothes", "Accessories", "Electronics"];

const DealsHeader: React.FC<DealsHeaderProps> = ({
  onFilterPress,
  onCategoryChange,
}) => {
  const insets = useSafeAreaInsets();
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);

  const handleCategoryPress = (category: string) => {
    setActiveCategory(category);
    onCategoryChange(category); // Notify the parent screen of the change
  };

  return (
    <>
      {/* We can keep the status bar style consistent */}
      <StatusBar barStyle="light-content" />
      <ImageBackground
        // Reusing the same background image as your original Header
        source={require("../assets/Header.png")}
        style={styles.headerBackground}
        resizeMode="stretch"
      >
        <View style={[styles.container, { paddingTop: insets.top + 10 }]}>
          {/* --- Top Row: Title and Filter Button --- */}
          <View style={styles.topRow}>
            <Text style={styles.title}>Deals</Text>
            <TouchableOpacity
              style={styles.filterButton}
              onPress={onFilterPress}
              activeOpacity={0.7}
            >
              <Ionicons
                name="options-outline"
                size={22}
                color="#FFFFFF"
              />
            </TouchableOpacity>
          </View>

          {/* --- Bottom Row: Category Pills --- */}
          <View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.categoriesScrollView}
            >
              {CATEGORIES.map((category) => {
                const isActive = category === activeCategory;
                return (
                  <TouchableOpacity
                    key={category}
                    style={[
                      styles.categoryButton,
                      isActive
                        ? styles.activeCategoryButton
                        : styles.inactiveCategoryButton,
                    ]}
                    onPress={() => handleCategoryPress(category)}
                    activeOpacity={0.8}
                  >
                    <Text
                      style={[
                        styles.categoryText,
                        isActive
                          ? styles.activeCategoryText
                          : styles.inactiveCategoryText,
                      ]}
                    >
                      {category}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  headerBackground: {
    width: "100%",
    // The component will auto-size its height based on content
  },
  container: {
    paddingBottom: 20, // Space at the bottom of the header
    paddingHorizontal: 20,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24, // Space between title row and categories
  },
  title: {
    fontFamily: "Inter-Bold", // Assuming you have this font
    fontWeight: "700",
    fontSize: 32,
    color: "#FFFFFF",
  },
  filterButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 1.5,
    borderColor: "rgba(255, 255, 255, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  categoriesScrollView: {
    paddingRight: 20, // Ensures the last item doesn't stick to the edge
  },
  categoryButton: {
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 20,
    marginRight: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  activeCategoryButton: {
    backgroundColor: "#F2B705", // Active yellow color
  },
  inactiveCategoryButton: {
    backgroundColor: "#FFFFFF26", // Inactive semi-transparent white
  },
  categoryText: {
    fontFamily: "Inter-SemiBold",
    fontWeight: "600",
    fontSize: 16,
  },
  activeCategoryText: {
    color: "#000000", // Black text for active state
  },
  inactiveCategoryText: {
    color: "#FFFFFF", // White text for inactive state
  },
});

export default DealsHeader;