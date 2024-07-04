import { Text, View, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useFonts } from 'expo-font';

const ButtonCustom = ({ text, color, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ width: "100%", alignItems: "center" }}>
      <View style={{
        width: '80%',
        height: 50,
        backgroundColor: color,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
      }}>
        <Text style={{
          textAlign: 'center',
          color: 'white',
          fontSize: 18,
          fontWeight: 'bold'
        }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const TextInputCustom = ({ placeholder, color, typeKeyboard, value, onChangeText, error }) => {
  return (
    <View style={{ marginBottom: 20, width: '100%', alignItems: 'center' }}>
      <TextInput
        keyboardType={typeKeyboard}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={{
          width: '80%',
          height: 40,
          borderColor: color,
          borderWidth: 1,
          borderRadius: 5,
          paddingLeft: 10,
          fontFamily: 'MetroMedium',
        }}
      />
      {error && <Text style={{ color: 'red', marginTop: 5 }}>{error}</Text>}
    </View>
  );
}

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = () => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Not a valid email address. Should be your@email.com');
    } else {
      setError('');
      console.log('Email is valid');
    }
  };

  const [dapatFont] = useFonts({
    'MetroBold': require('./assets/fonts/Metropolis-Bold.otf'),
    'MetroMedium': require('./assets/fonts/Metropolis-Medium.otf'),
  });
  if (!dapatFont) {
    return <Text>Font not found...</Text>
  }

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: 16,
    }}>
      <View style={{
        width: '100%',
        alignItems: 'center',
        marginBottom: 24,
      }}>
        <TouchableOpacity>
          <Text style={{ fontSize: 16, color: 'black' }}>{'<'}</Text>
        </TouchableOpacity>
      </View>
      <View style={{
        width: '100%',
        alignItems: 'center',
        marginBottom: 16,
      }}>
        <Text style={{
          fontSize: 24,
          fontFamily: 'MetroBold',
          marginBottom: 16,
        }}>Forgot Password</Text>
        <Text style={{
          fontSize: 16,
          color: '#555',
          width: '80%',
          textAlign: 'center',
        }}>Please, enter your email address. You will receive a link to create a new password via email</Text>
      </View>
      <View style={{
        width: '100%',
        alignItems: 'center',
      }}>
        <TextInputCustom
          placeholder="Email"
          color={error ? 'red' : 'black'}
          typeKeyboard="email-address"
          value={email}
          onChangeText={setEmail}
          error={error}
        />
        <ButtonCustom text="SEND" color="red" onPress={validateEmail} />
      </View>
    </View>
  );
}

export default ForgotPassword;