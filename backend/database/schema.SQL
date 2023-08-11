

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  phone_number VARCHAR(20) NOT NULL UNIQUE,
  is_active boolean
);


CREATE TABLE IF NOT EXISTS messages (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users (id),
  day VARCHAR(100) NOT NULL,
  send_time TIMESTAMP,
  quotes boolean,
  calls_to_action boolean,
  graditude_questions boolean
);
