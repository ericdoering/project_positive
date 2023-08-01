import express from "express";
import pool from "../database/db";
import { randomMessage } from "../utilities/messageGenerator"

const app = express();

pool.connect().then(client => {
    client.query("select * from users limit 1").then();
});


app.listen(3000, () => {
    console.log("server is listening on port 3000...")
})

console.log(randomMessage)

app.get('/', (req, res)=>{
    res.status(200);
    res.send("Welcome to root URL of Server");
});