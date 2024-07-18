import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'lightgreen',
    borderRadius: 10,
    height: 80,
    marginHorizontal: 20,
    marginVertical: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  currencyText: {color: 'white', fontSize: 20},
  currencyAmount: {
    color: 'white',
    fontSize: 20,
  },
});

export default style;
