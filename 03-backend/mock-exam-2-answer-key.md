# Mock Exam – Node.js, Express.js, PostgreSQL & Prisma

---

**1. What is the role of `package.json` in a Node.js application?**

- A. It compiles JavaScript files into machine code for faster execution
- B. It stores project metadata, dependencies, and scripts for a Node.js application ✅
- C. It acts as the entry point that starts the Node.js web server
- D. It is a configuration file used only by the operating system to locate Node.js

---

**2. How do you create a POST route endpoint in Express.js following proper REST conventions? (e.g. for creating a new user)**

- A. `app.post('/users/create', (req, res) => { ... })`
- B. `app.post('/users', (req, res) => { res.send() })` ✅
- C. `app.create('/users', (req, res) => { ... })`
- D. `app.route('/users', 'POST', (req, res) => { ... })`

---

**3. What is the difference between DELETE and PATCH in the context of a REST API?**

- A. DELETE and PATCH are interchangeable; both modify existing resources
- B. DELETE removes a resource; PATCH partially updates an existing resource ✅
- C. DELETE partially updates a resource; PATCH removes it entirely
- D. DELETE fetches a resource for removal preview; PATCH permanently deletes it

---

**4. How do you configure a custom middleware function in Express.js, assuming `app` is the variable declared for Express?**

- A. `app.add((req, res, next) => { next(); })`
- B. `app.register((req, res, next) => { next(); })`
- C. `app.use((req, res, next) => { next(); })` ✅
- D. `app.middleware((req, res, next) => { next(); })`

---

**5. Which of the following best describes the role of middleware in Express.js?**

- A. Middleware is a database driver that connects Express to PostgreSQL
- B. Middleware is a function that has access to the request and response objects and can process or modify them before reaching the route handler ✅
- C. Middleware is responsible for rendering HTML views and returning them to the browser
- D. Middleware is a built-in Express module used only for serving static files

---

**6. What is the purpose of the `where` clause in Prisma queries?**

- A. It defines which fields of a record should be returned in the result
- B. It specifies the sorting order of the returned records
- C. It filters records based on a given condition ✅
- D. It limits the maximum number of records returned

---

**7. What is the main purpose of a GROUP BY clause in SQL?**

- A. To sort rows in ascending or descending order based on a column
- B. To join two tables together based on a matching column
- C. To group rows that share the same value in a specified column so aggregate functions can be applied ✅
- D. To filter individual rows before they are returned by the query

---

**8. Which SQL function is used to find the highest value in a numeric column?**

- A. `COUNT()`
- B. `MAX()` ✅
- C. `SUM()`
- D. `DISTINCT()`

---

**9. A REST API supporting pagination typically uses which two query parameters?**

- A. `start` and `finish`
- B. `index` and `length`
- C. `page` and `limit` ✅
- D. `from` and `take`

---

**10. What is the correct transaction block format in PostgreSQL to ensure multiple statements are executed atomically?**

- A. `START; ... END TRANSACTION;`
- B. `BEGIN TRANSACTION ... APPLY;`
- C. `BEGIN; ... COMMIT;` ✅
- D. `OPEN; ... CLOSE;`

---

**11. How do you create a new table in PostgreSQL with two columns where the first stores a numeric ID and the second stores a product name?**

- A. `CREATE TABLE products (id AUTOINCREMENT, name STRING);`
- B. `MAKE TABLE products (id NUMBER, name TEXT);`
- C. `CREATE TABLE products (id SERIAL PRIMARY KEY, name VARCHAR(255));` ✅
- D. `NEW TABLE products (id INT, name CHAR);`

---

**12. What is meant by a Primary Key (PK) in SQL and how is it used?**

- A. A PK is a column that references a row in another table to create a relationship
- B. A PK is a unique, non-null identifier for each row in a table, used to distinguish records from one another ✅
- C. A PK is an optional column that can contain duplicate values across rows
- D. A PK is a constraint that only allows numeric values to be stored in a column

---

**13. What is the correct SQL query to fetch all products belonging to a category named "electronics"?**

- A. `SELECT * FROM products WHERE categories.name = 'electronics';`
- B. `SELECT * FROM products, categories WHERE name = 'electronics';`
- C. `SELECT * FROM products JOIN categories ON products.category_id = categories.id WHERE categories.name = 'electronics';` ✅
- D. `SELECT products FROM categories WHERE categories.name = 'electronics';`

---

**14. Explain the concept of normalization in database design and why it is important.**

- A. Normalization is the process of adding more columns to a table to store computed values for faster reads
- B. Normalization is the process of organizing a database to reduce data redundancy and improve data integrity by dividing large tables into smaller related ones ✅
- C. Normalization is a backup strategy that creates duplicate copies of database tables
- D. Normalization is a technique for encrypting sensitive columns in a database table

---

**15. In Express.js, which error-handling middleware pattern is correct?**

- A. `app.use((req, res) => { res.status(500).send(err.message); })`
- B. `app.catch((err, req, res) => { res.status(500).send(err.message); })`
- C. `app.use((err, req, res, next) => { res.status(500).send(err.message); })` ✅
- D. `app.error((err, res) => { res.status(500).send(err.message); })`

---

**16. What is the purpose of the Prisma Migrate tool?**

- A. It automatically generates Express.js route handlers from the Prisma schema
- B. It provides a visual interface to manually edit records in the database
- C. It applies schema changes defined in `schema.prisma` to the actual database structure ✅
- D. It seeds the database with initial data by running JavaScript seed scripts

---

**17. Which Prisma method is used to retrieve multiple records from a table?**

- A. `prisma.user.findUnique()`
- B. `prisma.user.getAll()`
- C. `prisma.user.findMany()` ✅
- D. `prisma.user.selectAll()`

---

