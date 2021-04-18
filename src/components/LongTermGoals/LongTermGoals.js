import React from "react";
import "./LongTermGoals.css";
import { FaEdit } from "react-icons/fa";

export default function LongTermGoals() {
  return (
    <div className="longtermgoals">
      <div className="longtermgoals__wrapper">
        <div className="goalname">
          <div className="goal"></div>
          <FaEdit />
        </div>
        <div className="goalcompletion">
          <div className="goalcompletionbar"></div>
        </div>
      </div>
    </div>
  );
}
