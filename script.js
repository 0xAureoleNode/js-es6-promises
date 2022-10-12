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

// Promise Chain Rule # 3
// var promise = new Promise(function (resolve, reject) {
//   reject(401);
// });

// promise
//   .catch(function (error) {
//     if (error === 401) {
//       console.log('Rethrowing the 401');
//       throw error;
//     } else {
//     }
//   })
//   .then(function (value) {
//     console.log(value);
//   })
//   .catch(function (error) {
//     console.log(`handling ${error} here`);
//   });

// Promise Chain Rule # 4
// let promise = new Promise(function (resolve, reject) {
//   resolve('Testing Finally.');
// });
// // no argument
// promise
//   .finally(function () {
//     console.log('Running .finally()');
//   })
//   .then(function (value) {
//     console.log(5);
//   });

// Promise Chain Rule # 5
// No - Chain
// let promise = new Promise(function (resolve, reject) {
//   resolve(10);
// });
// // they don't pass down any result to other .then()methods
// // 这三个里面是同步发生的，所以唯一print的是最后一个
// promise.then(function (value) {
//   value++;
//   return value;
// });

// promise.then(function (value) {
//   value = value + 10;
//   return value;
// });

// promise.then(function (value) {
//   value = value + 20;
//   console.log(value);
//   return value;
// });

// on-chain
// let promise = new Promise(function (resolve, reject) {
//   resolve(10);
// });

// promise
//   .then(function (value) {
//     value++;
//     return value;
//   })
//   .then(function (value) {
//     value = value + 10;
//     return value;
//   })
//   .then(function (value) {
//     value = value + 20;
//     console.log(value);
//     return value;
//   });

// Robin and the PizzaHub Story
