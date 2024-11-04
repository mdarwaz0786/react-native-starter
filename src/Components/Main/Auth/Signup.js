import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet, Pressable } from 'react-native';

const Signup = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Signup</Text>

      {/* Name Field */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>
          Name
          <Text style={styles.asterisk}> *</Text>
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />
      </View>

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

      {/* Confirm Password Field */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>
          Confirm Password
          <Text style={styles.asterisk}> *</Text>
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Confirm your password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>

      {/* Sign Up Button */}
      <Pressable style={styles.signupButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Signup</Text>
      </Pressable>

      {/* Already have an account */}
      <Text style={styles.accountText}>Already have an account?</Text>

      {/* Login Button */}
      <Pressable onPress={() => navigation.navigate('Login')} style={styles.loginButton}>
        <Text style={styles.loginText}>Login</Text>
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
    marginBottom: 0,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 15,
    fontWeight: '400',
    color: '#555',
    marginBottom: 5,
  },
  asterisk: {
    color: 'red',
  },
  input: {
    backgroundColor: '#fff',
    color: '#000',
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  signupButton: {
    backgroundColor: '#A63ED3',
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 15,
    fontSize: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
  },
  accountText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#555',
    marginBottom: 15,
  },
  loginButton: {
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#A63ED3',
    borderRadius: 5,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  loginText: {
    color: '#A63ED3',
    fontSize: 17,
  },
});

export default Signup;
