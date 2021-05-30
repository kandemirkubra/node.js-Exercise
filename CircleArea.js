/*

Hepimizin Matematik derslerinden bildiği üzere Dairenin Alanı = π x r2 şeklinde hesaplanır. 
Node.JS Javascript çalışma ortamında yarıçap değerini konsoldan parametre olarak girerek alanı bulmaya çalışacağız.
Konsol çıktısı: Yarıçapı (Yarıçap) olan dairenin alanı: (Alan) şeklinde olmalıdır.

*/

const argument =  process.argv.slice(2);

function showCircleArea(radius){
    let valueRadius = radius*radius*Math.PI
    let result = valueRadius.toFixed(2); 
    console.log(`${result}`);
}

showCircleArea(argument[0] * 1);

//console.log(process.argv);

/*
Virgülden sonra iki rakkam  gösteren  fonksiyon toFixed() 'dir
*/