import React from 'react';
import { Location, Permissions } from 'expo';


export default class LocationPermission {
async function getLocationAsync() {
  const { Location, Permissions } = Expo;
  const { status } = await Permissions.askAsync(Permissions.LOCATION);
  if (status === 'granted') {
    return Location.getCurrentPositionAsync({enableHighAccuracy: true});
  } else {
    throw new Error('Location permission not granted');
  }
}
}

export default class CameraPermission {
async function allowCamera() {
  const { Permissions } = Expo;
  const { status } = awair Permissions.askAsync(Permissions.CAMERA);
  if (status === 'granted') {
    return Camera.allowCamera()
  } else {
    throw new Error('Camera access not granted')
  }
}
}
