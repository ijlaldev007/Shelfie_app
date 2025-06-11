import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { typography } from '../constants/typography';
import ShopIcon, { ShopIconProps } from './ShopIcon';

interface PopularShopsProps {
  title: string;
  shops: Omit<ShopIconProps, 'onPress'>[];
  onViewAll?: () => void;
  onShopPress?: (id: string) => void;
}

const PopularShops: React.FC<PopularShopsProps> = ({
  title,
  shops,
  onViewAll,
  onShopPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {onViewAll && (
          <TouchableOpacity style={styles.viewAllButton} onPress={onViewAll}>
            <Text style={styles.viewAllText}>View All</Text>
            <Text style={styles.viewAllIcon}> ›</Text>
          </TouchableOpacity>
        )}
      </View>

      <FlatList
        data={shops}
        renderItem={({ item }) => (
          <ShopIcon
            id={item.id}
            logo={item.logo}
            name={item.name}
            onPress={onShopPress}
          />
        )}
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
    paddingVertical: 24,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },  title: {
    fontSize: 20,
    color: '#111827',
    fontFamily: typography.fontFamily.medium,
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },  viewAllText: {
    fontSize: 14,
    color: '#F59E0B',
    fontFamily: typography.fontFamily.medium,
  },
  viewAllIcon: {
    fontSize: 18,
    color: '#F59E0B',
  },
  listContentContainer: {
    paddingHorizontal: 20,
  },
  separator: {
    width: 16,
  },
});

export default PopularShops;
