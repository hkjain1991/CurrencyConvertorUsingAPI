import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import HistoryItem from '../../components/HistoryItem/HistoryItem';
import {
  getCurrencyHistory,
  getDbOpenConnection,
} from '../../database/sqllite/DbService';
import style from './style';

const HistoryScreen = () => {
  const [currencyhistory, setcurrencyhistory] = useState([]);
  const getDatafromDB = async () => {
    const db = await getDbOpenConnection();
    return await getCurrencyHistory(db);
  };

  useEffect(() => {
    getDatafromDB().then(res => {
      setcurrencyhistory(res);
    });
  }, []);

  return (
    <SafeAreaView style={style.mainViewContainer}>
      <FlatList
        data={currencyhistory}
        renderItem={({item}) => {
          return <HistoryItem currency={item.currency} amount={item.amount} />;
        }}
      />
    </SafeAreaView>
  );
};

export default HistoryScreen;
