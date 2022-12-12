import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './loginForm/Login';
import Register from './loginForm/Register';
import Home from './homePage/Home';

function HomeScreen() {
  return <Home />;
}

function LoginScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Улаанбаатар хотын хөтөч</Text>
      <Login
        pressLogin={() => navigation.navigate('Home')}
        pressRegister={() => navigation.navigate('Register')}
      />
    </View>
  );
}

function RegisterScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Улаанбаатар хотын хөтөч</Text>
      <Register pressLogin={() => navigation.navigate('Login')} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: 'Нэвтрэх',
            statusBarColor: '#DB4646',
          }}
          backgroundColor={styles.redContainer}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            title: 'Бүртгүүлэх',
            statusBarColor: '#DB4646',
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Улаанбаатар хотын төтөч',
            statusBarColor: '#DB4646',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  redContainer: {
    backgroundColor: '#DB4646',
  },
});
