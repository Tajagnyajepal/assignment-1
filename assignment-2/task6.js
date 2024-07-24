function caps(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase()+
word.slice(1)).join(' ')
}

const sentence = "hi hello how are you";
const ans = caps(sentence);
console.log(ans);