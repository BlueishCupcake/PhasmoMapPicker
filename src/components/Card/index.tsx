import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Swiper from 'react-native-swiper';
import {mapsList} from '../../helpers/maps';

import * as Styled from './styles';

const Card: React.FC = () => {
  const [play, setPlay] = useState(false);
  const [buttonText, setButtonText] = useState('Start');

  const startRoulete = () => {
    if (play) {
      setTimeout(() => {
        setPlay(false);
      }, 1000);
    } else {
      setMaps(maps.sort(() => 0.5 - Math.random()));
      setPlay(true);
      setButtonText('Stop');
    }
  };

  const [maps, setMaps] = useState(mapsList);

  return (
    <>
      <View>
        <Swiper
          autoplay={play}
          loop
          showsPagination={false}
          autoplayTimeout={0.3}>
          {maps.map(map => {
            return (
              <React.Fragment key={map.name}>
                <Styled.CardBody source={map.image} resizeMode="cover" />

                <Styled.MapName>{map.name}</Styled.MapName>
              </React.Fragment>
            );
          })}
        </Swiper>
      </View>
      <Styled.Button onPress={() => startRoulete()}>
        <Text style={{color: '#494587', fontSize: 18}}>{buttonText}</Text>
      </Styled.Button>
    </>
  );
};

export default Card;
