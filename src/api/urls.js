/**
* @providesModule src/api/urls
*/

import {
  getBaseUrl,
} from '../config/appConfig';

export const loginUrl = `${getBaseUrl()}/token`;

