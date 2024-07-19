import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import ForgetPasswordPage from './ForgetPasswordPage';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="ke halaman Login" onPress={() => navigation.navigate('Login')}/>
      <Button title="ke halaman SignUp" onPress={() => navigation.navigate('SignUp')}/>
      <Button title="ke halaman ForgetPassword" onPress={() => navigation.navigate('ForgetPassword')}/>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen name="SignUp" component={SignUpPage} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={LoginPage} options={{headerShown: false}} />
        <Stack.Screen name="ForgetPassword" component={ForgetPasswordPage} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;