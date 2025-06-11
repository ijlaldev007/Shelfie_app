import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { NOTIFICATION_SVG } from '../constants/svg';

interface NotificationIconProps {
  size?: number;
  color?: string;
}

const NotificationIcon: React.FC<NotificationIconProps> = ({
  size = 24,
  color = '#ffffff'
}) => {
  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <SvgXml xml={NOTIFICATION_SVG} width={size} height={size} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NotificationIcon;
