import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.headerIconButtons}>
            <Ionicons name="person-sharp" size={18} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerText}>TopHeader</Text>
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
      <ScrollView style={styles.scrollView}>
        {/* Scrollable content goes here */}
      </ScrollView>
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home-outline" size={24} color="black" />
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="analytics-outline" size={24} color="black" />
          <Text>Measure</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="star-outline" size={24} color="black" />
          <Text>Achieve</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
    backgroundColor: "#f6f5f3",
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
  scrollView: {
    flex: 1,
    backgroundColor: "#f2f2f2", // Just for visibility
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "orange",
    padding: 10,
  },
  navItem: {
    alignItems: "center",
  },
});
