import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { typography } from '../constants/typography';
import ProductCard, { ProductCardProps } from './ProductCard';
import ChevronRightIcon from './icons/ChevronRightIcon';

interface ProductSliderProps {
  title: string;
  products: Omit<ProductCardProps, 'onPress' | 'onAddToCart'>[];
  onViewAll?: () => void;
  onProductPress?: (id: string) => void;
  onAddToCart?: (id: string) => void;
}

const ProductSlider: React.FC<ProductSliderProps> = ({
  title,
  products,
  onViewAll,
  onProductPress,
  onAddToCart,
}) => {
  const renderProduct = ({ item }: { item: ProductCardProps }) => (
    <ProductCard
      {...item}
      onPress={onProductPress}
      onAddToCart={onAddToCart}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {onViewAll && (
          <TouchableOpacity onPress={onViewAll} activeOpacity={0.7}>
            <View style={styles.viewAllContainer}>
              <Text style={styles.viewAllText}>View All</Text>
              <ChevronRightIcon size={16} />
            </View>
          </TouchableOpacity>
        )}
      </View>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContentContainer}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },  title: {
    fontSize: 18,
    fontFamily: typography.fontFamily.medium,
    color: '#111827',
    lineHeight: 23,
    letterSpacing: -0.18, // -1% of 18px
  },
  viewAllContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewAllText: {
    fontSize: 12,
    fontFamily: typography.fontFamily.medium,
    color: '#F2B705',
    lineHeight: 19,
    letterSpacing: -0.12, // -1% of 12px
    marginRight: 4,
  },
  listContentContainer: {
    paddingHorizontal: 20,
  },
  separator: {
    width: 16,
  },
});

export default ProductSlider;
