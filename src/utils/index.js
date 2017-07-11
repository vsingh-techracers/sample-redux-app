/* eslint no-param-reassign: 0 */
/* usage */
// import { saveToLocalStorage } from 'src/utils';

import { AsyncStorage } from 'react-native';
import moment from 'moment';

export const moveFirstToLast = (array) => {
  const first = array.shift();
  array[array.length] = first;
  return array;
};

/**
 * Saves value to the local storage identifying it with token
 * @param {String} key
 * @param {String} value
 */
export const saveToLocalStorage = async (key, value) => {
  if (typeof value === 'number') {
    value = String(value);
  } else if (typeof value === 'object') {
    value = JSON.stringify(value);
  }

  try {
    await AsyncStorage.setItem(key, value);
    console.log(`Saved ${key}`, value);
  } catch (error) {
    console.warn(`Couldn't save ${key} of value ${value}`, error);
  }
};

/**
 * Dynamically get a concatenated list of urlencoded parameters as an URL
 * @param {Object} params
 * @return {String}
 */
export const formatToUrlEncoded = params =>
  Object.keys(params).map(key =>
    `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`,
  ).join('&');

export const getMonthList = () =>
  moment.months();

export const getCurrentMonth = () =>
  getMonthList()[moment().months()];
