let setRes = new Set();
let checkArr = [];

let input = [
    {
        id: 1,
        name: 'Dung',
        age: 20
    },
    {
        id: 2,
        name: 'Diu',
        age: 20
    },
    {
        id: 3,
        name: 'Ky',
        age: 20
    },
    {
        id: 1,
        name: 'Hai',
        age: 22
    },
    {
        id: 4,
        name: 'Hai',
        age: 22
    },
    {
        id: 1,
        name: 'Hai',
        age: 22
    },
    {
        id: 3,
        name: 'Hai',
        age: 22
    }
];

function removeDuplicatedItems(array) {
    let result = [];

    array.forEach((item) => {
        if(check(item)) {
            result.push(item);
        }
    })

    return result;
};

function check(obj) {

    checkArr.push(obj.id);
    let set = new Set(checkArr);

    if (set.size > setRes.size) {
        setRes.add(obj.id);
        return true;
    }

    return false;
}

console.log(removeDuplicatedItems(input));

