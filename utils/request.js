import 'whatwg-fetch';
import {AsyncStorage} from 'react-native';

import { API_URL } from '../config.js';

const checkStatus = async (response) => {
  if (response.status >= 400 ) {
    throw await response.json();
  }
  return await response.json();
}


export default request = async (url, options = {}) => {
  const resultUrl = 
    options.getParamsObject && !options.method
      ? `${url}?${Object.keys(options.getParamsObject)
          .filter(
            paramName =>
              options.getParamsObject[paramName] &&
              options.getParamsObject[paramName] != null,
          )
          .map(
            paramName => `${paramName}=${options.getParamsObject[paramName]}`,
          )
          .join('&')}`
      : url;
  const customOptions = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'Authorization':  'JWT' + ' ' + await AsyncStorage.getItem('@USER_TOKEN'),
      Accept: '*/*',
      ...(options.headers || {}),
    },
  };
   const response = await fetch(`${API_URL}${resultUrl}`, customOptions);
   return await checkStatus(response);
}
