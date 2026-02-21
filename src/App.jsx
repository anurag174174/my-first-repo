import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Article from "./pages/Article";
import Category from "./pages/Category";
import Layout from "./components/Layout";
import './App.css'


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:slug" element={<Article />} />
        <Route path="/category/:name" element={<Category />} />
      </Routes>
    </Layout>
  );
}

export default App;