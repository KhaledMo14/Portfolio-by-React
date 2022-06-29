import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";

function Shop() {
  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProduct(json));
  };
  const [product, setProduct] = useState([]);

  console.log(product);

  return (
    <div className="container">
      <h2 className="text-center">Shop</h2>

      {product.length > 0 
       ? 
      (
        <div className="row">
          {product.map((item, index) => {
            return (
              <Link
                className="col-md-4 my-3"
                to={`/product/${item.id}`}
                key={index}
              >
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={item.image} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text> {item.price} $</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            );
          })}
        </div>
      ) : (

        <div className="row justify-content-center mx-auto mt-5">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
    </div>
  );
}

export default Shop;