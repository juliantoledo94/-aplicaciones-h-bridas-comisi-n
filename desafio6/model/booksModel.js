import fs from "fs";
import path from "path";

const bookFilePath = path.join(__dirname,"../data/books.json")

const readBooksFile = () =>{
    const data = fs.readFileSync(bookFilePath,"utf-8")
    return JSON.parse(data)
}

const writeBookFile = () =>{
    fs.writeFileSync(bookFilePath, JSON.stringify(data),"utf-8")
}

export {readBooksFile, writeBookFile};
