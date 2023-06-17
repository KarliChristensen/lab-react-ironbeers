import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Beers from "./pages/beers";
import NewBeer from "./pages/new-beer";
import Randombeer from "./pages/random-beer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/new" element={<NewBeer />} />
        <Route path="/random" element={<Randombeer />} />
      </Routes>
    </div>
  );
}

export default App;
