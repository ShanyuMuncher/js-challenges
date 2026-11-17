import { orderPizza } from "./async-await.js";

// customer interaction

// promise chaining
// console.log("Placing order ...");
// orderPizza('pepperoni')
//     .then((pizza) => console.log("Eating the pizza I ordered: ", pizza))
//     .catch((error) => console.log(error.message))
//     .finally(() => console.log("Turning off the TV and going to bed."));
// console.log("Watching TV while waiting ...");

// async/await
console.log("Placing order ...");
try {
    const pizzaOrder = orderPizza('chocolate');
    console.log("Watching TV while waiting ...");
    const pizza = await pizzaOrder;
    console.log("Eating the pizza I ordered: ", pizza);
} catch(error) {
    console.log(error.message);
} finally {
    console.log("Turning off the TV and going to bed.");
}


// using callbacks
// orderPizza("pepperoni", (error, pizza) => {
//   if (error) {
//     console.error(error.message);
//     return;
//   }

//   console.log(`Eating the pizza I ordered: ${pizza}!`);
// });
