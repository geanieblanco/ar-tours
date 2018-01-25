import React from 'react';
import {ScrollView, StyleSheet, Text } from 'react-native';
import { WebBrowser, MapView, Constants, Location, Permissions } from 'expo';
import { Card } from 'react-native-elements';
import MapViewer from '../components/Map';

export default class MapScreen extends React.Component {
  render() {
    return (
      <MapViewer/>
    );
  }
}
