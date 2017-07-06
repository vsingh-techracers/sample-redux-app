/**
 * Sample React Native Snapshot Test
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
// import { mount, shallow, render } from 'enzyme';
import Intro from '../Intro';

it('renders correctly', () => {
  const tree = renderer.create(
    <Intro />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

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

// test('there is no I in team', () => {
//   expect('team').not.toMatch(/I/);
// });

// test('but there is a "stop" in Christoph', () => {
//   expect('Christoph').toMatch(/stop/);
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
