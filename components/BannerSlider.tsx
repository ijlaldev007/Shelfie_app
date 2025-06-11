import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  Text,
} from 'react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');

interface SlideData {
  id: string;
  image: any;
  title?: string;
  description?: string;
}

const bannerSlides: SlideData[] = [
  {
    id: '1',
    image: require('../assets/banners/b1.png'),
  },
  {
    id: '2',
    image: require('../assets/banners/b2.png'),
  },
];

const BannerSlider: React.FC = () => {
  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        showsPagination={true}
        autoplay={true}
        autoplayTimeout={3}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}
        paginationStyle={styles.pagination}
        loop={true}
      >
        {bannerSlides.map((slide) => (
          <View key={slide.id} style={styles.slide}>
            <Image source={slide.image} style={styles.image} />
            
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({  container: {
    height: 200,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    overflow: 'hidden',
    marginHorizontal: 16,
    marginTop: -50,
    zIndex: 999,
  },
  wrapper: {},
  slide: {
    flex: 1,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  textOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 15,
  },
  title: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    color: '#ffffff',
    fontSize: 14,
    opacity: 0.9,
  },
  pagination: {
    bottom: 10,
  },
  dot: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
  },
  activeDot: {
    backgroundColor: '#ffffff',
    width: 20,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
  },
});

export default BannerSlider;
