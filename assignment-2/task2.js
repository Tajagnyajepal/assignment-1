function sumarr(arr) {
    return arr.reduce((acc, cur) => {
        return acc + cur;
    }, 0);
}

const num = [1,2,3,4,5];
const sum = sumarr(num);
console.log(sum);