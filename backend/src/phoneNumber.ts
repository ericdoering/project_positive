import express, { Request, Response } from 'express';
import { Pool } from 'pg';
import bodyParser from 'body-parser';
import pool from '../database/db';

const router = express.Router();

router.post('/phoneNumber', async (req: Request, res: Response) => {
    const { phoneNumber } = req.body;
  
    try {
      // Query the database to check if the phone number exists
      const result = await pool.query('SELECT * FROM users WHERE phone_number = $1', [phoneNumber]);
  
      if (result.rowCount === 0) {
        // Phone number is not taken
        return res.status(200).json({ message: 'Phone number is available.' });
      } else {
        // Phone number is already taken
        return res.status(400).json({ message: 'Phone number is already taken.' });
      }
    } catch (error) {
      console.error('Error checking phone number:', error);
      res.status(500).json({ message: 'Internal server error.' });
    }
  });

  export {router as phoneRouter}