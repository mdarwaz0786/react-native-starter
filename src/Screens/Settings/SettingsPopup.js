import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SettingsPopup = ({ visible, position }) => {
  if (!visible) return null;

  return (
    <View style={[styles.popup, { top: position.y, left: position.x }]}>
      <TouchableOpacity onPress={() => { /* Your navigation or action */ }}>
        <Text style={styles.menuItem}>Option 1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { /* Your navigation or action */ }}>
        <Text style={styles.menuItem}>Option 2</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { /* Your navigation or action */ }}>
        <Text style={styles.menuItem}>Option 3</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  popup: {
    position: 'absolute',
    width: 110,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 7,
    borderColor: "#D3D3D3",
    borderWidth: 1,
    zIndex: 1000,
    elevation: 1,
  },
  menuItem: {
    color: '#000',
    fontSize: 16,
    marginVertical: 10,
  },
});

export default SettingsPopup;
