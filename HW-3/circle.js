//require ve object destructing kullanarak index.js dosyasında yarıçap (r) 5 olacak şekilde ekran çıktısını alma çalışması

function circleArea(r) {
    let area = 0;

    area = Math.PI * r * r;

    return console.error("Alan: " + area);
}

function circleCircumference(r) {
    let circumference = 0;

    circumference = 2 * Math.PI * r;

    return console.error("Çevre: " + circumference);
}

module.exports = {
    circleArea,
    circleCircumference,
}


