import express from "express";
import pool from "../database/db";
import bodyParser from "body-parser";



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

// Middleware to parse JSON body
app.use(bodyParser.json());


app.post("/register", async (req, res) => {

try {

    const Userpayload  = [
        req.body.firstName,
        req.body.lastName,
        req.body.phoneNumber,
    ];

    const messagePayload = [
        req.body.days,
        req.body.time,
        req.body.Messages
    ];



    // if (!payload) {
    //   return res.status(400).json({ error: 'Payload is required.' });
    // }

    // Acquire a client from the pool
    const client = await pool.connect();

    // Insert data into the database within a transaction
    try {
      await client.query('BEGIN');
      const query = 'INSERT INTO users (first_name, last_name, phone_number, is_active) VALUES ($1, $2, $3, true);';
      await client.query(query, Userpayload);
      await client.query('COMMIT');
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      // Release the client back to the pool
      client.release();
    }

    res.status(201).json({ message: 'Data added successfully.' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while adding data.' });
  }
});




