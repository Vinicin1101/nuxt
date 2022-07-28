const express = require('express');
const json = require('body-parser/lib/types/json');

const app = express();

// teste de conexão com o banco de dados

// dotenv
require("dotenv").config();
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const PRODCOLLECTION = process.env.PRODCOLLECTION;

// MongoDB
const { MongoClient, ObjectId } = require("mongodb");
// const DB_URL = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.dff1c.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
const DB_URL = "mongodb+srv://teste:teste@cluster0.dff1c.mongodb.net/?retryWrites=true&w=majority"

// mongodb connection
async function connectDB() {
    const client = await MongoClient.connect(DB_URL);
    const db = client.db(DB_NAME);

    const articles = db.collection(ARTICLECOLLECTION);

    // Leitura de dados
    app.get('/teste', async (req, res, next) => {
        const result = await articles.find({ prod: { $regex: new RegExp(prod_name, "gi") } }).toArray().then(result => {
            res.status(200).send('resultado: ' + result);
        });
    });
}

connectDB();

module.exports = app;