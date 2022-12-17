import React from "react";
import { Routes, Route, useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";


function Single_Item(data) {
  let { id } = useParams();
  const [product, setproduct] = useState();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setproduct(json));
  });

  const Show_product = () => {
    return(
    <div className="container mt-5 pt-5 border p-5 border-round" >
      <div className="col-md-6">
        <img
          style={{ height: "400px", width: "400px" }}
          src={product.image}
          alt=""
        />
      </div>
      <div className="col-md-6">
        <h4 className="text-uppercase text-black-50">{product.catagory}</h4>
        <h1 className="display-5">{product.title}</h1>
        <p className="lead">
          rating {product.rating && product.rating.rate}
          <i className="fa fa-star"></i>
          <h3 className="display-6 fw-bold my-4">${product.price}</h3>
          <p className="lead">{product.description}</p>
          <button className="btn btn-dark"> Addd to cart</button>
          <button className="btn btn-successl mx-5"> view cart</button>

        </p>
      </div>
    </div>);
  };
  return (
    <div style={{ fontSize: "50px" }}>

      {product ? <Show_product/> : <p className="container text-center">loading</p>}
    </div>
  );
}

export default Single_Item;
