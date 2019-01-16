// Sử dụng hàm asyn await
// function Promise_all(promises) {
//     let result = [];
//     return new Promise((resolve, reject) => {
//         async function run() {
//             for (i of promises) {
//                 let data = await i;
//                 result.push(data);
//             }
//             resolve(result);
//         }
//         run();
//     })
// }

function Promise_all(promises) {
    let result = [];

    return new Promise((resolve, reject) => {
        let count = promises.length;
        promises.forEach((promise, index) => {
            promise.then((data) => {
                result.push(data);
                count--;
                if (count == 0) {
                    resolve(result);
                }
            })
        })
    })

}

function soon(val) {
    return new Promise(resolve => {
        setTimeout(() => resolve(val), Math.random() * 500);
    });
}


Promise_all([soon(1), soon(2), soon(3)]).then((data) => {
    console.log(data);
})