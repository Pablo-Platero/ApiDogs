import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './src/navigation/DrawerNavigation';
import "react-native-gesture-handler";


const App = () => {
  return (
    <NavigationContainer>
   <DrawerNavigation></DrawerNavigation>
    </NavigationContainer>
  );
};

export default App;