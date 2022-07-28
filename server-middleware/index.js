const express = require('express');
const app = express();

app.get('/teste', (req, res) => {
    res.send("resposta do express");
})

// MongoDB
const { MongoClient, ObjectId } = require("mongodb");
const DB_URL = `mongodb+srv://teste:teste@cluster0.dff1c.mongodb.net/?retryWrites=true&w=majority`;

// mongodb connection
async function connectDB() {
    const client = await MongoClient.connect(DB_URL);
    const db = client.db("Cronopedia");

    const prodCollection = db.collection("articles");

    // Rota [/mostrar?termo=alguma-coisa]
    app.get('/mostrar', async (req, res, next) => {
        const termo = req.query.termo;
        const result = await prodCollection.find({ resume: { $regex: new RegExp(termo, "gi") } }).toArray();

        if (result.length > 0 && termo.trim != "") {
            let lista = [];
            result.forEach(element => {
                lista += "<li>" + element["title"] + "</li>"
            });
            res.status(200).send("<h3>Encontrei " + result.length + " resultados no banco de dados </h3>" + " <br> <h2>Artigos encontrados</h2> <ol>"+ lista +"</ol>");
        }
    });
}

connectDB();

module.exports = app;