import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import TourCard from '../components/TourCard';

export default class ToursScreen extends React.Component {
  static navigationOptions = {
    title: 'Tours'
  };

  render() {
    return (<TourCard/>);
  }
}
