import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

export interface OfferCardProps {
  id: string;
  logo: any; // Use `any` for require(), or { uri: string } for network images
  brandName: string;
  category: string;
  offerText: string;
  onPress?: (id: string) => void;
}

// Calculate the width of the card to fit 3 per row with spacing
const { width } = Dimensions.get('window');
const PADDING_HORIZONTAL = 20;
const GAP = 8;
const CARD_WIDTH = (width - PADDING_HORIZONTAL * 2 - GAP * 2) / 3;

const OfferCard: React.FC<OfferCardProps> = ({
  id,
  logo,
  brandName,
  category,
  offerText,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress?.(id)}
      activeOpacity={0.7}
    >
      <Image source={logo} style={styles.logo} />
      <Text style={styles.brandNameText}>{brandName}</Text>
      <Text style={styles.categoryText}>{category}</Text>
      <View style={styles.offerBadge}>
        <Text style={styles.offerText}>{offerText}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: CARD_WIDTH,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    padding: 8,
    alignItems: 'center',
    // Subtle shadow to match the design
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  logo: {
    width: '100%',
    height: 30,
    resizeMode: 'contain', // Crucial for logos to not stretch
    marginBottom: 6,
  },
  brandNameText: {
    fontSize: 9,
    fontWeight: '600',
    color: '#2E2C34',
    textAlign: 'center',
  },
  categoryText: {
    fontSize: 6,
    color: '#84818A',
    marginTop: 2,
    marginBottom: 12,
    textAlign: 'center',
  },
  offerBadge: {
    backgroundColor: '#F2FAEB', // Light green background
    borderColor: '#A6D87E', // Slightly darker green border
    borderWidth: 1,
    borderRadius: 3,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  offerText: {
    color: '#4E8729', // Dark green text
    fontSize: 6,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default OfferCard;
