import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Header from "./src/components/CustomHeader";
import ScrollManager from "./src/components/ScrollManager";
import BottomNav from "./src/components/BottomNav";

export default function App() {
  const [headerTitle, setHeaderTitle] = useState(" ");
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title={headerTitle} />
      <ScrollManager setHeaderTitle={setHeaderTitle} />
      <BottomNav />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, // to ensure it fills the whole screen
    // backgroundColor: 'desired-color', // if you want to apply a specific color to the safe area
  },
});
