import { Routes, Route, Link } from "react-router-dom";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PostsPage } from "./pages/PostsPage";
import { FormPage } from "./pages/FormPage";
 
export default function App(){
  return (
    <>
    <header>
    <h1>Post Browser</h1>
    <Link to="/">HOME</Link> | <Link to="/posts">POSTS</Link> | <Link to="/posts/add">ADD NEW POST</Link>
    </header>
    <Routes>
      <Route path="/" element={<h2 id="title-top">HomePage</h2>} />
      <Route path="/posts" element={<PostsPage />} />
      <Route path="/posts/add" element={<FormPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    <footer>&copy; 2024 Myles' Post Page</footer>
    </>
  )
};