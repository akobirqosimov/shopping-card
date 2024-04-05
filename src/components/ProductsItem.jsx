import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";

function ProductsItem({
  id,
  title,
  description,
  category,
  image,
  rating,
  addStore,
}) {
  return (
    <div className="border-2 border-slate-600  rounded-lg w-[350px] h-[550px] overflow-hidden relative ">
      <img src={image} alt={title} className="w-full h-[250px] object-cover" />
      <div className="p-4">
        <h4 className="font-semibold text-xl text-white ">{title}</h4>
        <p className="text-gray-500 font-medium mt-2">
          {description.slice(0, 60)} ...!!!
        </p>
        <ReactStars
          value={Math.floor(rating.rate)}
          count={5}
          edit={false}
          color2="#e5b109"
          size={24}
        />
        <div className="absolute left-2 right-2 bottom-2">
          <button
            onClick={() => addStore(id)}
            className="w-full py-2 bg-teal-700 text-white font-bold my-3"
          >
            Add to store
          </button>
          <Link
            to={`/detail/${id}`}
            className=" block text-center w-full py-2 bg-blue-500 text-white font-bold "
          >
            Detail
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductsItem;
