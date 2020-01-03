import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Navigation from './src/navigation/navigation';

const fetchFonts = () => {
  return Font.loadAsync({
    'muli': require('./assets/fonts/Muli-Regular.ttf'),
    'ovo': require('./assets/fonts/Ovo-Regular.ttf')
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (<Navigation />);
}

