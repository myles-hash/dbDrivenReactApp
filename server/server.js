import pg from "pg";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const dbConnectionString = process.env.DATABASE_URL;
export const db = new pg.Pool({
  connectionString: dbConnectionString,
});

app.get('/posts', async (req, res) => {
    const result = await db.query(`
    SELECT posts.*, categories.name AS category_name
    FROM posts
    JOIN categories ON posts.category_id = categories.id
  `); 
    res.json(result.rows);
  });

app.post('/posts', async (req,res) => {
  const { title, content, category_id } = req.body;

  const result = await db.query(
    'INSERT INTO posts (title, content, category_id) VALUES ($1, $2, $3) RETURNING *',
    [title, content, category_id]
  );

  res.json(result.rows[0]);
})

app.listen(8080, function() {
  console.log(`Server is running on port 8080`)
});
