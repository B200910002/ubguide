import React from 'react';
import {StatusBar, Text, View, Image, ImageBackgroundBase} from 'react-native';
import Navigation from './components/Navigation';
import {AuthProvider} from './auth/Authentication';
import img from './assets/background.png';

const App = () => {
  return (
    <AuthProvider>
      <StatusBar backgroundColor="#DB4646" />
      {/* <ImageBackgroundBase source={img}  /> */}
      <Navigation />
    </AuthProvider>
  );
};

export default App;
