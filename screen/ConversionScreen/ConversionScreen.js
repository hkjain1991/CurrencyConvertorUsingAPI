import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import style from './style';
import SelectDropdown from 'react-native-select-dropdown';
import CurrencyItem from '../../components/CurrencyItem/CurrencyItem';
import {data, getCurrencySymbol, getImagePath} from '../../common/helper';
import {
  createTable,
  getDbOpenConnection,
  insertDataIntoTable,
} from '../../database/sqllite/DbService';

const ConversionScreen = () => {
  const [currency, setCurrency] = useState(data[0]);
  const [amount, setAmount] = useState();
  const [result, setResult] = useState();
  const [btnDisabled, setBthDisabled] = useState(true);
  const [loadingVisible, setLoadingVisible] = useState(false);
  const input = useRef(null);

  const loadData = useCallback(async () => {
    try {
      const db = await getDbOpenConnection();
      await createTable(db);
    } catch (error) {
      console.log(`In load data error: ${error}`);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  function convertAmount() {
    input.current.blur();
    setLoadingVisible(true);
    const host = 'api.frankfurter.app';
    var remaincurrency = '';
    for (var curr of data) {
      if (curr !== currency) {
        remaincurrency += curr;
        remaincurrency += ',';
      }
    }
    console.log(remaincurrency);
    try {
      let request = `https://${host}/latest?amount=${amount}&from=${currency}&to=${remaincurrency}`;
      fetch(request)
        .then(resp => {
          console.log(resp);
          if (resp.status === 200) {
            return resp.json();
          } else {
            Alert.alert('Something went wrong while calling api');
          }
        })
        .then(dataRates => {
          if (dataRates !== undefined) {
            saveDataInDb();
            setLoadingVisible(false);
            setResult(Object.entries(dataRates.rates));
          }
        });
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingVisible(false);
    }
  }

  const saveDataInDb = async () => {
    const db = await getDbOpenConnection();
    await insertDataIntoTable(db, currency, amount);
  };

  return (
    <SafeAreaView style={style.MainViewContainer}>
      <View style={style.CurrencyInputRow}>
        <Text style={style.currencySymbolText}>
          {getCurrencySymbol(currency)}
        </Text>
        <TextInput
          ref={input}
          value={amount}
          onChangeText={value => {
            setAmount(value);
            setBthDisabled(value.length === 0);
          }}
          inputMode="numeric"
          style={style.CurrencyInput}
          cursorColor="black"
          placeholder="Enter Amount"
          placeholderTextColor="black"
        />
        <SelectDropdown
          data={data}
          onSelect={(selectedItem, index) => {
            setCurrency(selectedItem);
          }}
          renderButton={(selectedItem, isOpened) => {
            return (
              <View style={style.dropdownButtonStyle}>
                <Image
                  source={getImagePath(selectedItem)}
                  style={style.currencyImg}
                  resizeMode="contain"
                />
                <Image
                  source={
                    isOpened
                      ? require('../../assets/images/arrow_down.png')
                      : require('../../assets/images/arrow_up.png')
                  }
                  style={style.chevromImg}
                  resizeMode="contain"
                />
              </View>
            );
          }}
          renderItem={(item, index, isSelected) => {
            return (
              <View
                style={[
                  style.dropdownItemStyle,
                  isSelected && style.dropdownRenderItemBackgroundColor,
                ]}>
                <Image
                  source={getImagePath(item)}
                  style={style.currencyItemImg}
                  resizeMode="contain"
                />
              </View>
            );
          }}
          showsVerticalScrollIndicator={false}
          dropdownStyle={style.dropdownMenuStyle}
          defaultValueByIndex={0}
        />
      </View>
      <TouchableOpacity
        disabled={btnDisabled}
        onPress={() => convertAmount()}
        style={[style.convertOpacity, btnDisabled && style.convertImgOpacity]}>
        <Text style={style.convertBtn}>Convert</Text>
      </TouchableOpacity>
      {!loadingVisible ? (
        <FlatList
          data={result}
          renderItem={({item}) => (
            <CurrencyItem currency={item[0]} amount={item[1]} />
          )}
        />
      ) : (
        <View style={style.ActivityIndicator}>
          <ActivityIndicator size="500" color="#00ff00" />
        </View>
      )}
    </SafeAreaView>
  );
};

export default ConversionScreen;
