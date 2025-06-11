import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { GIFT_SVG, USER_ADD_SVG } from '../constants/svg';

interface BalanceSectionProps {
  totalBalance: number;
  approvedAmount: number;
  pendingAmount: number;
}

const BalanceSection: React.FC<BalanceSectionProps> = ({
  totalBalance,
  approvedAmount,
  pendingAmount,
}) => {
  return (
    <View style={styles.container}>
      {/* Main Row: Balance Info + Action Buttons */}
      <View style={styles.mainRow}>
        {/* Left Side: Balance Info */}
        <View style={styles.balanceSection}>
          {/* Balance Display */}
          <View style={styles.balanceContainer}>
            <Text style={styles.balanceLabel}>Cashback Balance</Text>
            <Text style={styles.balanceAmount}>${totalBalance.toFixed(2)}</Text>
          </View>

          {/* Status Row */}
          <View style={styles.statusContainer}>
            <View style={styles.statusItem}>
              <View style={[styles.statusDot, styles.approvedDot]} />
              <Text style={styles.statusLabel}>Approved</Text>
              <Text style={styles.statusAmount}>${approvedAmount.toFixed(2)}</Text>
            </View>

            <View style={styles.statusItem}>
              <View style={[styles.statusDot, styles.pendingDot]} />
              <Text style={styles.statusLabel}>Pending</Text>
              <Text style={styles.statusAmount}>${pendingAmount.toFixed(2)}</Text>
            </View>
          </View>
        </View>

        {/* Right Side: Action Buttons */}
        <View style={styles.actionButtonsContainer}>
          {/* Rewards Button */}
          <TouchableOpacity
            style={styles.actionButton}
            activeOpacity={0.7}
          >
            <View style={styles.iconContainer}>
              <SvgXml xml={GIFT_SVG} width={24} height={24} />
            </View>
            <Text style={styles.buttonLabel}>Rewards</Text>
          </TouchableOpacity>

          {/* Referral Button */}
          <TouchableOpacity
            style={styles.actionButton}
            activeOpacity={0.7}
          >
            <View style={styles.iconContainer}>
              <SvgXml xml={USER_ADD_SVG} width={24} height={24} />
            </View>
            <Text style={styles.buttonLabel}>Referral</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  mainRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  balanceSection: {
    flex: 1,
    paddingRight: 20,
  },
  balanceContainer: {
    marginBottom: 15,
  },
  balanceLabel: {
    fontSize: 16,
    color: '#ffffff',
    opacity: 0.8,
    marginBottom: 5,
  },
  balanceAmount: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffffff',
    letterSpacing: -1,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  approvedDot: {
    backgroundColor: '#27BE69', // Green color for approved
  },
  pendingDot: {
    backgroundColor: '#F2B705', // Orange/yellow color for pending
  },
  statusLabel: {
    fontSize: 14,
    color: '#ffffff',
    opacity: 0.8,
    marginRight: 8,
  },
  statusAmount: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    alignItems: 'center',
    marginLeft: 15,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(139, 69, 19, 0.6)', // Brown background matching header
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  iconText: {
    fontSize: 20,
  },
  buttonLabel: {
    fontSize: 12,
    color: '#ffffff',
    opacity: 0.9,
    fontWeight: '500',
  },
});

export default BalanceSection;
