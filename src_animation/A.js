import React from 'react';
import LottieView from 'lottie-react-native';

export default function Animation() {
  return (
    <LottieView source={require('../assets/homeLottiesAnimation.json')} autoPlay loop style={{width: 300, height: 300}} />
  );
}