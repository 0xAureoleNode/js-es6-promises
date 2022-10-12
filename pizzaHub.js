// Fetch the NearBy Pizza Shop
const fetchNearByShop = ({ longi, lat }) => {
  console.log(`🧭 Locating the nearby shop at (${longi} ${lat})`);
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      const response = {
        shopId: 's-123',
      };
      resolve(response.shopId);
    }, 1000);
  });
};

// Fetch pizzas in the shop
const fetchAvailablePizzas = ({ shopId }) => {
  console.log(`Getting Pizza List from the shop ${shopId}...`);
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      const response = {
        pizzas: [
          {
            type: 'veg',
            name: 'margarita',
            id: 'pv-123,',
          },
          {
            type: 'nonveg',
            name: 'pepperoni slice',
            id: 'pnv-124',
          },
        ],
      };
      resolve(response);
    }, 1000);
  });
};

// check the availability of the Selected Pizza
let getMyPizza = (result, type, name) => {
  let pizzas = result.pizzas;
  console.log('Got the Pizza List', pizzas);
  let myPizza = pizzas.find((pizza) => {
    return pizza.type === type && pizza.name === name;
  });
  return new Promise((resolve, reject) => {
    if (myPizza) {
      console.log(`✔️ Found the Customer Pizza ${myPizza.name}!`);
      resolve(myPizza);
    } else {
      reject(
        new Error(
          `❌ Sorry, we don't have ${type} ${name} pizza. Do you want anything else?`
        )
      );
    }
  });
};

// Fetch the Complimentary Beverage
const fetchBeverage = ({ pizzaId }) => {
  console.log(`🧃 Getting Beverages for the pizza ${pizzaId}...`);
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      const response = {
        id: 'b-10',
        name: 'cola',
      };
      resolve(response);
    }, 1000);
  });
};

// Create the Order
let create = (endpoint, payload) => {
  if (endpoint.includes(`/api/pizzahub/order`)) {
    console.log('Placing the pizza order with...', payload);
    const { type, name, beverage } = payload;
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve({
          success: true,
          message: `🍕 The ${type} ${name} pizza order with ${beverage} has been placed successfully.`,
        });
      }, 1000);
    });
  }
};

// combine all the Fetches in a single place
function fetch(endpoint, payload) {
  if (endpoint.includes('/api/pizzahub/shop')) {
    return fetchNearByShop(payload);
  } else if (endpoint.includes('/api/pizzahub/pizza')) {
    return fetchAvailablePizzas(payload);
  } else if (endpoint.includes('/api/pizzahub/beverages')) {
    return fetchBeverage(payload);
  }
}

// Handle Promises with the Chain
function orderPizza(type, name) {
  fetch('/api/pizzahub/shop', { longi: 38.8951, lat: -77.0364 })
    // get all pizzas from th shop
    .then((shopId) => fetch('/api/pizzahub/pizza', { shopId: shopId }))
    .then((allPizzas) => getMyPizza(allPizzas, type, name))
    .then((pizza) => fetch('/api/pizzahub/beverages', { pizzaId: pizza.id }))
    .then((beverage) =>
      create('/api/pizzahub/order', {
        beverage: beverage.name,
        name: name,
        type: type,
      })
    )
    .then((result) => console.log(result.message))
    .catch(function (error) {
      console.error(`${error.message}`);
    });
}

// Order Pizza
// orderPizza('nonveg', 'pepperoni slice');

// Order Pizza
orderPizza('nonveg', 'salami');
