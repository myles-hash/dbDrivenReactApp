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
    'INSERT INTO posts (title, content, category_id, likes) VALUES ($1, $2, $3, $4) RETURNING *',
    [title, content, category_id, 0]
  );

  res.json(result.rows[0]);
})

app.put('/posts/:postId/like', async (req, res) => {
  const postId = req.params.postId;


  await db.query('UPDATE posts SET likes = 1 - likes WHERE id = $1', [postId]);

  res.status(200).send('Post liked successfully');
});

app.delete('/posts/:id', async (req, res) => {
  const postId = req.params.id;

  const result = await db.query('DELETE FROM posts WHERE id = $1 RETURNING *', [postId]);

  res.json(result.rows[0]);
});

app.listen(8080, function() {
  console.log(`Server is running on port 8080`)
});

