// async function fetchUserDetails(userId) {
//   return { name: 'Robin', likes: ['toys', 'pizzas'] };
// }

// arrow function
// const fetchUserDetails = async (userId) => {
//    return { name: 'Robin', likes: ['toys', 'pizzas'] };
// }

// function caller() {
//     const user = await fetchUserDetails();
// }
// async function caller() {
//   const messageHi = await getSynchronousHi();
//   console.log(messageHi);
// }

// function getSynchronousHi() {
//   return 'Hi';
// }

// caller();
const validateUser = ({ userId, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId && password) {
        resolve(`${userId} you have been authenticated successfully!!!`);
      } else {
        reject({ message: 'userId or Password could be blank' });
      }
    }, 2000);
  });
};

const app = async () => {
  const data = {
    userId: '',
    password: '',
  };

  try {
    console.log('Initializing...');
    const result = await validateUser(data);
    console.log(result);
  } catch (e) {
    console.error(e.message);
  }
};

app();
