import React from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

// Define the shape of the item data
interface ItemDetails {
  brand: string;
  name: string;
  releaseInfo: string;
  imageUrl: string | number; // Can be either a remote URL string or a local require() number
}

interface SetNotificationModalProps {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
  item: ItemDetails;
}

// A sample item to make the component runnable for testing
const sampleItem: ItemDetails = {
  brand: "Nike",
  name: 'Air Jordan 3 Retro "Cement Grey"',
  releaseInfo: "Dropping in 5 days",
  imageUrl: require("../assets/products/p1.png"),
};

const SetNotificationModal: React.FC<SetNotificationModalProps> = ({
  visible,
  onClose,
  onConfirm,
  item = sampleItem,
}) => {
  return (
    <Modal
      visible={visible}
      animationType="slide" // Changed from 'fade' to 'slide'
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          {/* Handle for the bottom sheet */}
          <View style={styles.handle} />

          {/* The graphic at the top of the modal */}
          <Image
            source={require("../assets/graphic.png")}
            style={styles.graphic}
            resizeMode="contain"
          />

          <Text style={styles.title}>Notify for this item?</Text>
          <Text style={styles.subtitle}>
            We'll send a notification when this item is available in the store.
          </Text>

          {/* Item Information Card */}
          <View style={styles.itemCard}>
            <Image
              source={
                typeof item.imageUrl === "string"
                  ? { uri: item.imageUrl }
                  : item.imageUrl
              }
              style={styles.itemImage}
            />
            <View style={styles.itemDetails}>
              <Text style={styles.itemBrand}>{item.brand}</Text>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemReleaseInfo}>{item.releaseInfo}</Text>
            </View>
          </View>

          {/* Action Buttons */}
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={onConfirm}
            activeOpacity={0.8}
          >
            <Icon name="notifications-outline" size={20} color="#333" />
            <Text style={styles.primaryButtonText}>Set Notification</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={onClose}
            activeOpacity={0.7}
          >
            <Text style={styles.secondaryButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    // This is the key change to push the modal to the bottom
    justifyContent: "flex-end",
  },
  modalContainer: {
    backgroundColor: "#fff",
    // Rounded corners only on the top
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    // Adjusted padding for the bottom sheet style
    paddingTop: 12,
    paddingHorizontal: 20,
    paddingBottom: 30, // Extra padding for home indicator area
    alignItems: "center",
    width: "100%",
  },
  // New style for the grabber handle
  handle: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#e0e0e0",
    marginBottom: 10,
  },
  graphic: {
    width: 350,
    height: 220,
    marginBottom: -36,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#111",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 24,
    lineHeight: 22,
  },
  itemCard: {
    flexDirection: "row",
    backgroundColor: "#f8f9fa",
    borderRadius: 12,
    padding: 12,
    alignItems: "center",
    width: "100%",
    marginBottom: 24,
    borderWidth: 1,
    borderColor: "#e9ecef",
  },
  itemImage: {
    width: 60,
    height: 60,
    marginRight: 12,
  },
  itemDetails: {
    flex: 1,
  },
  itemBrand: {
    fontSize: 14,
    color: "#888",
  },
  itemName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
    marginVertical: 2,
  },
  itemReleaseInfo: {
    fontSize: 14,
    color: "#888",
  },
  primaryButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFDB6F",
    borderRadius: 50,
    paddingVertical: 16,
    width: "100%",
    marginBottom: 12,
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginLeft: 8,
  },
  secondaryButton: {
    borderRadius: 50,
    paddingVertical: 16,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",

    // --- Added Styles ---
    borderWidth: 1,
    borderColor: "#E8E7E6",

    // Shadow for iOS
    shadowColor: "#101828",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,

    // Shadow for Android
    elevation: 2,
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
});

export default SetNotificationModal;