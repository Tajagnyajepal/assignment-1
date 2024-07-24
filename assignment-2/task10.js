function calc(arr) {
    let total = 0;
    arr.forEach(obj => {
        total +=obj.score;
});
return total;
}

const std = [
    {name: 'Alice' , score: 85},
    {name: 'Bob' , score: 55},
    {name: 'Charlie' , score: 70},
    {name: 'Diana' , score: 40},
]

const ans = calc(std);
console.log(ans);
