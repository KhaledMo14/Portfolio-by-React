import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

function ProductDetails() {
  const url = useParams();

  useEffect(() => {
    getMyProduct();
  }, []);

  const getMyProduct = () => {
    fetch(`https://fakestoreapi.com/products/${url.id}`)
      .then((res) => res.json())
      .then((json) => setMyProduct(json));
  };

  const [myProuct, setMyProduct] = useState({});
  console.log(myProuct)
  
  return (
<>
    {
        myProuct

        ?
        
        <div className="text-center row justify-content-center mt-5">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={myProuct.image} />
          <Card.Body>
            <Card.Title>{myProuct.title}</Card.Title>
            <Card.Text>{myProuct.price}</Card.Text>
            <Button variant="primary">Buy Now</Button>
          </Card.Body>
        </Card>
      </div>

      :
       <div className="row justify-content-center mx-auto mt-5">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>

    }
</>
  );
}


export default ProductDetails;
