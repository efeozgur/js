// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newArr = arr.map(item => item * 2);

// console.log(newArr)


export const users = [
    {
        id: 1,
        user: 'alpcan',
    },

    {
        id: 2,
        user: 'hasan',
    },

    {
        id: 3,
        user: 'nuran',
    }
];


console.log(users.map(isim => `ID : ${isim.id} - USER : ${isim.user} `));

