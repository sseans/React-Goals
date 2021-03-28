import React, { useEffect, useState } from "react";
import Goal from "./Goal";
import PlannerForm from "./PlannerForm";

export default function PlannerList() {
  const [goals, setGoals] = useState([{ id: 1, name: "bang" }]);

  useEffect(() => {
    if (localStorage.getItem("goalsArray") === null) {
      return;
    } else {
      console.log(...JSON.parse(localStorage.getItem("goalsArray")));
      let loadGoals = [...JSON.parse(localStorage.getItem("goalsArray"))];
      setGoals(loadGoals);
    }
  }, []);

  function addGoal(goal) {
    if (goal.text === "") {
      return null;
    }
    let newGoals = [goal, ...goals];
    setGoals(newGoals);
    localStorage.setItem("goalsArray", JSON.stringify(newGoals));
  }

  function removeGoal(id) {
    let newArr = goals.filter((x) => (x.id !== id ? true : false));
    localStorage.setItem("goalsArray", JSON.stringify(newArr));
    setGoals(newArr);
  }

  return (
    <div className="planner-list">
      <h1>Set A Goal Today!</h1>
      <PlannerForm onSubmit={addGoal} />
      {goals.map((goal) => {
        return <Goal goal={goal} removeGoal={removeGoal} key={goal.id} />;
      })}
    </div>
  );
}
