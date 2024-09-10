const myNums = [1, 2, 3, 4]

// const myTotal = myNums.reduce(function (acc, carval) {
//     console.log(`acc : ${acc} & value of carval ${carval} `)
//     return acc + carval;
// },0);

const myTotal = myNums.reduce( (acc, curval) => (acc+curval),0 )

// console.log(myTotal)

const shoppingCart = [
        {
        itemName : "js-course",
        price : 23
        },
        {
        itemName : "java-course",
        price : 53
        },
        {
        itemName : "css-course",
        price : 34
        },
]

 const priceTotal = shoppingCart.reduce((acc, item) => acc + item.price, 0)

 console.log(priceTotal);