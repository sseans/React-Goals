import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { ImCheckboxUnchecked } from "react-icons/im";
import { ImCheckboxChecked } from "react-icons/im";
import { FaEdit } from "react-icons/fa";
import "./Goal.css";

export default function Goal({ goal, removeGoal, editGoal }) {
  const [check, setCheck] = useState(false);

  function findID() {
    removeGoal(goal.id);
  }

  function toggleCheck() {
    setCheck(!check);
  }

  function edit() {
    editGoal(goal.id);
  }

  return (
    <div className="planner-goal">
      <div className="goal-name">{goal.name}</div>
      <AiFillDelete className="rubbish" onClick={findID} />
      {check === false ? (
        <ImCheckboxUnchecked className="unchecked" onClick={toggleCheck} />
      ) : (
        <ImCheckboxChecked className="checked" onClick={toggleCheck} />
      )}
      <FaEdit className="edit-button" onClick={edit} />
    </div>
  );
}
