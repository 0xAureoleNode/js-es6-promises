const red = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('red');
  }, 1000);
});
const green = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('green');
  }, 3000);
});
const blue = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('blue');
  }, 5000);
});

// promise.all
// const testAll = async () => {
//   const colors = await Promise.all([red, green, blue]);
//   console.log(colors);
//   colors.forEach((color) => {
//     console.log(color);
//   });
// };

// testAll();

// promise.any
const testAny = async () => {
  const color = await Promise.any([red, green, blue]);
  console.log(color);
};

testAny();
