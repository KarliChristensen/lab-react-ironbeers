import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Beer() {
  const [beer, setBeer] = useState({});
  const { beerId } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((res) => {
        setBeer(res.data);
      });
  }, [beerId]);

  return (
    <div className="flex justify-center flex-col items-center p-20">
      <div className="aspect-w-3 aspect-h-4">
        <img className="max-h-60 object-cover" src={beer.image_url} alt={beer.name} />
      </div>
      <div className="p-5 flex text-left">
        <div className="flex flex-col">
          <h2 className="font-bold ">Name: {beer.name}</h2>
          <h3 className="text-gray-500">{beer.tagline}</h3>
          <div className="pt-4">
            <h4><span className="font-bold">First brewed: </span>{beer.first_brewed}</h4>
            <h5><span className="font-bold">Attenuation level: </span>{beer.attenuation_level}</h5>
            <h6><span className="font-bold">Description: </span>{beer.description}</h6>
            <p className="pt-5 text-xs text-gray-400">
              Created by: {beer.contributed_by}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Beer;
