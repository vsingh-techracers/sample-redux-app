/**
 * Sample React Native Snapshot Test
 */

/* Jest tutorial links  */
// https://facebook.github.io/jest/docs/getting-started.html#content

/* api reference */
// https://facebook.github.io/jest/docs/configuration.html

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
// import { mount, shallow, render } from 'enzyme';
import Intro from '../Intro';

/* Class with render function */
// it('renders correctly', () => {
//   const tree = renderer.create(
//     <Intro />,
//   ).toJSON();
//   expect(tree).toMatchSnapshot();
// });

/* General test */
/* Start=============================================================== */
// test('two plus two is four', () => {
//   expect(2 + 2).toBe(4);
// });

// test('object assignment', () => {
//   const data = {one: 1};
//   data['two'] = 2;
// console.log(data);
//   expect(data).toEqual({one: 1, two: 2});
// });

/* opposite of a matcher */
// test('adding positive numbers is not zero', () => {
//   for (let a = 1; a < 10; a++) {
//     for (let b = 1; b < 10; b++) {
//       expect(a + b).not.toBe(0);
//     }
//   }
// });


/* Numbers */
// test('adding floating point numbers', () => {
//   const value = 0.1 + 0.2;
//   expect(value).not.toBe(0.3);    // It isn't! Because rounding error
//   expect(value).toBeCloseTo(0.3); // This works.
// });

/* Strings */
// test('there is no I in team', () => {
//   expect('team').not.toMatch(/I/);
// });

// test('but there is a "stop" in Christoph', () => {
//   expect('Christoph').toMatch(/stop/);
// });


/* Arrays */
// const shoppingList = [
//   'diapers',
//   'kleenex', 
//   'trash bags', 
//   'paper towels', 
//   'beer',
// ];

// test('the shopping list has beer on it', () => {
//   expect(shoppingList).toContain('beer');
// });


/* Exception */
// function compileAndroidCode() {
//   throw new ConfigError('you are using the wrong JDK');
// }

// test('compiling android goes as expected', () => {
//   expect(compileAndroidCode).toThrow();
//   expect(compileAndroidCode).toThrow(ConfigError);

//   // You can also use the exact error message or a regexp
//   expect(compileAndroidCode).toThrow('you are using the wrong JDK');
//   expect(compileAndroidCode).toThrow(/JDK/);
// });

/* General test */
/* Stop=============================================================== */



// it('renders correctly', () => {
//   const wrapper = shallow(<Intro />);
//     expect(wrapper).toMatchSnapshot();
// });

// // These serve as integration tests for the jest-react-native preset.
// it('renders the ActivityIndicator component', () => {
//   const ActivityIndicator = require('ActivityIndicator');
//   const tree = renderer
//     .create(<ActivityIndicator animating={true} size="small" />)
//     .toJSON();
//   expect(tree).toMatchSnapshot();
// });

// it('renders the Image component', done => {
//   const Image = require('Image');
//   Image.getSize('path.jpg', (width, height) => {
//     const tree = renderer.create(<Image style={{height, width}} />).toJSON();
//     expect(tree).toMatchSnapshot();
//     done();
//   });
// });

// it('renders the TextInput component', () => {
//   const TextInput = require('TextInput');
//   const tree = renderer
//     .create(<TextInput autoCorrect={false} value="apple banana kiwi" />)
//     .toJSON();
//   expect(tree).toMatchSnapshot();
// });

// it('renders the ListView component', () => {
//   const ListView = require('ListView');
//   const Text = require('Text');
//   const dataSource = new ListView.DataSource({
//     rowHasChanged: (r1, r2) => r1 !== r2,
//   }).cloneWithRows(['apple', 'banana', 'kiwi']);
//   const tree = renderer
//     .create(
//       <ListView
//         dataSource={dataSource}
//         renderRow={rowData => <Text>{rowData}</Text>}
//       />
//     )
//     .toJSON();
//   expect(tree).toMatchSnapshot();
// });

/* Testing Asynchronous Code */
/* Start=============================================================== */
// /* Callbacks */
// test('the data is Callbacks', (done) => {
//   function callback(data) {
//     console.log('expected data', data);
//     expect(data).toBe('Callbacks');
//     done();
//   }
//   fetchData(callback);
// });

// function fetchData(callback) {
//   callback('Callbacks');
// }

// /* Promises */
// test('the data is Promises', async () => {
//   expect.assertions(1);
//   return fetchData(false).then((data) => {
//     console.log('expected data is Promises', data);
//     expect(data).toBe('Promises');
//   }).catch((error) => {
//     console.log('expected data is Error', error);
//     expect(error).toMatch('Error');
//   });
// });

// function fetchData (isPromiseResolve) {
//   if (isPromiseResolve) {
//     return Promise.resolve('Promises');
//   }
//   return Promise.reject('Error');
// }

