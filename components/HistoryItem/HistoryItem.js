import React from 'react';
import {View, Text, Image} from 'react-native';
import style from './style';
import {getCurrencySymbol, getImagePath} from '../../common/helper';

const HistoryItem = props => {
  return (
    <View style={style.mainViewContainer}>
      <Text style={style.currencyAmount}>
        {`${getCurrencySymbol(props.currency)} ${props.amount}`}
      </Text>
      <Image
        source={getImagePath(props.currency)}
        style={style.currencyImg}
        resizeMode="contain"
      />
    </View>
  );
};

export default HistoryItem;
