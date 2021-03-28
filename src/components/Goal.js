import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { ImCheckboxUnchecked } from "react-icons/im";
import { ImCheckboxChecked } from "react-icons/im";
import { FaEdit } from "react-icons/fa";

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
      <AiFillDelete onClick={findID} />
      {check === false ? (
        <ImCheckboxUnchecked onClick={toggleCheck} />
      ) : (
        <ImCheckboxChecked onClick={toggleCheck} />
      )}
      <FaEdit onClick={edit} />
    </div>
  );
}
