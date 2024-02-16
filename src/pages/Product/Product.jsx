import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import "./Product.css";

const Product = () => {
  const [typeEffect] = useTypewriter({
    words: ["...", "...", "..."],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <div className="Product">
      Coming Soon <span>{typeEffect}</span>
      {/* <Cursor style={{ color: "white" }} /> */}
    </div>
  );
};

export default Product;
