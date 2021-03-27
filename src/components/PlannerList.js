import React, { useEffect, useState } from "react";
import Goal from "./Goal";
import PlannerForm from "./PlannerForm";

export default function PlannerList() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("goalsArray") === null) {
      return;
    } else {
      setGoals(...JSON.parse(localStorage.getItem("goalsArray")));
    }
  }, []);

  function addGoal(goal) {
    if (goal.text == "") {
      return null;
    }

    setGoals([goal, ...goals]);

    localStorage.setItem("goalsArray", JSON.stringify(goals));
  }

  return (
    <div className="planner-list">
      <h1>Set A Goal Today!</h1>
      <PlannerForm onSubmit={addGoal} />
      {goals.map((goal) => {
        return <Goal goal={goal} />;
      })}
    </div>
  );
}
