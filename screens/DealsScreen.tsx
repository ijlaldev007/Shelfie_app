import React from "react";
import { View, Text, StyleSheet, Alert, ScrollView } from "react-native";
import DealsHeader from "../components/DealsHeader"; // Adjust this path if needed

const DealsScreen = () => {
  // This function will be called when the filter icon is pressed in the header
  const handleFilterPress = () => {
    Alert.alert(
      "Filter Pressed",
      "This is where you would open a filter modal or screen."
    );
  };

  // This function will be called when a new category is selected
  const handleCategoryChange = (category: string) => {
    console.log("Selected category:", category);
    // You can add your logic here to fetch or filter the deals
    // based on the selected category.
  };

  return (
    <View style={styles.container}>
      {/* The new header component is placed at the top */}
      <DealsHeader
        onFilterPress={handleFilterPress}
        onCategoryChange={handleCategoryChange}
      />

      {/* This View will contain the rest of your screen's content */}
      <ScrollView style={styles.content}>
        <Text style={styles.text}>
          Your deals list for the selected category will be displayed here.
        </Text>
        {/* You can replace the Text above with your FlatList or other components */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C23", // Using your existing background color
  },
  content: {
    flex: 1,
    padding: 20,
  },
  text: {
    color: "#FFF",
    fontSize: 18, // Adjusted font size for content
    fontFamily: "Inter_18pt-Medium", // Using your existing font
    textAlign: "center",
    opacity: 0.7,
  },
});

export default DealsScreen;