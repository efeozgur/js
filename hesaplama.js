const hesap = (ucgenKenari, kenarYuksekligi, ucgenBirKenarUzunlugu) => ({
	ucgenKenari: ucgenKenari * kenarYuksekligi / 2 / 10000,
	karealan: ucgenKenari * kenarYuksekligi / 10000,
	eskenarUcgenAlani: Math.pow(ucgenBirKenarUzunlugu, 2) * Math.sqrt(3) / 4,
	eskenarUcgenCevresi: ucgenBirKenarUzunlugu * 3
});

const incHesap = (deger) => {
	const incMM = 25.4;

	return {
		cmyecevir: `${deger} inç ${deger * (incMM / 1000)} metre ${deger * (incMM / 10)} santimetre ${deger *
			incMM} milimetredir.`
	};
};

const idealKilo = (boyunuz) => {
	const incBoy = boyunuz / 2.54;
	return {
		kadin: (45.5 + 2.3 * (incBoy - 60)).toFixed(2),
		erkek: (50 + 2.3 * (incBoy - 60)).toFixed(2)
	};
};

const kdv = (miktar, oran) => {
	return {
		kdvDahil: miktar * (1 + oran / 100),
		kdvHaric: miktar / (1 + oran / 100),
		kdvMiktari: miktar * oran / 100
	};
};

const kidem = (baslamaTarihi, bitisTarihi, aylikBrutMaas = 2150.75) => {
	const gunSayisi = (new Date(bitisTarihi) - new Date(baslamaTarihi)) / 1000 / 60 / 60 / 24 + 1;
	const yil = Math.floor(gunSayisi / 365);
	return {
		gunSayisi,
		yil,
		kidemTazminati: aylikBrutMaas * yil
	};
};
