// Promise Chain Rule # 2
// b. Return a simple value from the .then() handler

// Create a Promise
// let getUser = new Promise(function (resolve, reject) {
//   const user = {
//     name: 'John Doe',
//     email: 'jdoe@email.com',
//     password: 'jdoe.password',
//   };
//   resolve(user);
// });

// getUser
//   .then(function (user) {
//     console.log(`Got User ${user.name}`);
//     // return a simple value
//     return user.email;
//   })
//   .then(function (email) {
//     console.log(`User email is ${email}`);
//   });

// c. Throw an error from the .then() handler
// let getUser = new Promise(function (resolve, reject) {
//   const user = {
//     name: 'John Doe',
//     email: 'jdoe@email.com',
//     permissions: ['db', 'hr', 'dev'],
//   };
//   resolve(user);
// });

// getUser
//   .then(function (user) {
//     console.log(`Got user ${user.name}`);

//     // reject -> dev having the HR permission
//     if (user.permissions.includes('hr')) {
//       throw new Error('You are not allowed to access the HR module.');
//     }

//     // return as usual
//     return user.email;
//   })
//   .then(function (email) {
//     console.log(`User email is ${email}`);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });
