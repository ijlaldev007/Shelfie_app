import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import { typography } from '../constants/typography';

export interface ShopIconProps {
  id: string;
  logo: ImageSourcePropType;
  name: string;
  onPress?: (id: string) => void;
}

const ShopIcon: React.FC<ShopIconProps> = ({ id, logo, name, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress?.(id)}
      activeOpacity={0.7}
    >
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logoImage} />
      </View>
      <Text style={styles.nameText}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 70,
  },
  logoContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 4,
  },
  logoImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 32,
  },  nameText: {
    marginTop: 8,
    fontSize: 13,
    color: '#374151',
    textAlign: 'center',
    fontFamily: typography.fontFamily.medium,
  },
});

export default ShopIcon;
