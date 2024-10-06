function CountVowelsandConsonant(str){
const vowelSet=newSet(['a','e','i','o','u']);
let vowelCount=0
let consonantCount=0
const normalizedStr=str.toLoweCase();
for(let char of normalizedStr){
    if(char>='a'&&char<='z'){
        if(vowelSet.has(char)){
            vowelCount++
        }else{
            consonantCount++
        }
    }
}
return {
    vowels:vowelCount,
    consonants:
    consonantCount
};
}
const result=CountVowelsandConsonant("Hello World")
console.log(result)