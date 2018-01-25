import React from 'react';
import {ScrollView, StyleSheet, Text, View, Platform } from 'react-native';
import { WebBrowser, MapView, Constants, Location, Permissions } from 'expo';
import { Card, Container } from 'react-native-elements';
import App from './MapBox';
// import Locator from './Locator';

export default class MapViewer extends React.Component {

  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  }
});
