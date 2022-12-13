import React, {useContext} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/homeScreen/Home';
import LoginScreen from '../screens/loginScreen/Login';
import RegisterScreen from '../screens/registScreen/Register';
import {AuthContext} from '../auth/Authentication';
import SplashScreen from '../screens/SplashScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const {userInfo, splashLoading} = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {splashLoading ? (
          <Stack.Screen
            name="Splash Screen"
            component={SplashScreen}
            options={{
              headerShown: false,
              headerStyle: {backgroundColor: '#DB4646'},
            }}
          />
        ) : userInfo.access_token ? (
          <Stack.Screen
            name="Улаанбаатар хотын хөтөч"
            component={HomeScreen}
            options={{
              headerStyle: {backgroundColor: '#DB4646'},
              headerTintColor: '#ffffff',
            }}
          />
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{headerShown: false}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
