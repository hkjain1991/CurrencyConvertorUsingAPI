import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  CurrencyInputRow: {
    flexDirection: 'row',
    height: 50,
    marginHorizontal: 20,
    marginVertical: 20,
    borderColor: 'green',
    borderWidth: 2,
    borderRadius: 10,
    alignItems: 'center',
  },
  MainViewContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  CurrencyInput: {flex: 1, color: 'black', paddingHorizontal: 5},
  dropdownButtonStyle: {
    width: 70,
    backgroundColor: '#E9ECEF',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: '#E9ECEF',
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  convertBtn: {
    color: 'black',
    textAlign: 'center',
    fontSize: 25,
  },
  convertOpacity: {
    borderColor: 'green',
    borderRadius: 10,
    borderWidth: 5,
    marginHorizontal: 50,
    height: 50,
    justifyContent: 'center',
    backgroundColor: 'green',
  },
  currencyImg: {height: 35, width: 50},
  chevromImg: {height: 15, width: 15},
  currencyItemImg: {height: 50, width: 50},
  convertImgOpacity: {opacity: 0.5},
  currencySymbolText: {color: 'green', marginStart: 10},
  ActivityIndicator: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  dropdownRenderItemBackgroundColor: {backgroundColor: '#D2D9DF'},
});

export default style;
