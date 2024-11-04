import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AccountSettingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Account Setting Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    color: '#000',
    fontSize: 24,
  },
});

export default AccountSettingScreen;
