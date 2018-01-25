import React from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FormLabel, FormInput, Card, ListItem, Button } from 'react-native-elements';
import SignUpForm from '../components/SignUpForm';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <SignUpForm/>
    )
  }
}
