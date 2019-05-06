const kare = (a, b) => a ** b;
const carpma = (a, b) => a * b;
const toplama = (a, b) => a + b;
const cikarma = (a, b) => (a > b ? a - b : b - a);

const kisiler = [
	{ name: 'hasan', unvani: 'hizmetli', yas: 39 },
	{ name: 'zübeyde', unvani: 'hizmetli', yas: 55 },
	{ name: 'nuran', unvani: 'yardimci', yas: 32 },
	{ name: 'akın', unvani: 'hizmetli', yas: 42 }
];

const yaslar = kisiler.filter((item) => item.yas > 32);

yaslar.forEach((yaslar) => console.log(`${yaslar.name} isimli kişinin yaşı ${yaslar.yas} ve ünvanı ${yaslar.unvani}`));
