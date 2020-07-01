import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Searchscreen from './src/screens/Searchscreen'

const navigator= createStackNavigator(

  {
    Search: Searchscreen
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions:{
      title: 'Search'
    }
  }
)

export default createAppContainer(navigator); 

