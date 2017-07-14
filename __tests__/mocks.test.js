// __tests__/mocks.test.js

/**
 * Sample React Native Mocking Test
 */

const video = require('../test/video');

/* Mocking */
/* Start=============================================================== */

/* function  mocking */
/* Start=============================================================== */
// describe('Testing function  mocking', () => {
//   it('Basic mock function testing', () => {
//     const myMock = jest.fn();
//     console.log('Basic mock function testing 1 => ', myMock());
//     console.log('Basic mock function testing 2 => ', myMock.mock);
//     console.log('Basic mock function testing 3 => ', myMock.mock.calls);
//     console.log('Basic mock function testing 4 => ', myMock.mock.instances);
//   });

//   it('myMock.mock.calls testing', () => {
//     console.log('myMock.mock.calls testing 0 => ', myMock);
//     // const myMock = jest.fn();
//     const myMock = jest.fn((name) => {
//        return `hello ${name}`;
//     });
//     // console.log('myMock.mock.calls testing 1 => ', myMock);
//     myMock('Me'); // call 1
//     // console.log('myMock.mock.calls testing 1.0 => ', myMock('Me'));
//     myMock('you'); // call 2
//     myMock(); // call 3
//     myMock(); // call 4
//     myMock(); // call 5
//     console.log('myMock.mock.calls testing 1.1 => ', myMock.mock);
//     console.log('myMock.mock.calls testing 1.2 => ', myMock.mock.calls);
//     console.log('myMock.mock.calls testing 1.3 => ', myMock.mock.calls[0]);
//     myMock('a', 'b');
//     console.log('myMock.mock.calls testing 3 => ', myMock.mock);
//     console.log('myMock.mock.calls testing 3.1 => ', myMock.mock.calls);
//     console.log('myMock.mock.calls testing 3.2 => ', myMock.mock.calls.length);
//   });

//   it('myMock.mock.instances testing', () => {
//     const myMock = jest.fn((name) => {
//       return `hello ${name}`;
//     });
//     const a = new myMock();
//     const b = new myMock();
//     const c = new myMock('Vinay');
//     console.log('myMock.mock.instances testing 1 => ', myMock.mock);
//     console.log('myMock.mock.instances testing 1.1 => ', myMock.mock.instances);
//     console.log('myMock.mock.instances testing 1.2 => ', myMock.mock.instances[0] === a);
//     console.log('myMock.mock.instances testing 1.3 => ', myMock.mock.instances[0] === b);
//     console.log('myMock.mock.instances testing 1.4 => ', c);
//   });

//   it('mockFn.mockClear() testing', () => {
//     const myMock = jest.fn();
//     myMock('1');
//     myMock('a', 'b');
//     const a = new myMock('Me');
//     const b = new myMock('You');
//     const c = new myMock();
//     const d = new myMock();
//     console.log('mockFn.mockClear() testing before => ', myMock.mock);
//     myMock.mockClear();
//     console.log('mockFn.mockClear() testing after => ', myMock.mock);
//   });

//   it('mockFn.mockImplementation(fn) testing', () => {
//     const myMock = jest.fn().mockImplementation(name => `hello ${name}`);
//     // or: const myMock = jest.fn((name) =>
//     //   `hello ${name}`
//     // );
//     // const a = new myMock('Vinay');
//     const a = myMock('Vinay');
//     console.log('mockFn.mockImplementation(fn) testing 1 => ', a === 'Vinay'); // false
//     console.log('mockFn.mockImplementation(fn) testing 2 => ', myMock.mock.calls[0]); // [ 'Vinay' ]
//     console.log('mockFn.mockImplementation(fn) testing 3 => ', myMock.mock.calls[0][0]); // Vinay
//     console.log('mockFn.mockImplementation(fn) testing 4 => ', myMock.mock.calls[0][0] === 'Vinay'); // true
//     console.log('mockFn.mockImplementation(fn) testing 5 => ', a); // hello Vinay
//   });

