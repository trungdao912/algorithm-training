function upper(strings, ...values) {
    let result = values.map((value) => {
        return value.toUpperCase();
    })
    let res = '';
    for (let i = 0; i < strings.length; i++) {
        if (result[i] == undefined) {
            result[i] = ''
        }
        res = res + strings[i] + result[i]
    }
    return res;
}

var name = 'Nguyen Van A',
  account = 'ANV',
  classname = 'FrontEnd AngularJS';

console.log(

  upper`Hello ${name} (@${account}), welcome to the ${classname}!` ===
    'Hello NGUYEN VAN A (@ANV), welcome to the FRONTEND ANGULARJS!'
);
