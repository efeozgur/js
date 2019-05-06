const bebekDogumTarihi = (sonAdetTarihi) => {
    const gun = 1000 * 60 * 60 * 24;
    const simdi = new Date();
    const sonAdet = new Date(sonAdetTarihi);
    const gebelikGunu = Math.floor((simdi - sonAdet) / gun);
    const gebelikHaftasi = Math.floor((simdi - sonAdet) / (gun) / 7 + 1);

    const muhtemel = new Date(sonAdet + 280);

    return {
        simdi,
        sonAdet,
        gebelikGunu,
        gebelikHaftasi,
        muhtemel

    };


}

console.log(bebekDogumTarihi("01/12/2019"));