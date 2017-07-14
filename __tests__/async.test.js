// __tests__/async.test.js

/**
 * Sample React Native Async Test
 */

/* Testing Asynchronous Code */
/* Start=============================================================== */
describe('Testing function  mocking', () => {
  /* Callbacks */
  test('the data is Callbacks', (done) => {
    function callback(data) {
      console.log('expected data', data);
      expect(data).toBe('Callbacks');
      done();
    }
    fetchData(callback);
  });

  function fetchData(callback) {
    callback('Callbacks');
  }

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


  // /* Async/Await */
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

  // /* can combine async and await with .resolves or .rejects */
  // /* Start */
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
});

/* Testing Asynchronous Code */
/* Stop=============================================================== */
