// __tests__/helper.test.js

/* Repeating Setup For Many Tests  */
/* Start=============================================================== */
//  beforeEach(() => {
//     console.log('Database initialized');
//   });

//   afterEach(() => {
//     console.log('Database cleared');
//   });
/* Repeating Setup For Many Tests */
/* Stop=============================================================== */

/* One-Time Setup */
/* Start=============================================================== */
//  beforeAll(() => {
//     console.log('Database initialized');
//   });

//   afterAll(() => {
//     console.log('Database cleared');
//   });
/* Stop=============================================================== */
/* One-Time Setup */

describe('Testing helper function', () => { // .only or .skip
  // beforeEach(() => {
  //   console.log('Database initialized inner');
  // });

  // afterEach(() => {
  //   console.log('Database cleared inner');
  // });

  test('=============Test 1', () => {
    console.log('Test 1');
  });

  test('=============Test 2', () => {
    console.log('Test 2');
  });
});

describe('Testing helper function 2 ', () => {
  test('=============Test 3', () => {
    console.log('Test 3');
  });

  // test.skip('=============Test 4', () => {
  //   console.log('Test 4');
  // });

  // test.only('this will be the only test that runs', () => {
  //   expect(true).toBe(true);
  // });

  test('this test will not run', () => {
    expect('A').toBe('A');
  });
});

// describe('Testing helper function', () => {

// });
