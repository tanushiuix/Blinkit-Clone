/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView, View} from 'react-native';
import Slider from './src/components/Slider';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <View>
        <Slider />
      </View>
    </SafeAreaView>
  );
}

export default App;
