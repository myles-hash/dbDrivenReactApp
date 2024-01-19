CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT,
  category_id INT REFERENCES categories(id)
);

INSERT INTO categories(name) VALUES('Technology');
INSERT INTO categories(name) VALUES('Lifestyle');
INSERT INTO categories(name) VALUES('Education');

INSERT INTO posts(title, content, category_id) VALUES('Tech test title', 'Tech test content', 1);
INSERT INTO posts(title, content, category_id) VALUES('Life test title', 'Life test content', 2);
INSERT INTO posts(title, content, category_id) VALUES('Educate test title', 'Educate test content', 3);

ALTER TABLE posts
ADD COLUMN likes INT DEFAULT 0;
