import { StyleSheet, Dimensions } from 'react-native';
import fontWeight from 'utils/fontWeight';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'rgb(226, 80, 87)',
    width,
  },
  viewFlex: {
    flex: 1,
    flexDirection: 'row',
  },
  viewFlexThree: {
    flex: 3,
  },
  viewFlexNine: {
    flex: 9,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: fontWeight.heavy,
    textAlign: 'center',
  },
  viewNextButton: {
    width,
    height: 45,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: 20,
  },
  buttonNext: {
    width: 65,
    height: 45,
    justifyContent: 'flex-end',
  },
  containView: {
    height: 100,
  },
  placeHolder: {
    height: 30,
  },
  emailStyle: {
    fontSize: 14,
    fontWeight: fontWeight.heavy,
    padding: 10,
    color: 'white',
  },
  bottomView: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    height: 40,
    padding: 10,
    fontSize: 22,
    color: 'white',
    fontWeight: fontWeight.light,
  },
  clearButton: {
    width: 30,
    height: 40,
    justifyContent: 'center',
    marginTop: 5,
  },
  forgotPasswordText: {
    color: 'white',
    fontSize: 16,
    fontWeight: fontWeight.regular,
    padding: 10,
  },
  activityIndicator: {
    marginTop: 10,
    height: 80,
    width,
  },
});
