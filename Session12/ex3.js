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

let result = Array.from(new Set(input.map((field) => {
    return field.id;
}))).map((p) => {
    for (i of input) {
        if (p == i.id) {
            return i;
        }
    }
})

console.log(result);