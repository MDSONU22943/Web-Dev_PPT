const fs=require("fs")

fs.unlink("./nodejs.txt",() => {
    console.log("File Deleted successFully");
})