import React, {useState} from 'react';
import Swiper from 'react-native-swiper';

import * as Styled from './styles';

const Card: React.FC = () => {
  const [stop, setStop] = useState(5);

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
    <Swiper
      style={{}}
      autoplay
      loop
      showsPagination={false}
      autoplayTimeout={0.5}>
      {maps.map((map, key) => {
        return (
          <Styled.CardBody key={key}>
            <Styled.MapName>{map}</Styled.MapName>
          </Styled.CardBody>
        );
      })}
    </Swiper>
  );
};

export default Card;
