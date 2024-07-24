function cubeNumbers(numbers) {
    const cubes = numbers.map(x => x ** 3);
    return cubes;
}

const inputNumbers = [1, 2, 3, 4, 5];
const outputCubes = cubeNumbers(inputNumbers);
console.log(`The cubes of the input numbers ${inputNumbers} are: ${outputCubes}`);
