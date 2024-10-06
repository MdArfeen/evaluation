function Reverseword(str){
return str.split(" ").map(word=>word.split("").reverse().join(""))
.join(" ")
}
const inputString="javascript is fun"
const result= Reverseword(inputString)
console.log(result)