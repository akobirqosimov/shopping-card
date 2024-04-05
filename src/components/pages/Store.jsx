import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

function Store() {
  let [storeProduct, setStoreProduct] = useState([]);
  useEffect(() => {
    const storeData = JSON.parse(localStorage.getItem("product-store"));
    setStoreProduct(storeData);
  }, []);

  const deleteStoreProduct = (id) => {
    storeProduct = storeProduct.filter((item) => item.id !== id);
    setStoreProduct([...storeProduct]);
    localStorage.setItem("product-store", JSON.stringify(storeProduct));
  };

  return (
    <div className="pt-24 pb-5">
      {storeProduct.length === 0 ? (
        <h1 className="text-white text-center text-4xl font-bold ">
          Maxsulot mavjud emas !!!🤣🤣👍
        </h1>
      ) : (
        storeProduct.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between gap-4 bg-gray-500 mb-4 px-5 py-2"
          >
            <img
              className="w-32 h-32 rounded-full"
              src={item.image}
              alt={item.title}
            />
            <div className="text-left w-[70%]">
              <h2 className="text-4xl font-bold text-gray-300">{item.title}</h2>
              <h4 className="text-2xl font-bold text-gray-300 mt-4">
                $ {item.price}
              </h4>
            </div>
            <div>
              <button onClick={() => deleteStoreProduct(item.id)}>
                <FaTrash className="w-10 h-20 text-red-700" />
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Store;
