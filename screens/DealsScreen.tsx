import React from "react";
import { View, StyleSheet, Alert, FlatList, Dimensions } from "react-native";
import DealsHeader from "../components/DealsHeader";
import DealCard from "../components/DealCard";
import DealsBanner from "../components/DealsBanner";

// --- Data for the TOP grid of cards ---
const TOP_DEALS = [
  {
    id: "1",
    imageUrl: require("../assets/deals/1.png"),
    category: "Shoe Offer",
    title: 'Air Jordan 3 Retro "Cement Grey"',
    banner: { text: "Trending Now", icon: "flame" as const, color: "#4A90E2" },
    offer: { type: "price" as const, newPrice: 200, originalPrice: 325 },
  },
  {
    id: "2",
    imageUrl: require("../assets/deals/2.png"),
    category: "Store Offer",
    title: "Nike Exclusive 10% Discount on Summer!",
    offer: { type: "discount" as const, percentage: 10 },
  },
  {
    id: "3",
    imageUrl: require("../assets/deals/3.png"),
    category: "In-Store Offer",
    title: "Puma Exclusive In-Store 5% Discount",
    offer: { type: "discount" as const, percentage: 5 },
  },
  {
    id: "4",
    imageUrl: require("../assets/deals/4.png"),
    category: "In-Store Offer",
    title: "Soleback Membership Deal: Grab your sports...",
    offer: { type: "action" as const, text: "Claim Now" },
  },
  {
    id: "5",
    imageUrl: require("../assets/deals/5.png"),
    category: "Store Offer",
    title: "CLA Exclusive 10% Discount on Summer!",
    offer: { type: "discount" as const, percentage: 10 },
  },
  {
    id: "6",
    imageUrl: require("../assets/deals/6.png"),
    category: "Apparel Deal",
    title: 'Top Spin Clothing Retro "Cement Grey"',
    banner: { text: "Limited Deal", icon: "time" as const, color: "#F5A623" },
    offer: { type: "price" as const, newPrice: 120, originalPrice: 200 },
  },
];

// --- Data for the BOTTOM grid of cards ---
const BOTTOM_DEALS = [
  {
    id: "7",
    imageUrl: require("../assets/deals/7.png"),
    category: "Store Offer",
    title: "Vellum 10% Discount on all products!",
    offer: { type: "discount" as const, percentage: 10 },
  },
  {
    id: "8",
    imageUrl: require("../assets/deals/8.png"),
    category: "In-Store Offer",
    title: "Puma Exclusive In-Store 5% Discount",
    offer: { type: "discount" as const, percentage: 5 },
  },
];

// --- Card Width Calculation ---
const { width } = Dimensions.get("window");
const PADDING_HORIZONTAL = 16;
const CARD_MARGIN = 12;
const NUM_COLUMNS = 2;
const cardWidth =
  (width - PADDING_HORIZONTAL * 2 - CARD_MARGIN * (NUM_COLUMNS - 1)) /
  NUM_COLUMNS;

const DealsScreen: React.FC = () => {
  const handleFilterPress = () => Alert.alert("Filter Pressed");
  const handleCategoryChange = (category: string) => console.log(category);
  const handleBannerPress = () => Alert.alert("Banner Pressed!");

  return (
    <View style={styles.container}>
      <DealsHeader
        onFilterPress={handleFilterPress}
        onCategoryChange={handleCategoryChange}
      />

      <FlatList
        data={TOP_DEALS}
        keyExtractor={(item) => item.id}
        numColumns={NUM_COLUMNS}
        style={styles.listContainer}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <DealCard
            {...item}
            style={[
              { width: cardWidth },
              index % NUM_COLUMNS !== NUM_COLUMNS - 1 && { marginRight: CARD_MARGIN }
            ]}
            onPress={() => Alert.alert(`Pressed on: ${item.title}`)}
          />
        )}
        ListFooterComponent={
          <View style={styles.footerContainer}>
            <DealsBanner onPress={handleBannerPress} />
            {/* Bottom deals in a 2-column grid */}
            <FlatList
              data={BOTTOM_DEALS}
              keyExtractor={(item) => item.id}
              numColumns={NUM_COLUMNS}
              scrollEnabled={false}
              contentContainerStyle={styles.bottomListContent}
              renderItem={({ item, index }) => (
                <DealCard
                  {...item}
                  style={[
                    { width: cardWidth },
                    index % NUM_COLUMNS !== NUM_COLUMNS - 1 && { marginRight: CARD_MARGIN }
                  ]}
                  onPress={() => Alert.alert(`Pressed on: ${item.title}`)}
                />
              )}
            />
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C23",
  },
  listContainer: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  listContent: {
    paddingTop: 20,
    paddingHorizontal: PADDING_HORIZONTAL,
    paddingBottom: 20,
  },
  footerContainer: {
    paddingHorizontal: 0, // Remove horizontal padding for edge-to-edge banner
  },
  bottomListContent: {
    paddingHorizontal: PADDING_HORIZONTAL,
    paddingTop: 16,
    paddingBottom: 20,
  },
});

export default DealsScreen;