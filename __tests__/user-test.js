// __tests__/user-test.js
import * as user from '../test/user';

jest.mock('../test/request');


// The assertion for a promise must be returned.
it('works with promises', () => {
  expect.assertions(1);
  return user.getUserName(4).then(data => {
    console.log('Receiving data', data);
    expect(data).toEqual('Vinay 4');
    });
});


// it('works with resolves', () => {
//   expect.assertions(1);
//   return expect(user.getUserName(5)).resolves.toEqual('Vinay 5');
// });

// /* async/await can be used. */
// it('works with async/await', async () => {
//   expect.assertions(1);
//   const data = await user.getUserName(4);
//   console.log('Receiving data');
//   expect(data).toEqual('Vinay 4');
// });

// // async/await can also be used with `.resolves`.
// it('works with async/await and resolves', async () => {
//   expect.assertions(1);
//   await expect(user.getUserName(5)).resolves.toEqual('Vinay 5');
// });

// /* Error handling */
// // Testing for async errors using Promise.catch.
// test('tests error with promises', async () => {
//   expect.assertions(1);
//   return user.getUserName(2).catch((e) => {
//     console.log('receiving error ', e);
//     expect(e).toEqual({
//       error: 'User with 2 not found.',
//     });
//   });
// });

// // Or using async/await.
// it('tests error with async/await', async () => {
//   expect.assertions(1);
//   try {
//     await user.getUserName(1);
//   } catch (e) {
//     console.log('receiving error ', e);
//     expect(e).toEqual({
//       error: 'User with 1 not found.',
//     });
//   }
// });

// /* .rejects */
// // Testing for async errors using `.rejects`.
// it('tests error with rejects', () => {
//   expect.assertions(1);
//   return expect(user.getUserName(3)).rejects.toEqual({
//     error: 'User with 3 not found.',
//   });
// });

// // Or using async/await with `.rejects`.
// it('tests error with async/await and rejects', async () => {
//   expect.assertions(1);
//   await expect(user.getUserName(3)).rejects.toEqual({
//     error: 'User with 3 not found.',
//   });
// });
