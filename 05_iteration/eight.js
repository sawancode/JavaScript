const myNums = [1,2,3];

const myTotal = myNums.reduce( (acc, currVal) => {
    // console.log(`acc: ${acc} and currValu: ${currVal}`);
    return acc + currVal;
}, 3)

// console.log(myTotal);

/*
reduce function me 2 values leta ha jisme accumulator and currentValue hoti ha.
accumulator ki first value dependeicies me passed krenge
vo rhegi. and currentValue [] array ke first index se lenge or reduce method
continue array par operation krengi.
*/

const shoppingCart = [
    {
        itemName: "JS Course",
        price: 2999,
    },
    {
        itemName: "React.js Course",
        price: 999,
    },
    {
        itemName: "App Dev",
        price: 4999,
    },
    {
        itemName: "Python Course",
        price: 3999,
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => {
    return acc + item.price;
}, 0)

console.log(priceToPay);

