/* eslint class-methods-use-this: 0 */
import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StatusBar,
  Alert,
  ActivityIndicator,
  Keyboard,
} from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import loginActions from 'login/actions';
// import { BaseStyle } from 'src/styles';
import { styles as loginStyles } from '../styles/LoginStyles';

console.ignoredYellowBox = ['Warning: View.propTypes'];

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'xyz@abc.com',
      password: '123456789',
      isLoginSuccess: false,
    };
  }

  componentWillMount() {
    Keyboard.dismiss();
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.isLoginSuccess && !this.state.isLoginSuccess && !nextProps.isLoading) {
      this.setState({ isLoginSuccess: true });
      Alert.alert(
      'Error!',
      'There was a problem in handling your process. Please try again later',
        [
          { text: 'OK' },
        ],
        { cancelable: false },
      );
    }
  }

  clearText() {
    this.setState({
      email: '',
    });
  }

  loginRequest() {
    this.setState({ isLoginSuccess: false });
    this.props.loginRequest(this.state.email, this.state.password);
  }

  render() {
    const activeText = this.state.email === '' ? 0.5 : 1;
    return (
      <View style={loginStyles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <View style={loginStyles.container}>
          <View style={loginStyles.viewFlex}>
            <View style={loginStyles.viewNextButton}>
              <TouchableOpacity
                style={loginStyles.buttonNext}
                onPress={() => this.loginRequest()}
              >
                <Text style={[loginStyles.buttonText, { opacity: activeText }]}>{'Next'}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={loginStyles.viewFlexThree}>
            <View style={loginStyles.viewFlexThree}>
              <View style={loginStyles.containView}>
                <View style={loginStyles.placeHolder}>
                  <Text style={loginStyles.emailStyle}>E-mail Address</Text>
                </View>
                <View style={loginStyles.bottomView}>
                  <View style={loginStyles.viewFlexNine}>
                    <TextInput
                      style={loginStyles.textInput}
                      onChangeText={email => this.setState({ email })}
                      placeholder={'Email Address'}
                      keyboardType={'email-address'}
                      placeholderTextColor={'#7F7F7F'}
                      autoFocus={Boolean(true)}
                      value={this.state.email}
                    />
                  </View>
                  {
                    this.state.email ?
                      <View style={loginStyles.viewFlex}>
                        <TouchableOpacity
                          style={loginStyles.clearButton}
                          onPress={() => this.clearText()}
                        >
                          <Text style={loginStyles.buttonText}>{'X'}</Text>
                        </TouchableOpacity>
                      </View>
                    : <View style={loginStyles.viewFlex} />
                  }
                </View>
                {
                  this.props.isLoading ?
                    <ActivityIndicator
                      color={'#bc2b78'}
                      size={'large'}
                      style={loginStyles.activityIndicator}
                    /> : null
                }
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

Login.propTypes = {
  loginRequest: PropTypes.func,
  isLoading: PropTypes.bool,
  isLoginSuccess: PropTypes.bool,
  loginResponse: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.any),
    PropTypes.objectOf(PropTypes.any),
  ]),
};

Login.defaultProps = {
  loginRequest: _.noop,
  loginResponse: [],
  isLoading: false,
  isLoginSuccess: false,
};

const mapStateToProps = state => ({
  loginResponse: state.loginReducer.loginResponse,
  isLoading: state.loginReducer.isLoading,
  isLoginSuccess: state.loginReducer.isLoginSuccess,
});

const mapDispatchToProps = () => loginActions;

const loginScreen = connect(mapStateToProps, mapDispatchToProps)(Login);

export default loginScreen;

