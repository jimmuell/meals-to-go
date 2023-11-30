// BottomNav.js
import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const BottomNav = () => {
  return (
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
  );
};

const styles = StyleSheet.create({
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

export default BottomNav;
