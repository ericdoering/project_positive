INSERT INTO users (first_name, last_name, phone_number, is_active) VALUES
('John', 'Doe', '1234567890', true),
('Jane', 'Smith', '9876543210', true),
('Michael', 'Johnson', '5555555555', false);

INSERT INTO task_days (user_id, day, time) VALUES
(1, 'Monday', '9:00 AM'),
(1, 'Wednesday', '2:00 PM'),
(2, 'Tuesday', '11:00 AM'),
(3, 'Friday', '3:00 PM');

INSERT INTO tasks (take_day_id, task) VALUES
(1, 'How did you make an impact today?'),
(2, '“Life should be touched, not strangled. ” — Ray Bradburys'),
(3, 'Newborn kittens born in Jamaica Queens Today!'),
(4, 'What time of the day do you feel the best?');