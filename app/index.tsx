import { StyleSheet, View, ScrollView, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import BannerSlider from '../components/BannerSlider'
import ProductSlider from '../components/ProductSlider'
import PromotedOffers from '../components/PromotedOffers'
import PopularShops from '../components/PopularShops'

const Home = () => {
  const [loading, setLoading] = useState(false);

  // Sample user data - you can replace this with real data later
  const userData = {
    name: 'Alexandra M.',
    avatar: require('../assets/avatar.png'),
    isPro: true,
    notifications: [
      {
        id: '1',
        title: 'Welcome to Shelfie!',
        message: 'Start organizing your books today',
        time: '2 hours ago',
        isRead: false,
      },
      {
        id: '2',
        title: 'Book Reminder',
        message: 'You have 3 books to return this week',
        time: '1 day ago',
        isRead: true,
      },
    ],
  }

  // Cashback offers data
  const cashbackOffersData = [
    {
      id: '1',
      logo: require('../assets/logos/adidas.png'),
      brandName: 'Adidas',
      category: 'Shoe Company',
      offerText: 'Upto 10% Cashback',
    },
    {
      id: '2',
      logo: require('../assets/logos/puma.png'),
      brandName: 'Puma',
      category: 'Apparel Company',
      offerText: 'Upto 5% Cashback',
    },
    {
      id: '3',
      logo: require('../assets/logos/reebok.png'),
      brandName: 'Reebok',
      category: 'Apparel Company',
      offerText: 'Upto 10% Cashback',
    },
    {
      id: '4',
      logo: require('../assets/logos/samsung.png'),
      brandName: 'Samsung',
      category: 'Electronics',
      offerText: 'Upto 5% Cashback',
    },
    {
      id: '5',
      logo: require('../assets/logos/norton.png'),
      brandName: 'Norton',
      category: 'Software',
      offerText: 'Upto 5% Cashback',
    },
    {
      id: '6',
      logo: require('../assets/logos/boss.png'),
      brandName: 'Boss',
      category: 'Apparel Company',
      offerText: 'Upto 5% Cashback',
    },
  ];  // Sample products data
  const upcomingProducts = [
    {
      id: '1',
      image: require('../assets/products/p1.png'),
      timeLeft: '2 days left',
      brand: 'Nike',
      name: 'Air Max 270',
      price: 149.99,
      originalPrice: 179.99,
    },
    {
      id: '2',
      image: require('../assets/products/p2.png'),
      timeLeft: '5 days left',
      brand: 'Nike',
      name: 'Air Jordan 1 Retro High',
      price: 169.99,
    },
    {
      id: '3',
      image: require('../assets/products/p3.png'),
      timeLeft: '1 day left',
      brand: 'Nike',
      name: 'Air Force 1 Low',
      price: 99.99,
      originalPrice: 119.99,
    },
  ];

  // Popular shops data
  const popularShopsData = [
    { id: '1', logo: require('../assets/shops/falcon.png'), name: 'Falcon' },
    { id: '2', logo: require('../assets/shops/nike.png'), name: 'Nike' },
    { id: '3', logo: require('../assets/shops/hnm.png'), name: 'H&M' },
    { id: '4', logo: require('../assets/shops/enix.png'), name: 'Enix' },
    { id: '5', logo: require('../assets/shops/adidas.png'), name: 'Adidas' },
  ];

  // Action button handlers
  const handleRewardsPress = () => {
    console.log('Rewards pressed');
    // Add your rewards navigation/logic here
  };

  const handleReferralPress = () => {
    console.log('Referral pressed');
    // Add your referral navigation/logic here
  };

  const handleProductPress = (id: string) => {
    console.log('Product pressed:', id);
    // Add navigation to product detail
  };

  const handleAddToCart = (id: string) => {
    console.log('Add to cart:', id);
    // Add to cart logic
  };

  const handleViewAllOffers = () => {
    console.log('View all offers pressed');
    // Navigate to offers screen
  };

  const handleOfferPress = (id: string) => {
    console.log('Offer pressed:', id);
    // Handle offer selection
  };

  const handleShopPress = (id: string) => {
    console.log('Shop pressed:', id);
    // Add navigation to shop detail
  };

  const handleViewAllShops = () => {
    console.log('View all shops pressed');
    // Navigate to shops screen
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FFC700" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Header
          userName={userData.name}
          userAvatar={userData.avatar}
          isPro={userData.isPro}
          notifications={userData.notifications}
          onRewardsPress={handleRewardsPress}
          onReferralPress={handleReferralPress}
        />
        <BannerSlider />
        {/* Popular Shoes Section */}
        <ProductSlider
          title="Popular Nike Shoes"
          products={upcomingProducts}
          onProductPress={handleProductPress}
          onAddToCart={handleAddToCart}
          onViewAll={() => console.log('View all pressed')}
        />

        {/* Promoted Cashback Offers */}
        <PromotedOffers
          title="Promoted Cashback Offers"
          offers={cashbackOffersData.map(offer => ({
            ...offer,
            onPress: handleOfferPress
          }))}
          onViewAll={handleViewAllOffers}
        />

        {/* Popular Shops Section */}
        <PopularShops
          title="Popular Shops"
          shops={popularShopsData}
          onShopPress={handleShopPress}
          onViewAll={handleViewAllShops}
        />
      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    position: 'relative',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1C1C23',
  },
})