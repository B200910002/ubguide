import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './loginForm/Login';
import Register from './loginForm/Register';
import Home from './screen/Home';

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
          options={navigationOptions('Нэвтрэх')}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={navigationOptions('Бүртгүүлэх')}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={navigationOptions('Улаанбаатар хотын төтөч')}
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

const navigationOptions = title => ({
  title: title,
  headerTintColor: '#ffffff',
  headerStyle: {
    backgroundColor: '#DB4646',
  },
  statusBarColor: '#DB4646',
});
