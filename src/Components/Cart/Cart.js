import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Button } from "react-bootstrap";
import "./Cart.css";
const Cart = (props) => {
  const { cartOfWriter } = props;

  let total = 0;
  for (const writer of cartOfWriter) {
    total = total + writer.salary;
  }
  return (
    <div>
      <h1>Assemble Summary</h1>
      <div className="cart-summary">
        <h3>
          <FontAwesomeIcon icon={faUser} /> Hired Writers:{cartOfWriter.length}
        </h3>
        <h3>Total: ${total}</h3>
        <h3>Hired Writer's Name:</h3>
        {cartOfWriter.map((writer) => (
          <li>{writer.name}</li>
        ))}

        <Button variant="primary" className="mt-3">
          Hire Now
        </Button>
      </div>
    </div>
  );
};

export default Cart;
