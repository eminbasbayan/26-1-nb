const fs = require("node:fs")

const readStream = fs.createReadStream("./file.txt", {
    highWaterMark: 2
});

readStream.on("data", (chunk) => {
    console.log(chunk.toString());
})

readStream.on("end", () => {
    console.log("İşlem Tamamlandı!");
})

readStream.on("error", (error) => {
    console.log(error);
})


