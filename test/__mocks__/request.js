// __mocks__/request.js
const users = {
  4: {name: 'Vinay 4'},
  5: {name: 'Vinay 5'},
};

export default function request(url) {
  return new Promise((resolve, reject) => {
    const userID = parseInt(url.substr('/users/'.length), 10);
    process.nextTick(
      () => users[userID] ? resolve(users[userID]) : reject({
        error: 'User with ' + userID + ' not found.',
      })
    );
  });
}