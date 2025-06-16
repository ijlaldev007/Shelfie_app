import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Avatar from './Avatar';
import NotificationModal from './NotificationModal';
import NotificationIcon from './NotificationIcon';
import BalanceSection from './BalanceSection';

interface HeaderProps {
  userName: string;
  userAvatar: any;
  isPro?: boolean;
  notifications?: any[];
  // Balance section props
  totalBalance?: number;
  approvedAmount?: number;
  pendingAmount?: number;
  // Action button handlers
  onRewardsPress?: () => void;
  onReferralPress?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  userName,
  userAvatar,
  isPro = false,
  notifications = [],
  totalBalance = 100000.75,
  approvedAmount = 90.84,
  pendingAmount = 140.45,
  onRewardsPress,
  onReferralPress,
}) => {
  const [isNotificationModalVisible, setIsNotificationModalVisible] = useState(false);
  const insets = useSafeAreaInsets();

  const openNotifications = () => {
    setIsNotificationModalVisible(true);
  };

  const closeNotifications = () => {
    setIsNotificationModalVisible(false);
  };

  // Get first name from full name
  const getFirstName = (fullName: string) => {
    return fullName.split(' ')[0];
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={false} />
      <ImageBackground
        source={require('../assets/Header.png')}
        style={[styles.headerBackground, { paddingVertical: insets.top + 20 }]}
        resizeMode="stretch"
        
      >
        <View style={styles.headerContent}>
          <View style={styles.leftSection}>
            <Avatar
              imageSource={userAvatar}
              size={60}
              isPro={isPro}
            />
            <View style={styles.textSection}>
              <Text style={styles.greetingText}>
                Hello {getFirstName(userName)}
              </Text>
              <Text style={styles.welcomeText}>Welcome Back</Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.notificationButton}
            onPress={openNotifications}
            activeOpacity={0.7}
          >
            <View style={styles.bellIcon}>
              <NotificationIcon size={20} color="#ffffff" />
            </View>
            {notifications.length > 0 && (
              <View style={styles.notificationBadge}>
                <Text style={styles.badgeText}>
                  {notifications.length > 9 ? '9+' : notifications.length}
                </Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        {/* Balance Section */}
        <BalanceSection
          totalBalance={totalBalance}
          approvedAmount={approvedAmount}
          pendingAmount={pendingAmount}
        />
      </ImageBackground>

      <NotificationModal
        visible={isNotificationModalVisible}
        onClose={closeNotifications}
        onConfirm={() => { /* TODO: implement confirm handler */ }}
        item={notifications && notifications.length > 0 ? notifications[0] : null}
      />
    </>
  );
};

const styles = StyleSheet.create({
  headerBackground: {
    width: '100%',
    paddingBottom: 50,
    minHeight: 150,
    zIndex: 1,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  textSection: {
    marginLeft: 15,
    flex: 1,
  },
  greetingText: {
    fontFamily: 'Inter-Regular',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 19,
    letterSpacing: -0.12, // -1% of 12px
    color: '#ffffff',
    opacity: 0.8,
    marginBottom: 2,
  },
  welcomeText: {
    fontFamily: 'Inter-SemiBold',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 27.9, // 155% of 18px
    letterSpacing: 0, // 0%
    color: '#ffffff',
  },
  notificationButton: {
    position: 'relative',
    padding: 8,
  },
  bellIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },

  notificationBadge: {
    position: 'absolute',
    top: 4,
    right: 4,
    backgroundColor: '#FF3B30',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  badgeText: {
    fontFamily: 'Inter-Bold',
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default Header;
