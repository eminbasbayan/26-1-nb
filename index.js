const fs = require("node:fs");

// Senkron dosya okuma
// const txtFile = fs.readFileSync("./file.txt", "utf-8");
// console.log(txtFile.toString());
// console.log("sync");

// Asenkron dosya okuma
/* fs.readFile("./file.txt", "utf-8", (err, data)=>{
   if(err){
      console.log(err);
   }else{
      console.log(data);
   }
})
console.log("async"); */

// Dosya içi yazıyı senkron değiştirme
/* fs.writeFileSync("./file.txt", "Bu bir test dosyasıdır."); */

// Dosya içi yazıyı asenkron değiştirme
/* fs.writeFile("./file2.txt", "Emin Başbayan", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Dosya başarıyla yazıldı!");

    }
}) */

// Dosyaya sonuna yeni veri ekleme
fs.writeFile("./file.txt", "Yeni Eklenen Veri", { flag: "a" }, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Dosya başarıyla yazıldı!");
    }
})

