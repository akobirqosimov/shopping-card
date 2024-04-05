import React, { useEffect, useState } from "react";
import Header from "../Header";
import axios from "axios";
import ProductsItem from "../ProductsItem";
import { toast } from "react-toastify";

function Home() {
  const [products, setProducts] = useState([]);
  const [store, setStore] = useState(
    JSON.parse(localStorage.getItem("product-store"))
      ? JSON.parse(localStorage.getItem("product-store"))
      : []
  );

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios("https://fakestoreapi.com/products");
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const addStore = (id) => {
    const isExist = store.some((item) => item.id === id);
    if (!isExist) {
      const storegeData = products.filter((item) => item.id == id);
      store.push(storegeData[0]);
      setStore([...store]);
      localStorage.setItem("product-store", JSON.stringify(store));
      toast("Maxsulot savadga qo'shildi", {
        autoClose: 500,
        style: {
          background: "#111",
          color: "#fff",
        },
      });
    } else {
      toast("Bu maxsulot savadga mavjud", {
        autoClose: 500,
        style: {
          background: "red",
          color: "#fff",
        },
      });
    }
  };

  return (
    <div className="container pt-24 pb-5">
      <div className="flex justify-center flex-wrap gap-4">
        {products.length &&
          products.map((product) => (
            <ProductsItem key={product.id} {...product} addStore={addStore} />
          ))}
      </div>
    </div>
  );
}

export default Home;
