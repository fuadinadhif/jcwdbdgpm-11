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
SELECT * FROM articles; -- Read all
SELECT title, content FROM articles; -- Read all tapi ambil kolom title dan contentnya saja
SELECT * FROM articles WHERE title ILIKE 'c%'; -- Read all artikel yang title-nya dimulai dengan huruf 'c'
SELECT * FROM articles WHERE id = 6; -- Read all column untuk artikel dengan id = 6
SELECT * FROM articles ORDER BY likes ASC; -- Read all dan urutkan datanya ASC berdasarkan likes
SELECT * FROM articles ORDER BY likes DESC; -- Read all dan urutkan datanya DESC berdasarkan likes
SELECT * FROM articles ORDER BY likes DESC LIMIT 1; -- Read all dan urutkan datanya DESC berdasarkan likes tapi tampilkan satu saja
SELECT * FROM articles LIMIT 4 OFFSET 8; -- Read all dan skip 8 data awal, serta limit 4 data

-- Read Data (Aggregate Function)
-- SUM | COUNT | AVG | MAX | MIN
SELECT SUM(likes) FROM articles;
SELECT COUNT(*) FROM articles WHERE likes >= 100;
SELECT AVG(likes) FROM articles;
SELECT MAX(likes) FROM articles;
SELECT MIN(likes) FROM articles;

-- UPDATE
-- Update table
ALTER TABLE articles
ADD COLUMN likes INTEGER;

-- Update data
UPDATE articles
SET title = 'Wowwww content'
WHERE id = 6;

UPDATE articles
SET likes = 0;

-- DELETE
-- Delete data
DELETE FROM articles
WHERE id = 6;

/* ----------------------------------- -- ----------------------------------- */

-- 1. Create table authors and articles
-- Nama Kolom | Tipe Data Kolom | Constraint
CREATE TABLE authors (
  id SERIAL PRIMARY KEY,
  name VARCHAR(250) NOT NULL,
  email VARCHAR(250) NOT NULL UNIQUE,
  password VARCHAR(250) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE articles (
  id SERIAL PRIMARY KEY,
  author_id INTEGER,
  title VARCHAR(255) NOT NULL UNIQUE,
  content TEXT NOT NULL,
  likes INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  CONSTRAINT fk_author
    FOREIGN KEY (author_id)
    REFERENCES authors(id)
    ON DELETE CASCADE
);

-- 2. Tambah relasi antara tabel authors dengan table articles (JALANKAN HANYA JIKA TABLE ARTICLES TERLANJUR DIBUAT TANPA ADA RELASI SEBELUMNYA)
ALTER TABLE articles
ADD COLUMN author_id INTEGER,
ADD CONSTRAINT fk_author
FOREIGN KEY (author_id)
REFERENCES authors(id)
ON DELETE CASCADE;

ALTER TABLE articles
ADD COLUMN likes INTEGER DEFAULT 0;

-- 3. Tambah data table authors dan articles
INSERT INTO authors (id, name, email, password)
VALUES
  (1, 'Joko', 'joko@mail.com', 'Purwadhika123!'),
  (2, 'Budi', 'budi@mail.com', 'Purwadhika123!'),
  (3, 'Adi', 'adi@mail.com', 'Purwadhika123!');

INSERT INTO articles (author_id, title, content, likes)
VALUES
  (1, 'The Art of Focus', 'Finding clarity in a world full of digital noise.', 45),
  (1, 'Morning Rituals', 'How a simple cup of coffee can change your outlook.', 32),
  (1, 'Tech Trends 2026', 'A deep dive into the latest AI and robotics shifts.', 78),
  (1, 'Coffee vs. Tea', 'The age-old debate continues with new caffeine data.', 25),
  (1, 'Weekend Getaways', 'Top five hidden gems for a quick road trip.', 56),
  (1, 'Coding Best Practices', 'Why clean code is more important than fast code.', 89),
  (1, 'The Future of Work', 'Remote, hybrid, or back to the office?', 41),
  (2, 'Healthy Snacking', 'Quick bites that wont ruin your productivity.', 33),
  (2, 'Minimalist Living', 'How decluttering your desk declutters your mind.', 62),
  (2, 'Laughter Therapy', 'Why humor is essential for mental health.', 48),
  (2, 'Digital Detox', 'Finding balance in our always-connected world.', 71),
  (2, 'Productivity Hacks', 'Simple techniques to boost your daily output.', 55),
  (2, 'Learning Curves', 'How to master new skills efficiently.', 39),
  (2, 'Sleep Science', 'Understanding the importance of quality rest.', 64),
  (3, 'Sustainable Living', 'Small changes for a better planet.', 52),
  (3, 'Home Office Setup', 'Creating the perfect workspace at home.', 47),
  (3, 'Financial Freedom', 'Building wealth through smart decisions.', 68),
  (3, 'Travel Guide 2026', 'Must-visit destinations this year.', 73),
  (3, 'Mental Wellness', 'Strategies for inner peace and happiness.', 58),
  (3, 'Creative Writing', 'Unleashing your imagination on the page.', 42);

-- 4. Menghitung berapa banyak artikel yang setiap author punya (GROUP BY, HAVING, JOIN)
-- Inner Join
SELECT * FROM articles
JOIN authors ON articles.author_id = authors.id;

-- Right Join
SELECT * FROM articles
RIGHT JOIN authors ON articles.author_id = authors.id;

-- Left Join
SELECT * FROM articles
LEFT JOIN authors ON articles.author_id = authors.id;

SELECT author_id, COUNT(*) 
FROM articles 
GROUP BY author_id
HAVING COUNT(*) > 5;

SELECT articles.author_id, COUNT(articles), authors.name 
FROM articles
JOIN authors ON articles.author_id = authors.id
GROUP BY author_id
HAVING COUNT(*) > 5;

-- QUIZ
-- 1. Tampilkan title article bersama dengan nama penulisnya
SELECT articles.title, authors.name 
FROM articles 
JOIN authors ON articles.author_id = authors.id;

-- 2. Tampilkan nama author dan jumlah artikel yang dimiliki, urutkan dari yang terbanyak
SELECT authors.name as author_name, COUNT(articles.id) as total_articles
FROM authors
LEFT JOIN articles ON authors.id = articles.author_id
GROUP BY authors.id, authors.name
ORDER BY total_articles DESC;

-- 3. Pagination
SELECT * FROM articles
ORDER BY created_at
LIMIT 3
OFFSET 0;