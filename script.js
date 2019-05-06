class Insan {
    constructor(isim, boy, kilo, cinsiyet) {
        this.boy=boy;
        this.kilo=kilo; 
        this.isim=isim; 
        this.cinsiyet=cinsiyet; 
    }

    vke () {
        let boyKare = this.boy * this.boy; 
        let endeks = this.kilo / boyKare;   

        
       

        if(endeks>=0 && endeks<=18.4) {
            return this.cinsiyet=="Bayan" ? " hanım " : " Bey" + " Uzunluğunuza göre uygun ağırlıkta olmadığınızı, zayıf olduğunuzu gösterir. Zayıflık, bazı hastalıklar için risk oluşturan ve istenmeyen bir durumdur. Boyunuza uygun ağırlığa erişmeniz için yeterli ve dengeli beslenmeli, beslenme alışkanlıklarınızı geliştirmeye özen göstermelisiniz.";
        } else if(endeks>=18.5 && endeks <= 24.9) {
            return this.cinsiyet=="Bayan" ? " hanım " : " bey" + "Uzunluğunuza göre uygun ağırlıkta olduğunuzu gösterir. Yeterli ve dengeli beslenerek ve düzenli fiziksel aktivite yaparak bu ağırlığınızı korumaya özen gösteriniz.";
        } else if(endeks >=25 && endeks <=29.9) {
            return this.isim & this.cinsiyet=="Bayan" ? " hanım " : " Bey " + "Boyunuza göre vücut ağırlığınızın fazla olduğunu gösterir. Fazla kilolu olma durumu gerekli önlemler alınmadığı takdirde pek çok hastalık için risk faktörü olan obeziteye (şişmanlık) yol açar.";
        } else if(endeks >=30 && endeks <=34.9) {
            return this.cinsiyet=="Bayan" ? " hanım " : " bey" + "Boyunuza göre vücut ağırlığınızın fazla olduğunu bir başka deyişle şişman olduğunuzun bir göstergesidir. Şişmanlık, kalp-damar hastalıkları, diyabet, hipertansiyon v.b. kronik hastalıklar için risk faktörüdür. Bir sağlık kuruluşuna başvurarak hekim / diyetisyen kontrolünde zayıflayarak normal ağırlığa inmeniz sağlığınız açısından çok önemlidir. Lütfen, sağlık kuruluşuna başvurunuz.";
        } else if(endeks >=35 && endeks <=44.9) {
            return this.isim & this.cinsiyet=="Bayan" ? " hanım " : " bey" + "Uzunluğunuza göre vücut ağırlığınızın fazla olduğunu bir başka deyişle şişman olduğunuzun bir göstergesidir. Şişmanlık, kalp-damar hastalıkları, diyabet, hipertansiyon v.b. kronik hastalıklar için risk faktörüdür. Bir sağlık kuruluşuna başvurarak hekim / diyetisyen kontrolünde zayıflayarak normal ağırlığa inmeniz sağlığınız açısından çok önemlidir. Lütfen, sağlık kuruluşuna başvurunuz.";
        } else if(endeks >=45) return "Aşırı Obez";
        else return this.cinsiyet=="Bayan" ? " hanım " : " bey" + "Boyunuza göre vücut ağırlığınızın fazla olduğunu bir başka deyişle şişman olduğunuzun bir göstergesidir. Şişmanlık, kalp-damar hastalıkları, diyabet, hipertansiyon v.b. kronik hastalıklar için risk faktörüdür. Bir sağlık kuruluşuna başvurarak hekim / diyetisyen kontrolünde zayıflayarak normal ağırlığa inmeniz sağlığınız açısından çok önemlidir. Lütfen, sağlık kuruluşuna başvurunuz.";
    }
}


let efe = new Insan(); 
efe.isim="Efe";
efe.cinsiyet="Bayan";
efe.boy=1.79;
efe.kilo=81;    

let yadikar = new Insan(); 
yadikar.boy=1.68;
yadikar.kilo=63;
yadikar.isim="Yadikar";
yadikar.cinsiyet="Bayan";

console.log(efe.vke())
console.log(yadikar.vke())

