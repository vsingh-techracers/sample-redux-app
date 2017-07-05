/**
* @providesModule utils/authPrefix
*/

import base64 from 'base-64';

export const stringToBase64 = ((str) => {
  const encodedString = `Basic ${base64.encode(str)}`;
  return encodedString;
});

export const stringToBearer = ((str) => {
  const encodedString = `Bearer ${str}`;
  return encodedString;
});
