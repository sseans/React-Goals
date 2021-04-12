import React from "react";
import { AiFillDelete } from "react-icons/ai";

export default function HistoryGoal({ goal, removeGoal }) {
  return (
    <div className="historygoal">
      <p>{goal.name}</p>
      <AiFillDelete
        onClick={() => {
          removeGoal(goal.id);
        }}
      />
    </div>
  );
}
