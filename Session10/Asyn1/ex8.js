function Promise_all(promises) {
    let result = [];
    return new Promise((resolve, reject) => {
        async function run() {
            for (i of promises) {
                let data = await i;
                result.push(data);
            }
            resolve(result);
        }
        run();
    })
}

function soon(val) {
    return new Promise(resolve => {
        setTimeout(() => resolve(val), Math.random() * 500);
    });
}


  