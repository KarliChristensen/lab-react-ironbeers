import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Beers from "./pages/Beers";
import Beer from "./pages/Beer";
import NewBeer from "./pages/New-beer";
import Randombeer from "./pages/Random-beer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/beers/:beerId" element={<Beer />} />
        <Route path="/random-beer" element={<Randombeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