//   it('mockFn.mockImplementationOnce(fn) testing', () => {
//     var myMockFn = jest.fn()
//       .mockImplementationOnce(cb => cb(null, true))
//       .mockImplementationOnce(cb => cb(null, false));

//     myMockFn((err, val) => console.log(val));

//     myMockFn((err, val) => console.log(val));
//   });

//   it('mockFn.mockImplementationOnce(fn) testing 2', () => {
//     var myMockFn = jest.fn(() => 'default')
//       .mockImplementationOnce(() => 'first call')
//       .mockImplementationOnce(() => 'second call');

//     console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());
//   });

//   it('.mock property testing', () => {
//     const myMock = jest.fn();

//     const a = new myMock('first arg', 'Second arg');
//     const c = new myMock();
//     const b = {};
//     const bound = myMock.bind(b);
//     bound();

//     // console.log(myMock.mock);

//     // // The function was called exactly once
//     // expect(myMock.mock.calls.length).toBe(3);

//     // console.log('==== myMock.mock.calls', myMock.mock.calls[0]);
//     // // The first arg of the first call to the function was 'first arg'
//     // expect(myMock.mock.calls[0][0]).toBe('first arg');

//     console.log('==== myMock.mock.instances', myMock.mock.instances);
//     // This function was instantiated exactly twice
//     expect(myMock.mock.instances.length).toBe(3);
//   });

//   it('Mock Return Values testing', () => {
//     const myMock = jest.fn();
//     console.log(myMock());
//     // > undefined

//     myMock.mockReturnValueOnce(10)
//     .mockReturnValueOnce('x')
//     .mockReturnValue(true);

//     console.log(myMock(), myMock(), myMock(), myMock());
//     // > 10, 'x', true, true
//   });
// });

/* jest.spyOn(object, methodName) */
/* Start=============================================================== */
test('jest.spyOn(object, methodName)', () => {
  const spy = jest.spyOn(video, 'play');
  let isPlaying = video.play();

  console.log('Is video playing 1 => ', isPlaying);
  expect(spy).toHaveBeenCalled();
  expect(isPlaying).toBe(true);

  video['play'] = jest.fn(() => {
    return false;
  });
  isPlaying = video.play();

  console.log('Is video playing 1 => ', isPlaying);
  expect(isPlaying).toBe(false);

  spy.mockReset();
  spy.mockRestore();
});
/* jest.spyOn(object, methodName) */
/* Stop=============================================================== */

/* function  mocking */
/* Stop=============================================================== */

/* module  mocking */
/* Start=============================================================== */
// describe('Testing module mocking', () => {

//   it('module any function with an auto-mocked', () => {
//     jest.mock('src/config/appConfig'); // this happens automatically with automocking
//     const { getBaseUrl } = require('src/config/appConfig');
//     console.log('mock any function from module testing => ', getBaseUrl());
//     // > mock any function from module testing =>  undefined
//   });

//   it('explicit module mock testing', () => {
//     jest.mock('src/config/appConfig'); // this happens automatically with automocking
//     const { getBaseUrl } = require('src/config/appConfig');

//     getBaseUrl.mockImplementation(() => 'https://www.fake-url.com/');
//     console.log('explicit mock any function from module testing  => ', getBaseUrl());
//     expect(getBaseUrl()).toBe('https://www.fake-url.com/');
//     // > https://www.fake-url.com/
//   });

//   it('module with an auto-mocked', () => {
//     jest.mock('src/modules');
//     const LoginScreen = require('src/modules');
//     console.log('module with an auto-mocked', LoginScreen);
//   });

//   it('jest.resetModules()', () => {
//     const LoginScreen1 = require('src/modules');
//     jest.resetModules();
//     const LoginScreen2 = require('src/modules');
//     LoginScreen1 === LoginScreen2;
//     console.log('jest.resetModules()', LoginScreen1 === LoginScreen2);
//     // > false
//   });
// });
/* module  mocking */
/* Stop=============================================================== */

/* Mocking */
/* Start=============================================================== */

