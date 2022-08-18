const express = require('express');
const app = express();

app.get('/teste', (req, res) => {
    res.send("resposta do express");
})

// Dotenv
require("dotenv").config();
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

// MongoDB
const { MongoClient, ObjectId } = require("mongodb");
const DB_URL = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.dff1c.mongodb.net/?retryWrites=true&w=majority`;

// mongodb connection
async function connectDB() {
    const client = await MongoClient.connect(DB_URL);
    console.log(client.getLogger());
    const db = client.db(DB_NAME);

    const prodCollection = db.collection(DB_COLLECTION);

    app.get('/search', async (req, res) => {
        const q = req.query.q;
        const result = await prodCollection.find({ resume: { $regex: new RegExp(q, "gi") } }).toArray();

        if (result.length > 0 && q.trim != "") {
            res.status(200).send(result);
        } else {
            res.status(204).send();
        }
    });
}

connectDB();

module.exports = app;