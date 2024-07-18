import {openDatabase, enablePromise} from 'react-native-sqlite-storage';

enablePromise(true);

const tableName = 'currencyhistory';
const fieldCurrency = 'currency';
const fieldamount = 'amount';

export const getDbOpenConnection = async () => {
  return openDatabase(
    {name: 'currency-convertor.db', location: 'default'},
    () => {},
    error => {
      console.error(error);
    },
  );
};

export const createTable = async db => {
  const query = `CREATE TABLE IF NOT EXISTS ${tableName} (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  ${fieldCurrency} TEXT NOT NULL,
    ${fieldamount} NUMERIC NOT NULL
   )`;
  try {
    db.executeSql(query);
  } catch (error) {
    console.log(`got error while create table ${error}`);
  }
};

export const insertDataIntoTable = async (db, currency, amount) => {
  const query = `INSERT INTO ${tableName} (${fieldCurrency}, ${fieldamount}) VALUES (?,?)`;
  const values = [currency.toString(), amount];
  try {
    db.executeSql(query, values);
  } catch (error) {
    console.log(`got error while insert table ${error}`);
  }
};

export const getCurrencyHistory = async db => {
  const currencies = [];
  const results = await db.executeSql(
    `Select ${fieldCurrency},${fieldamount} from ${tableName}`,
  );
  results.forEach(element => {
    for (let i = 0; i < element.rows.length; i++) {
      let object = element.rows.item(i);
      currencies.push(object);
    }
  });
  return currencies;
};
