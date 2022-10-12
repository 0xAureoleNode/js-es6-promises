// const users = ['saviomartin', 'victoria-lo', 'max-programming', 'atapas'];

// const fetchData = (user) => fetch(`http://api.github.com/users/${user}`);

// const loopFetches = async () => {
//   for (let i = 0; i < users.length; i++) {
//     console.log(`*** Fetching details of ${users[i]} ***`);
//     const response = await fetchData(users[i]);
//     const user = await response.json();
//     console.log(
//       `${user.name} is ${user.bio} has ${user.public_repos} public repos and ${user.followers} followers`
//     );
//   }
// };

// loopFetches();
// const loopAll = async () => {
//   const responses = await Promise.all(users.map((user) => fetchData(user)));
//   const data = await Promise.all(responses.map((response) => response.json()));
//   console.log(data);
//   data.map((user) => {
//     console.log(`*** Fetching details of ${user.name} ***`);
//     console.log(
//       `${user.name} is ${user.bio} has ${user.public_repos} public repos and ${user.followers} followers`
//     );
//   });
// };

// loopAll();

// const oddEven = (num) => {
//   return new Promise((resolve, reject) => {
//     if (num % 2 === 0) {
//       resolve('Even');
//     } else {
//       reject(new Error('odd'));
//     }
//   });
// };

// oddEven(11).catch((err) => {
//   console.log(err.message);
// });

const hello = Promise.resolve('Hello');
hello.then((result) => 'World').then((result) => console.log(result));
