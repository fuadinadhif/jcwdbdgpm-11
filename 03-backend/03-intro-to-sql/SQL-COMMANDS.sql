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