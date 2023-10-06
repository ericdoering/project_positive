import express from "express";
import pool from "../database/db";
import { v4 as uuidv4 } from 'uuid';
import { convertTimeToTimestamp } from "../utilities/convertTimeToTimestamp";
import { twilioTimeConverter } from "../utilities/twilioTimeConverter"
import { formatTime } from "../utilities/time_formatter";
import { twilioInitialMessage } from "../api/twilio/twilio"
import { twilioMessenger } from "../api/twilio/twilio";
import { randomMessageGenerator } from "../utilities/messageGenerator"


const router = express.Router();


router.post("/register", async (req, res) => {

  try {
    const databaseCount = await pool.query('SELECT COUNT(*) FROM users;');

    const count = parseInt(databaseCount.rows[0].count); // Convert count to an integer

  if (count > 40) {
    return res.status(400).json({ message: 'Database is full, admin must review before proceeding' });
  }

  } catch (error) {
    console.error('Error checking database size:', error);
    res.status(500).json({ message: 'Internal server error.' });
  };


try {
    const userUUID = uuidv4();
    const userPayload  = [
        userUUID,
        req.body.firstName,
        req.body.lastName,
        req.body.phoneNumber,
    ];

    let unConvertedTime = formatTime(req.body.time.hour, req.body.time.minute, req.body.time.timeOfDay);
    let convertedTime = convertTimeToTimestamp(unConvertedTime);
    let day = req.body.days[0]
    let time = req.body.time

    console.log("DAYYYYY", day)

    let twilioTime = twilioTimeConverter(time, day)

    console.log("TWILIO TIME!!!!!", twilioTime)


    const messagePayload = [
        uuidv4(),
        userUUID,
        req.body.days,
        convertedTime,
        req.body.Messages.Quotes, 
        req.body.Messages['Calls to Action'],
        req.body.Messages.Questions 
    ];

    let quotes = messagePayload[4];
    let calls_to_action = messagePayload[5];
    let questions = messagePayload[6];


    const randomMsg = await randomMessageGenerator(calls_to_action, questions, quotes);

    const client = await pool.connect();

    try {
      await client.query('BEGIN');
      const userQuery = 'INSERT INTO users (id, first_name, last_name, phone_number, is_active) VALUES ($1, $2, $3, $4, true);'
      const messageQuery = "INSERT INTO messages (id, user_id, day, send_time, quotes, calls_to_action, gratitude_questions) VALUES ($1, $2, $3, $4, $5, $6, $7);"
      await client.query(userQuery, userPayload);


    const days = req.body.days; 


    days.forEach((day: "string") => {
      const values = [
        uuidv4(), 
        messagePayload[1], 
        day,            
        messagePayload[3], 
        messagePayload[4], 
        messagePayload[5], 
        messagePayload[6]  
      ];

      client.query(messageQuery, values, (err, result) => {
        if (err) {
          console.error(`Error inserting data for ${day}:`, err);
        } else {
          console.log(`Data inserted for ${day}`);
        }
    });
  });

      await client.query('COMMIT');
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {

      client.release();
    }


    // twilioInitialMessage(req.body.firstName, req.body.phoneNumber);

    twilioMessenger(req.body.firstName, req.body.phoneNumber, twilioTime, randomMsg);
    

    res.status(201).json({ message: 'Data added successfully.' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while adding data.' });
  }
});

export { router as registerRouter };



