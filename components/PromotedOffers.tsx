import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import OfferCard, { OfferCardProps } from './OfferCard';

interface PromotedOffersProps {
  title: string;
  offers: OfferCardProps[];
  onViewAll?: () => void;
}

const PromotedOffers: React.FC<PromotedOffersProps> = ({
  title,
  offers,
  onViewAll,
}) => {
  return (
    <View style={styles.container}>
      {/* Section Header */}
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {onViewAll && (
          <TouchableOpacity style={styles.viewAllButton} onPress={onViewAll}>
            <Text style={styles.viewAllText}>View All</Text>
            <Text style={styles.viewAllIcon}> ›</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Grid of Offers */}
      <FlatList
        data={offers}
        renderItem={({ item }) => <OfferCard {...item} />}
        keyExtractor={(item) => item.id}
        numColumns={3}
        scrollEnabled={false} // Disable scroll for the grid itself
        // Style for the container of all items
        contentContainerStyle={styles.gridContainer}
        // Style for each row to create space
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 14,
    
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewAllText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#F59E0B', // A gold/yellow color
  },
  viewAllIcon: {
    fontSize: 18,
    color: '#F59E0B',
  },
  gridContainer: {
    paddingHorizontal: 20,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 12, // This creates the vertical gap between rows
  },
});

export default PromotedOffers;
