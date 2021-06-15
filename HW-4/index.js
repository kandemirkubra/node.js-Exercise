/*
    Node.js FS Modülü kullanarak CRUD işlemleri yapıldı.
*/
const fs = require('fs');

// (CREATE) {'name': 'Employee 1 Name', 'salary': 2000} 
fs.appendFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', 'utf8', (err) => {
    if(err) console.log(err);
    console.log('\n JSON dosyasına veri eklendi.')
});

// (READ) 
fs.readFile('employees.json', 'utf8', (err, data) => {
    if(err){
        console.log(err);
    }
    console.log('\n OKUNAN DOSYA DATASI: ' + data);
});

// (DATA UPDATE)
fs.writeFile('employees.json', '{"name": "Employee 2 Name Kübra", "salary": 2021}', 'utf8', (err) => {
    if(err) console.log(err);
    console.log('\n JSON dosyasına veri güncellendi.')
});

// (DELETE FILE)
fs.unlink('employees.json', (err) => {
    if(err) throw err;
    console.log('\n JSON dosyası silindi.!')
});