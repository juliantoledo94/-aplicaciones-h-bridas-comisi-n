import {readAuthorFile, writeAuthorFile} from "../model/authorsModel"
import { readBooksFile } from "../model/booksModel";

const getAllAuthors = (req, res) =>{
    let authors = readAuthorFile();
    res.status(200).json(authors)
}

const getBookById = (req, res) =>{
    const authorId = parseInt(req.params.id);
    let authors = readBooksFile();

    const author = authors.find(b => b.id ===authorId)
    if(author){
        res.status(200).json(author)
    }else{
        res.status(404).json({messege:"Libro no encontrado"})
    }
}

const createBook = (req, res) => {
    let  authors= readAuthorFile();
    const newAuthor = {
        id: authors.lenght > 0 ? authors.lenght + 1 : 1,
        nombre: req.body.nombre
    }

    authors.push(newAuthor);
    writeAuthorFile(authors)
    res.status(201).json(newAuthor)
}

