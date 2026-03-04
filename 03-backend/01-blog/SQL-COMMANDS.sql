-- CREATE
-- Create database (skip)
-- Create table
CREATE TABLE IF NOT EXISTS articles (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL UNIQUE,
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
-- Create data
INSERT INTO articles (title, content)
VALUES ('Another content', 'Hihihi hahaha huhuhu');

INSERT INTO articles (title, content)
VALUES 
    ('The Art of Focus', 'Finding clarity in a world full of digital noise.'),
    ('Morning Rituals', 'How a simple cup of coffee can change your outlook.'),
    ('Tech Trends 2026', 'A deep dive into the latest AI and robotics shifts.'),
    ('Coffee vs. Tea', 'The age-old debate continues with new caffeine data.'),
    ('Weekend Getaways', 'Top five hidden gems for a quick road trip.'),
    ('Coding Best Practices', 'Why clean code is more important than fast code.'),
    ('The Future of Work', 'Remote, hybrid, or back to the office?'),
    ('Healthy Snacking', 'Quick bites that wont ruin your productivity.'),
    ('Minimalist Living', 'How decluttering your desk declutters your mind.'),
    ('Laughter Therapy', 'Why "Hihihi hahaha" might actually be good for you.');

-- READ
-- Read data
SELECT * FROM articles;
SELECT title, content FROM articles;
SELECT * FROM articles WHERE title ILIKE 'c%';
SELECT * FROM articles WHERE id = 6;

-- UPDATE
-- Update data
UPDATE articles
SET title = 'Wowwww content'
WHERE id = 6;

-- DELETE
-- Delete data
DELETE FROM articles
WHERE id = 6;