import React from "react";
import "./Welcome.css";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, translateX: 800 },
  show: { opacity: 1, translateX: 0 },
};

export default function Welcome() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={variants}
      className="hero"
    >
      <div className="herowrapper">
        <h1>Set New Goals Today.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at
          mollis nisi. Maecenas mattis ornare scelerisque. Fusce lacus libero,
          placerat id rutrum eu, volutpat maximus leo.{" "}
        </p>
      </div>
    </motion.div>
  );
}
