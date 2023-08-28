import express from "express";
import pool from "../database/db";
import bodyParser from "body-parser";
import { v4 as uuidv4 } from 'uuid';
import { convertTimeToTimestamp } from "../utilities/convertTimeToTimestamp";
import { generateRandomMessage } from "../utilities/messageGenerator";
import { formatTime } from "../utilities/time_formatter";




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














console.log(generateRandomMessage())


const userUUID = uuidv4();
const msgUUID = uuidv4()



app.post("/register", async (req, res) => {

try {

    const userPayload  = [
        userUUID,
        req.body.firstName,
        req.body.lastName,
        req.body.phoneNumber,
    ];

    let unConvertedTime = formatTime(req.body.time.hour, req.body.time.minute, req.body.time.timeOfDay)
    let convertedTime = convertTimeToTimestamp(unConvertedTime)


    const messagePayload = [
        msgUUID,
        userUUID,
        req.body.days[0],
        convertedTime,
        req.body.Messages.Quotes,
        req.body.Messages['Calls to Action'],
        req.body.Messages.Questions 
    ];

    


    // if (!payload) {
    //   return res.status(400).json({ error: 'Payload is required.' });
    // }

    // Acquire a client from the pool
    const client = await pool.connect();

    // Insert data into the database within a transaction
    try {
      await client.query('BEGIN');
      const userQuery = 'INSERT INTO users (id, first_name, last_name, phone_number, is_active) VALUES ($1, $2, $3, $4, true);'
      const messageQuery = "INSERT INTO messages (id, user_id, day, send_time, quotes, calls_to_action, gratitude_questions) VALUES ($1, $2, $3, $4, $5, $6, $7);"
      await client.query(userQuery, userPayload);
      await client.query(messageQuery, messagePayload)
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





