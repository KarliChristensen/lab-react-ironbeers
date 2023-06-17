import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="w-[100%] h-24 bg-blue-400 flex justify-center align">
      <Link className="text-white p-3 font-bold" to="/">Home</Link>
      <Link className="text-white p-3 font-bold" to="/beers">Beers</Link>
      <Link className="text-white p-3 font-bold" to="/new-beer">Random</Link>
      <Link className="text-white p-3 font-bold" to="/random-beer">Create-a-beer</Link>
    </div>
  );
}

export default Header;
