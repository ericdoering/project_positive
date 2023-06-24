import express from "express";
import pool from "./db";

const app = express();

pool.connect().then(client => {
    client.query("select * from users limit 1").then(console.log);

});



app.listen(3000, () => {
    console.log("server is listening on port 3000...")
})

app.get('/', (req, res)=>{
    res.status(200);
    res.send("Welcome to root URL of Server");
});