// __tests__/Login-test.js // this is another file convention

import 'react-native';
import React from 'react';
// import mockStore from 'redux-mock-store';
import { shallow, render } from 'enzyme';
import { Login } from '../src/modules/login/screen/Login';

describe('Testing Login component', () => {
  it('Shallow Rendering', () => {
    const wrapper = shallow(
      <Login isFromForgotPassword={Boolean(true)} />,
    );

    // console.log('Shallow Rendering => ', wrapper.instance());
    console.log('Shallow Rendering 2 => ', wrapper.find('clearText').dive());

    console.log('Shallow Rendering => props =>', wrapper.instance().props);
    console.log('Shallow Rendering => state =>', wrapper.instance().state);
    console.log('Shallow Rendering => props => isLoading', wrapper.instance().props.isLoading);
    console.log('Shallow Rendering => props => email', wrapper.instance().state.email);

    /* create snapshot */
    expect(wrapper).toMatchSnapshot();

    /* Change and test value of props */
    wrapper.setProps({ isLoading: false });
    expect(wrapper.instance().props.isLoading).toEqual(false);

    /* Change and test value of state */
    wrapper.instance().setState({ email: 'abc.com' });
    expect(wrapper.state('email')).toBe('abc.com');
  });

  // it('Full Rendering', () => {
  //   const wrapper = mount(
  //     <Login />,
  //   );
  //   console.log('Full Rendering => ', wrapper);
  //   expect(wrapper).toMatchSnapshot();
  // });

  it('Static Rendering', () => {
    const wrapper = render(
      <Login isFromForgotPassword={Boolean(true)} />,
    );
    console.log('Static Rendering => ', wrapper);
    expect(wrapper).toMatchSnapshot();
  });
});

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


// it('Shallow Rendering', () => {
//     const wrapper = shallow(
//       <Login isFromForgotPassword={true} />
//     );
//     console.log(wrapper.instance().props);
//     // expect(wrapper).toMatchSnapshot();
//     wrapper.setProps({ isLoading: false });
//     console.log('============2323', wrapper.instance().props.isLoading);
//     expect(wrapper.instance().props.isLoading).toEqual(false);
//     // console.log(wrapper.instance().props);
//     // expect(wrapper).toMatchSnapshot();
//     // wrapper.setProps({ isFromForgotPassword: false });
//     // console.log(wrapper.instance().props);
//     // expect(wrapper).toMatchSnapshot();
//     //wrapper.setProps({ isFromForgotPassword: true });
//     console.log('==========', wrapper.instance().props);
//     //expect(wrapper).toMatchSnapshot();
//   });



