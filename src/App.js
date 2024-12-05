import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Trending from "./app/Trending";
import Movies from "./app/Movies";
import Header from "./app/Header";
import Search from "./app/Search";
import Error from "./app/Error";
import AddMovie from './app/AddMovie';
import GenerateMovies from './app/Generate';


export default function App() {
  return (

    <div>
      {/* Page contents n stuff goes here */}
      <Header />
      {/* <Nav />*/}
      <Routes>
        <Route path="/" element={<Trending />} exact />
        <Route path="/movies" element={<Movies />} />
        <Route path="/add-movie" element={<AddMovie />} />
        <Route path="/add-movie/:name/:director/:date" element={<AddMovie />} />
        <Route path="/generate" element={<GenerateMovies />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}