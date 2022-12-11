import * as React from 'react';
import {View, Text} from 'react-native';
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

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