**18. Which of the following SQL statements is used to update existing data in a PostgreSQL table?**

- A. `MODIFY products SET price = 10 WHERE id = 1;`
- B. `UPDATE products SET price = 10 WHERE id = 1;` ✅
- C. `ALTER products SET price = 10 WHERE id = 1;`
- D. `CHANGE products SET price = 10 WHERE id = 1;`

---

**19. Which Express.js middleware is required to parse JSON request bodies?**

- A. `app.use(express.urlencoded())`
- B. `app.use(express.static())`
- C. `app.use(express.text())`
- D. `app.use(express.json())` ✅

---

**20. If we successfully create a new record in the database, which HTTP response code is most appropriate? If the user is authenticated but does not have permission to perform the action, what response code should be returned?**

- A. 200 for successful creation; 401 for forbidden access
- B. 201 for successful creation; 403 for forbidden access ✅
- C. 204 for successful creation; 401 for forbidden access
- D. 200 for successful creation; 404 for forbidden access

---

**21. Given this API handler:**

```js
const product = await prisma.product.findUnique({
  where: { title: req.params.title },
});
```

**The query always returns null. Why?**

- A. The `where` clause is missing a required `id` field
- B. `findUnique` only works on fields marked as unique in the schema ✅
- C. Prisma does not support querying by string fields
- D. The result must be awaited inside a try/catch block

---

**22. The Product table contains thousands of records. You want to return only the fields: `id` and `price`. Choose the correct answer.**

```js
await prisma.product.findMany();
```

- A. `attributes: { id: true, price: true }`
- B. `pick: ['id', 'price']`
- C. `columns: { id: 1, price: 1 }`
- D. `select: { id: true, price: true }` ✅

---

**23. The API returns incorrect pages. Why?**

```js
await prisma.post.findMany({
  skip: req.query.page,
  take: 10,
});
```

- A. `take` should equal the page number multiplied by 10
- B. `skip` should be `(page - 1) * limit` ✅
- C. `req.query.page` returns a string and must be converted to an integer first
- D. Prisma's `findMany` does not support `skip` and `take` together

---

**24. Based on the three tables below, select the correct query to get the names of employees who have a salary above the average salary across all departments.**

```sql
CREATE TABLE Departments (
  dept_id INT PRIMARY KEY,
  dept_name VARCHAR(255) NOT NULL
);

CREATE TABLE Employees (
  employee_id INT PRIMARY KEY,
  employee_name VARCHAR(255) NOT NULL,
  dept_id INT,
  FOREIGN KEY (dept_id) REFERENCES Departments(dept_id)
);

CREATE TABLE Salaries (
  salary_id INT PRIMARY KEY,
  employee_id INT,
  dept_id INT,
  amount DECIMAL(10, 2),
  FOREIGN KEY (employee_id) REFERENCES Employees(employee_id),
  FOREIGN KEY (dept_id) REFERENCES Departments(dept_id)
);
```

- A. `SELECT e.employee_name FROM Employees e JOIN Salaries s ON e.employee_id = s.employee_id WHERE s.amount > AVG(s.amount);`
- B. `SELECT e.employee_name FROM Employees e JOIN Salaries s ON e.employee_id = s.employee_id HAVING s.amount > AVG(s.amount);`
- C. `SELECT e.employee_name FROM Employees e JOIN Salaries s ON e.employee_id = s.employee_id WHERE s.amount > (SELECT AVG(amount) FROM Salaries);` ✅
- D. `SELECT e.employee_name FROM Employees e WHERE EXISTS (SELECT 1 FROM Salaries s WHERE s.amount > AVG(s.amount));`

---

**25. Based on the three tables below, how do you display the category names, product names, and total quantity sold for each product in the "Electronics" category. Sort the results by total quantity sold in descending order.**

```sql
CREATE TABLE Categories (
  category_id INT PRIMARY KEY,
  category_name VARCHAR(255) NOT NULL
);

CREATE TABLE Products (
  product_id INT PRIMARY KEY,
  product_name VARCHAR(255) NOT NULL,
  category_id INT,
  FOREIGN KEY (category_id) REFERENCES Categories(category_id)
);

CREATE TABLE Orders (
  order_id INT PRIMARY KEY,
  product_id INT,
  category_id INT,
  quantity INT NOT NULL,
  FOREIGN KEY (product_id) REFERENCES Products(product_id),
  FOREIGN KEY (category_id) REFERENCES Categories(category_id)
);
```

- A. `SELECT c.category_name, p.product_name, SUM(o.quantity) AS total_quantity FROM Orders o JOIN Products p ON o.product_id = p.product_id JOIN Categories c ON p.category_id = c.category_id WHERE c.category_name = 'Electronics' ORDER BY total_quantity DESC;`
- B. `SELECT c.category_name, p.product_name, COUNT(o.quantity) AS total_quantity FROM Orders o JOIN Products p ON o.product_id = p.product_id JOIN Categories c ON p.category_id = c.category_id WHERE c.category_name = 'Electronics' GROUP BY c.category_name, p.product_name ORDER BY total_quantity DESC;`
- C. `SELECT c.category_name, p.product_name, SUM(o.quantity) AS total_quantity FROM Orders o JOIN Products p ON o.product_id = p.product_id JOIN Categories c ON p.category_id = c.category_id WHERE c.category_name = 'Electronics' GROUP BY c.category_name, p.product_name ORDER BY total_quantity DESC;` ✅
- D. `SELECT c.category_name, p.product_name, SUM(o.quantity) AS total_quantity FROM Products p JOIN Categories c ON p.category_id = c.category_id WHERE c.category_name = 'Electronics' GROUP BY c.category_name, p.product_name ORDER BY total_quantity DESC;`

---

_✅ = Correct answer_
