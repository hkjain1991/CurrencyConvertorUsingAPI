import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 10,
    height: 60,
    borderColor: 'green',
    borderWidth: 2,
    marginHorizontal: 20,
    marginVertical: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  currencyAmount: {
    color: 'black',
    fontSize: 20,
  },
  currencyImg: {height: '100%', width: 50},
});

export default style;
