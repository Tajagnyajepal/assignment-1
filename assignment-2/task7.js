function studpass(stud) {
    return stud.filter(student => student.score >= 60 );
}

const std = [
    {name: 'Alice' , score: 85},
    {name: 'Bob' , score: 55},
    {name: 'Charlie' , score: 70},
    {name: 'Diana' , score: 40},
]
const ans = studpass(std);
console.log(ans);