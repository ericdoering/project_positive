import express from "express";
import pool from "../database/db";
import bodyParser from "body-parser";
import { registerRouter } from "./Register";
import { phoneRouter } from "./phoneNumber";


const app = express();

pool.connect().then(client => {
    client.query("select * from users limit 1").then();
});


app.listen(3456, () => {
    console.log("server is listening on port 3456...")
})

app.use(express.json());

app.get('/', (req, res)=> {
    res.status(200);
    res.send("Welcome to root URL of Server");
});

app.use(bodyParser.json());
app.use(registerRouter);
app.use(phoneRouter);
















