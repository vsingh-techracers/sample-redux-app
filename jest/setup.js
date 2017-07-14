/* eslint no-undef:0 */
/* eslint arrow-body-style:0 */

// Mocking the global.fetch included in React Native
global.fetch = jest.fn();

// Helper to mock a success response (only once)
fetch.mockResponseSuccess = (body) => {
  fetch.mockImplementationOnce(
    () => Promise.resolve({ json: () => Promise.resolve(JSON.parse(body)) }),
  );
};

// Helper to mock a failure response (only once)
fetch.mockResponseFailure = (error) => {
  fetch.mockImplementationOnce(
    () => Promise.reject(error),
  );
};


jest.mock('Linking', () => {
  return {
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    openURL: jest.fn(),
    canOpenURL: jest.fn(),
    getInitialURL: jest.fn(),
  };
});

// jest.mock('NetInfo', () => {
//   return {
//     isConnected: {
//       fetch: () => {
//         return new Promise((accept, resolve) => {
//           accept(true);
//         });
//       },
//     },
//   };
// });
