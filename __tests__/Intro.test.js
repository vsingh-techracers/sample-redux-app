/**
 * Sample React Native Snapshot Test
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { mount, shallow, render } from 'enzyme';
import Intro from '../Intro';

// test('two plus two is four', () => {
//   expect(2 + 2).toBe(4);
// });

// test('object assignment', () => {
//   const data = {one: 1};
//   data['two'] = 2;
//   expect(data).toEqual({one: 1, two: 2});
// });

it('renders correctly', () => {
  const wrapper = shallow(<Intro />);
    expect(wrapper).toMatchSnapshot();
});



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