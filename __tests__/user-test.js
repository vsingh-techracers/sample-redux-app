// __tests__/user-test.js
import * as user from '../test/user';

jest.mock('../test/request');


// // The assertion for a promise must be returned.
// it('works with promises', () => {
//   expect.assertions(1);
//   return user.getUserName(4).then(data => {
//     console.log('Receiving data', data);
//     expect(data).toEqual('Vinay 4');
//     });
// });


// it('works with resolves', () => {
//   expect.assertions(1);
//   return expect(user.getUserName(5)).resolves.toEqual('Vinay 5');
// });

// async/await can be used.
it('works with async/await', async () => {
  expect.assertions(1);
  const data = await user.getUserName(4);
  console.log('Receiving data');
  expect(data).toEqual('Vinay 4');
});

// async/await can also be used with `.resolves`.
it('works with async/await and resolves', async () => {
  expect.assertions(1);
  await expect(user.getUserName(5)).resolves.toEqual('Vinay 5');
});
