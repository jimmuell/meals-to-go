// Header.js
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.headerLeft}>
        <TouchableOpacity style={styles.headerIconButtons}>
          <Ionicons name="person-sharp" size={18} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <View style={[styles.headerLeft]}>
        <TouchableOpacity style={styles.headerIconButtons}>
          <Feather name="plus" size={18} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerIconButtons}>
          <MaterialIcons name="devices-other" size={18} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: 45,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    //backgroundColor: "#f6f5f3",
    backgroundColor: "orange",
    paddingHorizontal: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  headerIcons: {
    flexDirection: "row",
    width: 60,
    justifyContent: "space-between",
  },
  headerButtons: {
    backgroundColor: "#ffffff",
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  headerIconButtons: {
    backgroundColor: "#ffffff", // Button background color
    width: 35, // Width of the button to match the first button
    height: 35, // Height of the button to match the first button
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50, // Make it round
    marginHorizontal: 5, // Add horizontal margin for spacing
    // Apply shadows like headerButtons
    elevation: 3, // Shadow for Android
    shadowColor: "#000000", // Shadow color for iOS
    shadowOffset: { width: 0, height: 1 }, // Shadow offset for iOS
    shadowRadius: 2, // Shadow blur radius for iOS
    shadowOpacity: 0.3, // Shadow opacity for iOS
  },
});

export default Header;
