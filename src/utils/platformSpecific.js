/**
* @providesModule utils/platformSpecific
*/

import { Platform } from 'react-native';

export const NavBarMargin = Platform.OS === 'ios' ? 44 : 44;
export const StatusBarHeight = Platform.OS === 'ios' ? 20 : 0;
