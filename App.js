import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Searchscreen from './src/screens/Searchscreen'
import Resultscreen from './src/screens/Resultscreen'

const navigator= createStackNavigator(

  {
    Search: Searchscreen,
    Result: Resultscreen
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions:{
      title: 'Search'
    }
  }
)

export default createAppContainer(navigator); 

