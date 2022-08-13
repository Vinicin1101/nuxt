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
    app.get('/search', async (req, res, next) => {
        const q = req.query.q;
        const result = await prodCollection.find({ resume: { $regex: new RegExp(q, "gi") } }).toArray();

        // Enviando o resultado para o cliente
        if (result.length > 0 && q.trim != "") {
            res.status(200).send(result);
        } else {
            res.status(204).send();
        }
    });
}

connectDB();

module.exports = app;