import fs from "fs";
import path from "path";

const authorFilePath = path.join(__dirname,"../data/authors.json")

const readAuthorFile = () =>{
    const data = fs.readFileSync(authorFilePath,"utf-8")
    return JSON.parse(data)
}

const writeAuthorFile = () =>{
    fs.writeFileSync(authorFilePath, JSON.stringify(data),"utf-8")
}

export {readAuthorFile, writeAuthorFile};