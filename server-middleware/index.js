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

    app.get('/mostrar', async (req, res, next) => {
        const result = await prodCollection.find({ resume: { $regex: new RegExp(" ", "gi") } }).toArray();

        res.status(200).send("Encontrei " + result.length + " resultados no banco de dados" + "<ol><li>"+ result[0]["title"] +"</li><li>"+ result[1]["title"] +"</li></ol>");
    });
}

connectDB();

module.exports = app;