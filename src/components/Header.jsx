import React from "react";
import houseIcon from "../assets/Daco_4812335.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="w-[100%] h-24 bg-blue-400 flex justify-center align flex-col">
      <div className="flex justify-center">
        <Link className="text-white p-3 font-bold" to="/">
          <img src={houseIcon} alt="home icon" className="h-10" />
        </Link>
      </div>
      <div>
        <Link className="text-white p-3 font-bold" to="/beers">
          Beers
        </Link>
        <Link className="text-white p-3 font-bold" to="/random-beer">
          Random
        </Link>
        <Link className="text-white p-3 font-bold" to="/new-beer">
          Create-a-beer
        </Link>
      </div>
    </div>
  );
}

export default Header;
