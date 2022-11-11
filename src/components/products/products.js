import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
function Products() {
  const [products, setProducts] = useState("");
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  return (
    <div className="row container-lg mx-auto">
      {products
        ? products.map((product) => (
            <div id={product.id} className="col-3">
              <div className="card ">
                <img
                  src={product.image}
                  className="card-img-top"
                  style={{ height: "300px" }}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    <NavLink to={`/products/${product.id}`} data={product}>view</NavLink>
                  </a>
                </div>
              </div>
            </div>
          ))
        : null}
    </div>
  );
}

export default Products;
