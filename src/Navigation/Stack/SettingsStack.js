import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import SettingsTopTab from '../TopTab/SettingsTopTab';
import SettingsPopup from '../../Screens/Settings/SettingsPopup';

const Stack = createStackNavigator();

const SettingsStack = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });

  const togglePopup = (event) => {
    const { pageY } = event.nativeEvent;
    setPopupPosition({ x: 245, y: pageY + 25 });
    setPopupVisible((prev) => !prev);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <View style={styles.container}>
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
          headerStyle: {
            backgroundColor: '#A63ED3',
            elevation: 0,
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="arrow-back" size={24} color="#fff" style={{ marginLeft: 10 }} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={togglePopup}>
              <Icon name="ellipsis-vertical" size={24} color="#fff" style={{ marginRight: 10 }} />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
              <Text style={{ color: '#fff', fontSize: 20 }}>Settings</Text>
            </View>
          ),
        })}
      >
        <Stack.Screen name="SettingsTopTab" component={SettingsTopTab} />
      </Stack.Navigator>

      {
        popupVisible && (
          <View style={styles.overlay} onTouchEnd={closePopup}>
            <SettingsPopup
              visible={popupVisible}
              position={popupPosition}
            />
          </View>
        )
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
  },
});

export default SettingsStack;
