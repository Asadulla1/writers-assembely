import React from "react";
import "./Writer.css";
import { Card, Button } from "react-bootstrap";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faSoca } from "@fortawesome/free-solid-svg-icons";
const Writer = (props) => {
  const { name, img, bestbook, age, country, salary, rating } = props.writer;
  return (
    <div>
      <Card className="p-2 m-3 text-center shadow-lg rounded rounded-3">
        <Card.Img variant="top" src={img} className="img-resize mx-auto" />
        <Card.Body>
          <Card.Title>Name: {name}</Card.Title>
          <Card.Text className="custom-font-weight">
            <p>Best Book: {bestbook}</p>
            <p>Age: {age}</p>
            <p>Country: {country}</p>
            <p>Salary: ${salary}</p>
          </Card.Text>
          <Button
            variant="primary"
            onClick={() => props.handleCart(props.writer)}
          >
            <FontAwesomeIcon icon={faShoppingCart} /> Hire Me
          </Button>
          <br />
          <p>
            Rating:
            <Rating
              className="rating"
              initialRating={rating}
              readonly
              emptySymbol="far fa-star"
              fullSymbol="fas fa-star"
            />
          </p>
          <div className="font">
            <i className=" fab fa-facebook-square facebook"></i>
            <i className="fab fa-skype skype"></i>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Writer;
