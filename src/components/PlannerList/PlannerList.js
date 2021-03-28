import React, { useEffect, useState } from "react";
import Goal from "../Goal/Goal";
import PlannerForm from "../PlannerForm/PlannerForm";
import "./PlannerList.css";

export default function PlannerList() {
  const [goals, setGoals] = useState([{ id: 1, name: "bang" }]);
  const [editState, setEditState] = useState(false);
  const [input, setInput] = useState("");
  const [focusPoint, setFocusPoint] = useState(false);

  function handleChange(e) {
    setInput(e.target.value);
  }

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

  function removeAllGoals() {
    setGoals([]);
    localStorage.setItem("goalsArray", JSON.stringify([]));
  }

  function editGoal(id) {
    setEditState(!editState);
    goals.map((x) => {
      if (x.id === id) {
        setGoals([x]);
        setInput(x.name);
      }
      return x;
    });
  }

  function turnOffEditMode(e) {
    e.preventDefault();
    let editedGoalID = goals[0].id;
    let loadGoals = [...JSON.parse(localStorage.getItem("goalsArray"))];
    let mappedGoals = loadGoals.map((x) => {
      if (x.id === editedGoalID) {
        x.name = input;
      }
      return x;
    });
    setGoals(mappedGoals);
    localStorage.setItem("goalsArray", JSON.stringify(mappedGoals));
    setEditState(!editState);
    setInput("");
    setFocusPoint(!focusPoint);
  }

  return (
    <div className="planner-list">
      <h1>Set A Goal Today!</h1>
      <PlannerForm
        onSubmit={addGoal}
        focusPoint={focusPoint}
        removeAllGoals={removeAllGoals}
      />
      {goals.map((goal) => {
        return (
          <Goal
            goal={goal}
            removeGoal={removeGoal}
            editGoal={editGoal}
            key={goal.id}
          />
        );
      })}
      {editState === true ? (
        <form onSubmit={turnOffEditMode}>
          <input
            type="text"
            autoFocus={true}
            placeholder="Add a goal"
            value={input}
            className="edit-input"
            onFocus={(e) => e.currentTarget.select()}
            onChange={handleChange}
          />
        </form>
      ) : null}
    </div>
  );
}
