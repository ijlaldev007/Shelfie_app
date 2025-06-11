import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

interface AvatarProps {
  imageSource: any;
  size?: number;
  isPro?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ 
  imageSource, 
  size = 60, 
  isPro = false 
}) => {
  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <Image 
        source={imageSource} 
        style={[styles.avatar, { width: size, height: size, borderRadius: size / 2 }]}
        resizeMode="cover"
      />
      {isPro && (
        <View style={styles.badge}>
          <Image
            source={require('../assets/probadge.png')}
            style={styles.badgeImage}
            resizeMode="contain"
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  avatar: {
    borderWidth: 2,
    borderColor: '#fff',
  },
  badge: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeImage: {
    width: 24,
    height: 24,
  },
});

export default Avatar;
