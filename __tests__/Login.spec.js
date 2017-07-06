// __tests__/Login-test.js // this is another file convention
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
// import { mount, shallow } from 'enzyme';
// import mockStore from 'redux-mock-store';
import { Login } from '../src/modules/login/screen/Login';

/* using import renderer from 'react-test-renderer'; */

it('renders correctly', () => {
  const tree = renderer.create(
    <Login />,
    ).toJSON();
  expect(tree).toMatchSnapshot();
});

/* using import { shallow } from 'enzyme'; */

// describe('Testing Login component', () => {
//   it('renders as expected', () => {
//     const wrapper = shallow(
//       <Login isFromForgotPassword={true} />
//     );
//     // console.log(wrapper.instance().props);
//     // expect(wrapper).toMatchSnapshot();
//     // wrapper.setProps({ isLoading: false });
//     // console.log(wrapper.instance().props);
//     // expect(wrapper).toMatchSnapshot();
//     // wrapper.setProps({ isFromForgotPassword: false });
//     // console.log(wrapper.instance().props);
//     // expect(wrapper).toMatchSnapshot();
//     //wrapper.setProps({ isFromForgotPassword: true });
//     console.log('==========', wrapper.instance().props);
//     expect(wrapper).toMatchSnapshot();
//   });
// });

/* using import mockStore from 'redux-mock-store'; */

// const initialState = {
//   lookupEmailResponse: {
//     status: 200,
//   },
//   isLoading: false,
//   isLoginSuccess: true,
// };

// describe('Testing Login component', () => {
//   it('renders as expected', () => {
//     const wrapper = shallow(
//       <Login />,
//       { context: { store: mockStore(initialState) } },
//     );
//     expect(wrapper.dive()).toMatchSnapshot();
//   });
// });

// describe('Testing Login component', () => {
//   it('Testing Login component updates', () => {
//   const component = mount(
//       <Login />
//     );
//     // console.log(wrapper.instance().props);
//     // expect(wrapper).toMatchSnapshot();
//     // wrapper.setProps({ isLoading: false });
//     // console.log(wrapper.instance().props);
//     // expect(wrapper).toMatchSnapshot();
//     // wrapper.setProps({ isFromForgotPassword: false });
//     // console.log(wrapper.instance().props);
//     // expect(wrapper).toMatchSnapshot();
//     //wrapper.setProps({ isFromForgotPassword: true });
//     console.log('==========', component);
//     //expect(wrapper).toMatchSnapshot();
//   });
// });
