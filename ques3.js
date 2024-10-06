function isPallindrome(str){
const cleanedStr=str.toLowerCase().replace(/[a-z0-9]/g,'')
const reversedStr=cleanedStr.split('').reverse().join('')
return cleanedStr===reversedStr

}

const result = isPallindrome("A man, a plan, a canal, Panama");
console.log(result);
// Output: true

