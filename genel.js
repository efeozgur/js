function kup(x) {
    return x * x * x;
}

const deger = Math.PI + Math.SQRT2;
export { kup, deger };


export default class Insan {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    yasHesapla() {
        return (new Date(Date.now()) - this.age);
    }
}

