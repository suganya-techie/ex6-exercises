displayInput = (input, delay) => {
    return new Promise(
        function (resolve, reject) {
            if (resolve) {
                setTimeout(() => resolve(input), delay)
            }
            else
                reject(error);
        });
}

displayInput('test', 2000)
    .then(input => {
        for (let i = 0; i < 5; i++) {
            console.log(input);
        }

    })
    .catch(error => { });
