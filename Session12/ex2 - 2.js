const fs = require('fs');

/* ----------- callback --------------- */

// (function callBackStyle() {
//     let newFile = "1024";
//     let element;
//     let res = ""

//     function cb(fileName) {
//         fs.readFile('./numfiles/' + fileName, 'utf-8', function (err, data) {
//             if (err) {
//                 console.log(res);
//             }
//             if (data) {
//                 let newData = data.split(' ');
//                 element = newData[newData.length - 1];
//                 newFile = newData[newData.length - 2];
//                 res = res + element;
//                 cb(newFile);
//             }
//         });
//     }

//     cb(1024);
// })();

/* ----------- Promise --------------- */

// (function promiseStyle() {
//     let newFile = "1024";
//     let element;
//     let res = "";

//     function getFileNamePromise(fileName) {
//         return new Promise((resolve, reject) => {
//             fs.readFile('./numfiles/' + fileName, 'utf-8', (err, data) => {
//                 if (err) {
//                     console.log(res);
//                 }
//                 if (data) {
//                     let newData = data.split(' ');
//                     element = newData[newData.length - 1];
//                     newFile = newData[newData.length - 2];
//                     res = res + element;
//                     resolve(newFile);
//                 }
//             })
//         })
//     }

//     function run(fileName) {
//         let a = getFileNamePromise(fileName);
//         a.then((name) => {
//             return run(name);
//         }, (err) => {
//             console.log(res);
//         })
//     }

//     run(newFile);
// })();

/* ----------- async await --------------- */
(async function () {
    let newFile = "1024";
    let element;
    let res = "";

    function getFileNamePromise(fileName) {
        return new Promise((resolve, reject) => {
            fs.readFile('./numfiles/' + fileName, 'utf-8', (err, data) => {
                if (err) {
                    console.log(res);
                }
                if (data) {
                    let newData = data.split(' ');
                    element = newData[newData.length - 1];
                    newFile = newData[newData.length - 2];
                    res = res + element;
                    resolve(newFile);
                }
            })
        })
    }
    
    while (newFile) {
        newFile = await getFileNamePromise(newFile);
    }

})();