import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { ImCheckboxUnchecked } from "react-icons/im";
import { ImCheckboxChecked } from "react-icons/im";
import { FaEdit } from "react-icons/fa";
import "./Goal.css";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, translateX: 800 },
  show: { opacity: 1, translateX: 0 },
};

export default function Goal({ goal, removeGoal, editGoal, markChecked }) {
  const [check, setCheck] = useState(goal.checked);

  const planner = `goal-name ${goal.checked === true ? "linethrough" : ""}`;

  function findID() {
    removeGoal(goal.id);
  }

  function toggleCheck() {
    markChecked(goal.id, !check);
    setCheck(!check);
  }

  function edit() {
    editGoal(goal.id);
  }

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={variants}
      className="planner-goal"
    >
      <div className={planner}>{goal.name}</div>
      <AiFillDelete className="rubbish" onClick={findID} />
      {check === false ? (
        <ImCheckboxUnchecked className="unchecked" onClick={toggleCheck} />
      ) : (
        <ImCheckboxChecked className="checked" onClick={toggleCheck} />
      )}
      <FaEdit className="edit-button" onClick={edit} />
    </motion.div>
  );
}
