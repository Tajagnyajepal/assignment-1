function longstring(arr) {
    const stringlen = arr.map(str => ({string: str, length: str.length}));
    const longest = stringlen.reduce((longest, current) => {
        return (current.length > longest.length) ? current: longest;}, 
        {string:'', length:0
    });
    return longest.string;
}

const strs = ["apple", "mango", "house", "rainbow"];
const ans = longstring(strs);
console.log(ans);