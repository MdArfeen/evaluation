const fruits=["Apple","Banana","Orange","PineApple","Grapes","Strawberry","Watermelon","Peach","Kiwi"]
const removedFruits=fruits.splice(-4,4)
fruits.splice(0,0, ...removedFruits)
console.log(fruits)