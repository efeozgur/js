
const users = [
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

const gelen = users.find(item => item.id === 3);
console.log(gelen)