import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactStars from "react-stars";

function Detail() {
  const [details, setDetails] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    const getProductDetail = async () => {
      try {
        const { data } = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setDetails(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProductDetail();
  }, []);
  return (
    <div className="container flex items-center py-5 gap-10">
      <div className="w-1/2 bg-red-950">
        <img
          src={details.image}
          alt={details.title}
          className="w-full h-[650px]"
        />
      </div>
      <div className="w-1/2">
        <h1 className="text-6xl font-bold text-white">{details.title}</h1>
        <p className="text-2xl text-gray-500 font-bold my-5">
          {details.description}
        </p>
        <ReactStars
          value={Math.floor(details?.rating?.rate)}
          count={5}
          edit={false}
          color2="#e5b109"
          size={40}
        />
        <h4 className="text-3xl font-bold text-red-900 ">${details.price}</h4>
      </div>
    </div>
  );
}

export default Detail;
