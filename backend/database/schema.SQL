

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL
  last_name VARCHAR(100) NOT NULL
  phone_number VARCHAR(20) NOT NULL UNIQUE
  is_active boolean
);


CREATE TABLE IF NOT EXISTS task_days (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users (id),
  day ENUM,
  time ENUM
);

CREATE TABLE IF NOT EXISTS tasks (
  id SERIAL PRIMARY KEY,
  take_day_id INTEGER REFERENCES take_days (id),
  task ENUM
)

-- users
-- user_tasks (id, user_id, task_type_id)
-- task_days (id, user_task_id, day, time)
-- ref_task_type (send_quote, ask_for_prompt, good_news, hopeful_message)