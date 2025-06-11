import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SvgXml } from 'react-native-svg';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

// Import SVG strings
import { homeSvg, dealsSvg, sneakersSvg, cashbackSvg, profileSvg } from '../constants/svg';

const ACTIVE_COLOR = '#FFC700'; // Gold/yellow color
const INACTIVE_COLOR = '#9E9E9E'; // Grey color

const CustomTabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const { bottom } = useSafeAreaInsets();

  const renderIcon = (routeName: string, isFocused: boolean) => {
    const color = isFocused ? ACTIVE_COLOR : INACTIVE_COLOR;

    // Replace currentColor with the actual color in the SVG string
    const getSvgWithColor = (svgString: string) => {
      return svgString.replace(/currentColor/g, color);
    };

    switch (routeName) {
      case 'index':
        return <SvgXml xml={getSvgWithColor(homeSvg)} width={24} height={24} />;
      case 'deals':
        return <SvgXml xml={getSvgWithColor(dealsSvg)} width={24} height={24} />;
      case 'sneakers':
        return <SvgXml xml={getSvgWithColor(sneakersSvg)} width={24} height={24} />;
      case 'cashback':
        return <SvgXml xml={getSvgWithColor(cashbackSvg)} width={24} height={24} />;
      case 'profile':
        return <SvgXml xml={getSvgWithColor(profileSvg)} width={24} height={24} />;
      default:
        return null;
    }
  };

  return (
    <View style={[styles.tabBarContainer, { paddingBottom: bottom }]}>
      {state.routes
        .filter(route => !['sitemap', 'notfound', '+not-found', '_sitemap', '_layout'].includes(route.name))
        .map((route, index) => {
          const { options } = descriptors[route.key];
          const label = options.tabBarLabel?.toString() ?? options.title ?? route.name;
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name as never);
            }
          };

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              
              onPress={onPress}
              style={styles.tabItem}
            >
              {renderIcon(route.name, isFocused)}
              <Text
                style={[
                  styles.label,
                  { color: isFocused ? ACTIVE_COLOR : INACTIVE_COLOR },
                ]}
              >
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    backgroundColor: '#1C1C23',
    borderTopWidth: 0,
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    height: 60,
  },
  label: {
    fontSize: 11,
    fontWeight: '600',
    marginTop: 4,
    fontFamily: 'Inter-Medium',
  },
});

export default CustomTabBar;
