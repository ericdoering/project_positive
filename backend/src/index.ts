import express from "express";

const app = express();


app.listen(3000, () => {
    console.log("server is listening on port 3000...")
})

app.get('/', (req, res)=>{
    res.status(200);
    res.send("Welcome to root URL of Server");
});