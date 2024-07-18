import React from 'react';
import {Image, Text, View} from 'react-native';
import style from './style';
import {getCurrencySymbol, provideCurrencyText} from '../../common/helper';

const CurrencyItem = props => {
  return (
    <View style={style.mainViewContainer}>
      <Text style={style.currencyText}>
        {provideCurrencyText(props.currency)}
      </Text>
      <Text style={style.currencyAmount}>
        {`${getCurrencySymbol(props.currency)} ${props.amount}`}
      </Text>
    </View>
  );
};

export default CurrencyItem;
