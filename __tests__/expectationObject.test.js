// __tests__/expectationObject.test.js

describe('Testing expect object', () => {
  // /* expect(value)  */
  // /* Start=============================================================== */
  //   test('expect(value)', () => {
  //     expect('A').toBe('A');
  //   });
  // /* expect(value) */
  // /* Stop=============================================================== */

  // /* expect.extend(matchers) */
  // /* Start=============================================================== */
  //   expect.extend({
  //     toBeDivisibleBy(received, argument) {
  //       const pass = (received % argument == 0);
  //       if (pass) {
  //         return {
  //           message: () => (
  //             `expected ${received} not to be divisible by ${argument}`
  //           ),
  //           pass: true,
  //         };
  //       } else {
  //         return {
  //           message: () => (`expected ${received} to be divisible by ${argument}`),
  //           pass: false,
  //         };
  //       }
  //     },
  //   });
  //   test('even and odd numbers', () => {
  //     expect(100).toBeDivisibleBy(2);
  //     expect(101).not.toBeDivisibleBy(2);
  //   });
  // /* Stop=============================================================== */
  // /* expect.extend(matchers) */

  // /* expect.anything() */
  // /* Start=============================================================== */
  //   test('function call with a non-null argument', () => {
  //     const mock = jest.fn();
  //     mock(1);
  //     console.log('======', mock(1));
  //     // /* or */
  //     // mock();
  //     // console.log('======', mock());
  //     expect(mock).toBeCalledWith(expect.anything());
  //   });
  // /* Stop=============================================================== */
  // /* expect.anything() */

  // /* expect.any(constructor) */
  // /* Start=============================================================== */
  //   function randomCall(fn) {
  //     return fn(Math.floor(Math.random() * 6 + 1));
  //   }

  //   test('randocall calls its callback with a number', () => {
  //     const mock = jest.fn();
  //     randomCall(mock);
  //     expect(mock).toBeCalledWith(expect.any(Number));
  //   });
  // /* Stop=============================================================== */
  // /* expect.any(constructor) */

  // /* expect.arrayContaining(array) */
  // /* Start=============================================================== */
  // // expect.assertions(2);
  // const expected = ['Vinay', 'Singh'];
  // it('matches even if received contains additional elements', () => {
  //   expect(['Alice', 'Bob', 'Eve', 'Vinay', 'Singh']).toEqual(expect.arrayContaining(expected));
  // });
  // it('does not match if received does not contain expected elements', () => {
  //   expect(['Vinay', 'Vinay']).not.toEqual(expect.arrayContaining(expected));
  // });
  // /* Stop=============================================================== */
  // /* expect.arrayContaining(array) */

  // /* .toHaveBeenCalled() */
  // /* Start=============================================================== */
  // test('drinks something lemon-flavored', () => {
  //   const mock = jest.fn();
  //   mock();
  //   expect(mock).toHaveBeenCalled();
  // });

  // test('does not drink something octopus-flavored', () => {
  //   const mock = jest.fn();
  //   expect(mock).not.toHaveBeenCalled();
  // });
  // /* Stop=============================================================== */
  // /* .toHaveBeenCalled() */

  // /* .toHaveBeenCalledWith(arg1, arg2, ...) */
  // /* Start=============================================================== */
  // test('registration applies correctly to orange La Croix', () => {
  //   const mock = jest.fn();
  //   mock(1,2)
  //   expect(mock).toHaveBeenCalledWith(1, 2);
  // });
  // /* Stop=============================================================== */
  // /* .toHaveBeenCalledWith(arg1, arg2, ...) */
});
