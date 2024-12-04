import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./app/Layout";
import Home from "./app/Home";
import Nav from "./app/Nav";
import Header from "./app/Header";
import NoPage from "./app/NoPage";

export default function App() {
  return (

    <div>
      {/* Page contents n stuff goes here */}
      <Header />
      <Nav />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </div>
  );
}