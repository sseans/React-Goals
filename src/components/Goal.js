import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaCheckSquare } from "react-icons/fa";

export default function Goal({ goal }) {
  return (
    <div className="planner-goal">
      <div className="goal-name">{goal.name}</div>
      <AiFillDelete />
      <FaCheckSquare />
    </div>
  );
}