// /* .resolves / .rejects */
// test('the data is Promises', () => {
//   expect.assertions(1);
//   return expect(fetchData(true))
//       .resolves.toBe('Promises');
// });

// function fetchData (isPromiseResolve) {
//   if (isPromiseResolve) {
//     return Promise.resolve('Promises');
//   }
//   return Promise.reject('Error');
// }


/* Async/Await */
// test('the data is PATA NAHI', async () => {
//   expect.assertions(1);
//   const data = await fetchData(true);
//   console.log('expected data DEKH LO', data);
//   expect(data).toBe('PATA NAHI');
// });

// function fetchData (isPromiseResolve) {
//   if (isPromiseResolve) {
//     return 'PATA NAHI';
//   }
//   return 'KUCH TO GADBAD HAI';
// }

// test('the fetch fails with an error KUCH TO GADBAD HAI', async () => {
//   expect.assertions(1);
//   try {
//     const data = await fetchData(false);
//     console.log('expected data DEKH LO', data);
//     expect(data).toBe('PATA NAHI');
//   } catch (e) {
//     console.log('expected data DEKH LO', e);
//     expect(e).toMatch('KUCH TO GADBAD HAI');
//   }
// });

// function fetchData (isPromiseResolve) {
//   if (isPromiseResolve) {
//     return Promise.resolve('PATA NAHI');
//   }
//   return Promise.reject('KUCH TO GADBAD HAI');
// }

/* can combine async and await with .resolves or .rejects */
/* Start */
// test('the data is PATA NAHI', async () => {
//   expect.assertions(1);
//   await expect(fetchData(true)).resolves.toBe('PATA NAHI');
// });

// test('the fetch fails with an error KUCH TO GADBAD HAI', async () => {
//   expect.assertions(1);
//   await expect(fetchData(false)).rejects.toMatch('KUCH TO GADBAD HAI');
// });

// function fetchData (isPromiseResolve) {
//   if (isPromiseResolve) {
//     return Promise.resolve('PATA NAHI');
//   }
//   return Promise.reject('KUCH TO GADBAD HAI');
// }

/* Testing Asynchronous Code */
/* Stop=============================================================== */


// /* Mocking */
/* Start=============================================================== */

/* module  mocking */
// it('Test module mocking', () => {
//   jest.mock('../src/modules/login/screen/Login', () => {
//     return jest.fn(() => 42);
//   });
//   const moduleName = require('../src/modules/login/screen/Login');
//   console.log('Module mocking', moduleName());
// });

