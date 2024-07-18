export const data = ['INR', 'GBP', 'NZD', 'AUD', 'JPY', 'USD'];

export const getImagePath = (courrency = 'INR') => {
  switch (courrency) {
    case 'INR':
      return require('../assets/images/india.png');
    case 'AUD':
      return require('../assets/images/australia.png');
    case 'GBP':
      return require('../assets/images/united_kingdom.png');
    case 'JPY':
      return require('../assets/images/japan.png');
    case 'NZD':
      return require('../assets/images/new_zealand.png');
    case 'USD':
      return require('../assets/images/united_states.png');
    default:
      return require('../assets/images/india.png');
  }
};

export const getCurrencySymbol = (currency = 'INR') => {
  switch (currency) {
    case 'INR':
      return '\u20A8';
    case 'AUD':
      return 'A\u0024';
    case 'GBP':
      return '\u00A3';
    case 'JPY':
      return '\u00A5';
    case 'NZD':
      return 'NZ\u0024';
    case 'USD':
      return '\u0024';
  }
};

export const provideCurrencyText = (currency = 'INR') => {
  switch (currency) {
    case 'INR':
      return 'Indian Ruppees';
    case 'AUD':
      return 'Australlian Dollar';
    case 'GBP':
      return 'UK Pound';
    case 'JPY':
      return 'Japaneese';
    case 'NZD':
      return 'NZ Dollar';
    case 'USD':
      return 'US Dollar';
    default:
      return 'Indian Ruppees';
  }
};
