import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Writer from "../Writer/Writer";
import "./Writers.css";
const Writers = () => {
  const [writers, setWriters] = useState([]);
  useEffect(() => {
    fetch("./fakedb.json")
      .then((res) => res.json())
      .then((data) => setWriters(data));
  }, []);
  const [cartOfWriter, setCartOfWriter] = useState([]);
  const handleCart = (writer) => {
    const newWriters = [...cartOfWriter, writer];
    setCartOfWriter(newWriters);
  };
  return (
    <div className="whole-container">
      <div className="writer-container">
        {writers.map((writer) => (
          <Writer
            key={writer.key}
            writer={writer}
            handleCart={handleCart}
          ></Writer>
        ))}
      </div>
      <div className="cart">
        <Cart cartOfWriter={cartOfWriter}></Cart>
      </div>
    </div>
  );
};

export default Writers;