// /* function  mocking */
describe('Testing function  mocking', () => {

  // it('Basic mock function testing', () => {
  //   const myMock = jest.fn();
  //   console.log('Basic mock function testing 1 => ', myMock());
  //   console.log('Basic mock function testing 2 => ', myMock.mock);
  //   console.log('Basic mock function testing 3 => ', myMock.mock.calls);
  //   console.log('Basic mock function testing 4 => ', myMock.mock.instances);
  // });

  // it('myMock.mock.calls testing', () => {
  //   console.log('myMock.mock.calls testing 0 => ', myMock);
  //   // const myMock = jest.fn();
  //   const myMock = jest.fn((name) => {
  //      return `hello ${name}`;
  //   });
  //   // console.log('myMock.mock.calls testing 1 => ', myMock);
  //   myMock('Me'); // call 1
  //   // console.log('myMock.mock.calls testing 1.0 => ', myMock('Me'));
  //   myMock('you'); // call 2
  //   myMock(); // call 3
  //   myMock(); // call 4
  //   myMock(); // call 5
  //   console.log('myMock.mock.calls testing 1.1 => ', myMock.mock);
  //   console.log('myMock.mock.calls testing 1.2 => ', myMock.mock.calls);
  //   console.log('myMock.mock.calls testing 1.3 => ', myMock.mock.calls[0]);
  //   myMock('a', 'b');
  //   console.log('myMock.mock.calls testing 3 => ', myMock.mock);
  //   console.log('myMock.mock.calls testing 3.1 => ', myMock.mock.calls);
  //   console.log('myMock.mock.calls testing 3.2 => ', myMock.mock.calls.length);
  // });

  // it('myMock.mock.instances testing', () => {
  //   const myMock = jest.fn((name) => {
  //     return `hello ${name}`;
  //   });
  //   const a = new myMock();
  //   const b = new myMock();
  //   const c = new myMock('Vinay');
  //   console.log('myMock.mock.instances testing 1 => ', myMock.mock);
  //   console.log('myMock.mock.instances testing 1.1 => ', myMock.mock.instances);
  //   console.log('myMock.mock.instances testing 1.2 => ', myMock.mock.instances[0] === a);
  //   console.log('myMock.mock.instances testing 1.3 => ', myMock.mock.instances[0] === b);
  //   console.log('myMock.mock.instances testing 1.4 => ', c);
  // });

  // it('mockFn.mockClear() testing', () => {
  //   const myMock = jest.fn();
  //   myMock('1');
  //   myMock('a', 'b');
  //   const a = new myMock('Me');
  //   const b = new myMock('You');
  //   const c = new myMock();
  //   const d = new myMock();
  //   console.log('mockFn.mockClear() testing before => ', myMock.mock);
  //   myMock.mockClear();
  //   console.log('mockFn.mockClear() testing after => ', myMock.mock);
  // });

  // it('mockFn.mockImplementation(fn) testing', () => {
  //   const myMock = jest.fn().mockImplementation(name => `hello ${name}`);
  //   // or: const myMock = jest.fn((name) =>
  //   //   `hello ${name}`
  //   // );
  //   // const a = new myMock('Vinay');
  //   const a = myMock('Vinay');
  //   console.log('mockFn.mockImplementation(fn) testing 1 => ', a === 'Vinay'); // false
  //   console.log('mockFn.mockImplementation(fn) testing 2 => ', myMock.mock.calls[0]); // [ 'Vinay' ]
  //   console.log('mockFn.mockImplementation(fn) testing 3 => ', myMock.mock.calls[0][0]); // Vinay
  //   console.log('mockFn.mockImplementation(fn) testing 4 => ', myMock.mock.calls[0][0] === 'Vinay'); // true
  //   console.log('mockFn.mockImplementation(fn) testing 5 => ', a); // hello Vinay
  // });

  // it('mockFn.mockImplementationOnce(fn) testing', () => {
  //   var myMockFn = jest.fn()
  //     .mockImplementationOnce(cb => cb(null, true))
  //     .mockImplementationOnce(cb => cb(null, false));

  //   myMockFn((err, val) => console.log(val));

  //   myMockFn((err, val) => console.log(val));
  // });

  // it('mockFn.mockImplementationOnce(fn) testing 2', () => {
  //   var myMockFn = jest.fn(() => 'default')
  //     .mockImplementationOnce(() => 'first call')
  //     .mockImplementationOnce(() => 'second call');

  //   console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());
  // });

  // it('.mock property testing', () => {
  //   const myMock = jest.fn();

  //   const a = new myMock('first arg', 'Second arg');
  //   const c = new myMock();
  //   const b = {};
  //   const bound = myMock.bind(b);
  //   bound();

  //   // console.log(myMock.mock);

  //   // // The function was called exactly once
  //   // expect(myMock.mock.calls.length).toBe(3);

  //   // console.log('==== myMock.mock.calls', myMock.mock.calls[0]);
  //   // // The first arg of the first call to the function was 'first arg'
  //   // expect(myMock.mock.calls[0][0]).toBe('first arg');

  //   console.log('==== myMock.mock.instances', myMock.mock.instances);
  //   // This function was instantiated exactly twice
  //   expect(myMock.mock.instances.length).toBe(3);
  // });

  it('Mock Return Values testing', () => {
    const myMock = jest.fn();
    console.log(myMock());
    // > undefined

    myMock.mockReturnValueOnce(10)
    .mockReturnValueOnce('x')
    .mockReturnValue(true);

    console.log(myMock(), myMock(), myMock(), myMock());
    // > 10, 'x', true, true
  });

  // it('myMock.mock.calls testing', () => {
  //   const myMock = jest.fn((name) => {
  //     return `hello ${name}`;
  //   });
  //   console.log('myMock.mock.calls testing 1 => ', myMock.mock.calls);
  //   myMock('1');
  //   console.log('myMock.mock.calls testing 2 => ', myMock.mock);
  //   myMock('a', 'b');
  //   console.log('myMock.mock.calls testing 3 => ', myMock());
  //   console.log('myMock.mock.calls testing 4 => ', myMock('Vinay'));
  //   // > [ [1], ['a', 'b'] ]
  // });
  // it('Test function mocking', () => {
  //   const myMock = jest.fn();
  //   const a = new myMock();
  //   const b = {};
  //   const bound = myMock.bind(b);
  //   bound();
  //   console.log('Module mocking', moduleName());
  // });

  // it('Test function mocking', () => {
  //   const myMock = jest.fn();
  //   const a = new myMock();
  //   const b = {};
  //   const bound = myMock.bind(b);
  //   bound();
  //   console.log('Function mocking', myMock.mock.calls);
  // });

  // it('Test function mocking', () => {
  //   const myMock = jest.fn();
  //   const a = new myMock();
  //   const b = {};
  //   const bound = myMock.bind(b);
  //   bound();
  //   console.log('Function mocking', myMock.mock.calls);
  // });
});

/* Mocking */
/* Stop=============================================================== */
