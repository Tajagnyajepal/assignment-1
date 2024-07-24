function averageodd(arr) {
    const odd = arr.filter(num => num%2 !== 0);
    const squaredodd = odd.map(num => num*num);
    const sumsquare = squaredodd.reduce((sum,num)=>sum+num,0);
    const average = squaredodd.length > 0 ? sumsquare/squaredodd.length : 0;
    return average;
}

const numbers = [1,2,3,4,5,6,7,8,9,10];
const average = averageodd(numbers);
console.log(average);