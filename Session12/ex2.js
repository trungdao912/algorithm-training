const fs = require("fs");
let res = "";
fs.readdir("./numfiles", "utf-8", function(err, data) {
  if (err) {
    throw err;
  }

  data = data
    .filter(data => {
      if (Number(data) >= 1024) {
        return data;
      }
    })
    .sort((a, b) => {
      return a - b;
    });

  // Callback style
  function cb(i) {
      fs.readFile("./numfiles/" + data[i], "utf-8", (err, content) => {
          if (err) {
              throw err;
          }
          res += content[content.length - 2];
          if (i == data.length - 1) {
              console.log(res);
              return;
          }
          i++
          cb(i);
      })
  }
  cb(0);

  /* ------------------------------------------------ */
  // Promise Style
  //   let res2 = "";
  function readFilePromiseStyle(fileName) {
    return new Promise((resolve, reject) => {
      fs.readFile("./numfiles/" + fileName, "utf-8", (err, content) => {
        if (err) {
          throw err;
        }
        resolve(content[content.length - 2]);
      });
    });
  }

  //   function test(i) {
  //     let a = readFilePromiseStyle(data[i]);
  //     a.then(num => {
  //       res2 = res2 + num;
  //       if (i === data.length - 2) {
  //         console.log(res2);
  //         return;
  //       }
  //       return test(i + 1);
  //     });
  //   }

  //   test(0);
  /* ------------------------------------------------ */
  // Async await
  (async function() {
    let res3 = "";
    for (let file of data) {
      let a = await readFilePromiseStyle(file);
      res3 += a;
    }
    console.log(res3);
  })();
});
