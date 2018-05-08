// Create a generator function that returns 10 random numbers between 10 and 50

function* generateRandomNumbers({ rangeFrom, rangeTo, count = 10 }) {
    const randomNumbers = [];
    while (randomNumbers.length < count) {
        let randomnumber = Math.floor(Math.random() * (rangeTo - rangeFrom + 1)) + rangeFrom;
        if (randomNumbers.indexOf(randomnumber) > -1) continue;
        randomNumbers.push(randomnumber);
    }
    yield randomNumbers;
}

const randomNumbers = generateRandomNumbers({ rangeFrom: 10, rangeTo: 50 });
console.log(randomNumbers.next().value);
