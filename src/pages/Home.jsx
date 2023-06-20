import React from "react";
import img1 from "../assets/beers.png";
import img2 from "../assets/new-beer.png";
import img3 from "../assets/random-beer.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div>
        <img src={img1} className="w-[100%]" alt="" />
        <Link to={`/beers/`}>
          <div className="p-10">
            <h1 className="font-bold text-4xl text-left pb-5">All Beers</h1>
            <p className="text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              eligendi dicta tempora quia! Et eveniet sit, suscipit unde hic
              reiciendis rerum? Praesentium, vel deleniti obcaecati nemo ipsum
              iste impedit debitis.
            </p>
          </div>
        </Link>
      </div>
      <div>
        <img src={img2} className="w-[100%]" alt="" />
        <Link to={`/random-beer/`}>
          <div className="p-10">
            <h1 className="font-bold text-4xl text-left pb-5">Random Beer</h1>
            <p className="text-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              autem, praesentium incidunt aut assumenda sint temporibus dolore
              nam perferendis quas officiis vero amet iure illo repudiandae
              tempore earum cum quo.
            </p>
          </div>
        </Link>
      </div>

      <div>
        <img src={img3} className="w-[100%]" alt="" />
        <Link to={`/new-beer/`}>
        <div className="p-10">
          <h1 className="font-bold text-4xl text-left pb-5">New Beer</h1>
          <p className="text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ea
            quos dolores expedita dicta magnam dolor, praesentium ullam aliquam,
            nostrum ut corporis, libero odit vitae ducimus id fuga. Quae, animi.
          </p>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
