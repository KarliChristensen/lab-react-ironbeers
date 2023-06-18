import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Beers() {
  const [data, setData] = useState([]);

  const url = "https://ih-beers-api2.herokuapp.com/beers";
  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data);
    });
  }, []);

  console.log(data);

  return (
    <div>
      {data.map((beer) => {
        return (
          <div>
            <div className="p-5 flex ">
              <div>
                <Link to={`/beers/${beer._id}`}>
                  <img className="max-h-24" src={beer.image_url} alt={beer.name} />
                </Link>
              </div>
              <div className="flex flex-col pl-5">
                <Link to={`/beers/${beer._id}`}>
                  <h2>{beer.name}</h2>
                  <h3 className="text-gray-500">{beer.tagline}</h3>
                  <p className="pb-5 text-xs text-gray-400">Created by: {beer.contributed_by}</p>
                </Link>
              </div>
            </div>
            <hr className="p-5"/>
          </div>
        );
      })}
    </div>
  );
}

export default Beers;
