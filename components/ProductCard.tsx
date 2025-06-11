import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import CalendarAddIcon from './icons/CalendarAddIcon';
import { typography } from '../constants/typography';

export interface ProductCardProps {
  id: string;
  image: any;
  timeLeft?: string;
  brand: string;
  name: string;
  price: number;
  originalPrice?: number;
  onPress?: (id: string) => void;
  onAddToCart?: (id: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  timeLeft,
  brand,
  name,
  price,
  originalPrice,
  onPress,
  onAddToCart,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress?.(id)}
      activeOpacity={0.8}
    >
      {/* Image Section */}
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
        {timeLeft && (
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>{timeLeft}</Text>
          </View>
        )}
      </View>

      {/* Content Section */}
      <View style={styles.contentContainer}>
        <Text style={styles.brandText}>{brand}</Text>
        <Text style={styles.nameText} numberOfLines={2}>
          {name}
        </Text>

        {/* Bottom Row with Price and Add Button */}
        <View style={styles.bottomRow}>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>${price.toFixed(2)}</Text>
            {originalPrice && (
              <Text style={styles.originalPriceText}>
                ${originalPrice.toFixed(2)}
              </Text>
            )}
          </View>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => onAddToCart?.(id)}
          >
            <CalendarAddIcon size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({  container: {
    width: 140,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  imageContainer: {
    height: 140,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    overflow: 'hidden',
    padding: 8,
    borderRadius: 8,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },  badgeContainer: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: '#EF4444',
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius: 6,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '600',    fontFamily: typography.fontFamily.semiBold,
  },
  contentContainer: {
    padding: 8,
    height: 90,
    justifyContent: 'space-between',
  },
  brandText: {
    color: '#6B7280',
    fontSize: 10,
    marginBottom: 2,
    textTransform: 'uppercase',
    fontFamily: typography.fontFamily.medium,
  },
  nameText: {
    color: '#111827',
    fontSize: 12,    fontFamily: typography.fontFamily.semiBold,
    lineHeight: 16,
    marginBottom: 'auto',
    flexShrink: 1,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },  priceText: {
    color: '#111827',
    fontSize: 14,
    fontFamily: typography.fontFamily.bold,
  },
  originalPriceText: {
    color: '#9CA3AF',
    fontSize: 11,
    textDecorationLine: 'line-through',
    marginLeft: 4,
    fontFamily: typography.fontFamily.regular,
  },
  iconButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProductCard;
