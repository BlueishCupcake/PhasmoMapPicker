import React from 'react';
import {ScrollView, Text, View} from 'react-native';

import * as Styled from './styles';

const Card: React.FC = () => {
  var maps = [
    'Bleasdale Farmhouse',
    'Edgefield Street House',
    'Grafton Farmhouse',
    'Ridgeview Road House',
    'Tanglewood Street House',
    'Willow Street House',
    'Brownstone High School',
    'Maple Lodge Campsite',
    'Prison',
    'Asylum',
  ];

  return (
    <ScrollView>
      {maps.map((map, key) => {
        return (
          <Styled.CardBody key={key}>
            <Styled.MapName>{map}</Styled.MapName>
          </Styled.CardBody>
        );
      })}
    </ScrollView>
  );
};

export default Card;
