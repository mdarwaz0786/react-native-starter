import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput, TouchableOpacity, StyleSheet, Pressable } from 'react-native';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Login</Text>

      {/* Email Field */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>
          Email
          <Text style={styles.asterisk}> *</Text>
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {/* Password Field */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>
          Password
          <Text style={styles.asterisk}> *</Text>
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      {/* Login Button */}
      <Pressable style={styles.loginButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>

      {/* Don't have an account */}
      <Text style={styles.accountText}>Don't have an account?</Text>

      {/* Sign Up Button */}
      <Pressable style={styles.signupButton} onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.signupText}>Signup</Text>
      </Pressable>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '400',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: '400',
    color: '#555',
    marginBottom: 5,
  },
  asterisk: {
    color: 'red',
  },
  input: {
    backgroundColor: '#fff',
    color: 'black',
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  loginButton: {
    backgroundColor: '#A63ED3',
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
  },
  accountText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#555',
    marginBottom: 15,
  },
  signupButton: {
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#A63ED3',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  signupText: {
    color: '#A63ED3',
    fontSize: 17,
  },
});

export default Login;
