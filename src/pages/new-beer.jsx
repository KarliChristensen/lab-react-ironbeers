import React, { useState } from "react";
import axios from "axios";

function Newbeer() {
  const [form, setForm] = useState({});

  const change = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", form)
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <div>
      <div className="pt-10">
        <form onSubmit={submit} className="flex flex-col justify-center">
          <div>
            <input
              className="rounded-3xl p-2 m-2 border-2 outline-none"
              onChange={change}
              type="text"
              name="name"
              placeholder="Name:"
            />
          </div>
          <div>
            <input
              className="rounded-3xl p-2 m-2 border-2 outline-none"
              onChange={change}
              type="text"
              name="tagline"
              placeholder="Tagline:"
            />
          </div>
          <div>
            <input
              className="rounded-3xl p-2 m-2 border-2 outline-none"
              onChange={change}
              type="text"
              name="description"
              placeholder="Description:"
            />
          </div>
          <div>
            <input
              className="rounded-3xl p-2 m-2 border-2 outline-none"
              onChange={change}
              type="text"
              name="first_brewed"
              placeholder="First Brewed:"
            />
          </div>
          <div>
            <input
              className="rounded-3xl p-2 m-2 border-2 outline-none"
              onChange={change}
              type="text"
              name="brewers_tips"
              placeholder="Brewers Tips:"
            />
          </div>
          <div>
            <input
              className="rounded-3xl p-2 m-2 border-2 outline-none"
              onChange={change}
              type="number"
              name="attenuation_level"
              placeholder="Attenuation Level:"
            />
          </div>
          <div>
            <input
              className="rounded-3xl p-2 m-2 border-2 outline-none"
              onChange={change}
              type="text"
              name="contributed_by"
              placeholder="Contributed By:"
            />
          </div>
          <div>
            <button className="rounded-3xl pt-2 pb-2 pl-6 pr-6 m-5 border-2 bg-blue-400">
              Add Beer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Newbeer;
