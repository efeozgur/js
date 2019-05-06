const bebekDogumTarihi = sonAdetTarihi => {
  const gun = 1000 * 60 * 60 * 24;
  const simdi = new Date();
  const sonAdet = new Date(sonAdetTarihi);
  const gebelikGunu = Math.floor((simdi - sonAdet) / gun);
  const gebelikHaftasi = Math.floor((simdi - sonAdet) / gun / 7);

  const muhtemel = sonAdet.setDate(sonAdet.getDate() + 280);
  const year = new Date(muhtemel).getFullYear();
  const month = new Date(muhtemel).getMonth() + 1;
  const day = new Date(muhtemel).getDay() + 5;
  const tarih = day + "/" + month + "/" + year;

  const tarihingunu = new Date(tarih);

  const dogumgunu = tarihingunu.getDate();

  const sonuc = () => ({
    gebelikGunu,
    gebelikHaftasi,
    tarih
  });

  return `Gebeliğinizin ${sonuc().gebelikGunu}. günündesiniz. Bebek ${sonuc().gebelikHaftasi} haftalık. Bebeğinizin muhtemel doğum günü ${sonuc().tarih}. Sağlıklı bebekler olması dileğiyle...`;
};


console.log(bebekDogumTarihi("04/01/2019")); 
