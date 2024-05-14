// https://irshad.az/?hl=az
// Məlumatlar "İrşad" - (Elektronika və Məişət Texnikası) mağazasının rəsmi veb səhifəsindən götürülmüşdür


let məhsul1 = {
    ad: "ASUS",
    model: "UX3405MA",
    kateqori: "Texnoloji",
    qiymət: 3030
}

let məhsul2 = {
    ad: "ACER",
    model: "Aspire 3 A315-34-C3PR",
    kateqori: "Texnoloji",
    qiymət: 559.99
}

let məhsul3 = {
    ad: "LENOVO",
    model: " IP 3 15ITL6",
    kateqori: "Texnoloji",
    qiymət: 699.999
}

let məhsul4 = {
    ad: "HP",
    model: "15-dw1058u",
    kateqori: "Texnoloji",
    qiymət: 819.99
}

let məhsullar = [məhsul1, məhsul2, məhsul3, məhsul4];
let filtrMəsullar = [];
let istifadəçiMəhsulAdı = prompt("Məhsul adı daxil edin");

filtrMəsullarıDoldur(məhsullar);
filtrMəsullarıYazdır(filtrMəsullar);


function filtrMəsullarıDoldur(məhsullar) {

    məhsullar.forEach(function (məhsul) {
        if (məhsul.ad.toUpperCase().includes(istifadəçiMəhsulAdı.toUpperCase(), 0)) {
            filtrMəsullar.push(məhsul);
        }
    });

}

function filtrMəsullarıYazdır(məhsullar) {

    məhsullar.forEach(function (məhsul) {

        document.write("Adı : " + məhsul.ad +
            " ---------------------------------------- ") +
            document.write("Model : " + məhsul.model +
                " ---------------------------------------- ") +
            document.write(" Qiyməti : " + məhsul.qiymət + " AZN " +
                " ---------------------------------------- ") +
            document.write(" Kateqoriyası : " + məhsul.kateqori +
                " ----------------- ");
    });

}