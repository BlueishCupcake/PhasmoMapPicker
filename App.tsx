/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {View} from 'react-native';
import * as Styled from './styles';

import Card from './src/components/Card';

const App = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        backgroundColor: '#104547',
      }}>
      <Styled.MainBody>
        <Card />
      </Styled.MainBody>
    </View>
  );
};

export default App;
