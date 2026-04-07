BEGIN;

UPDATE TABLE wallet
SET balance = 10
WHERE id = 1;

UPDATE TABLE wallet
SET balance = -10
WHERE id = 2;

if (failed) {
  ROLLBACK;
} else {
  COMMIT;
}

SELECT * FROM articles
WHERE title = "HELLO";