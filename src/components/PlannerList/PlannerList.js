import React, { useEffect, useState } from "react";
import Goal from "../Goal/Goal";
import PlannerForm from "../PlannerForm/PlannerForm";
import "./PlannerList.css";

export default function PlannerList() {
  const [goals, setGoals] = useState([{ id: 1, name: "bang" }]);
  const [editState, setEditState] = useState(false);
  const [input, setInput] = useState("");
  const [focusPoint, setFocusPoint] = useState(false);

  function setLocal(itemToBeStored) {
    localStorage.setItem("goalsArray", JSON.stringify(itemToBeStored));
  }

  function getLocal() {
    return [...JSON.parse(localStorage.getItem("goalsArray"))];
  }

  function handleChange(e) {
    setInput(e.target.value);
  }

  useEffect(() => {
    if (localStorage.getItem("goalsArray") === null) {
      return;
    } else {
      let loadGoals = getLocal();
      setGoals(loadGoals);
    }
  }, []);

  function addGoal(goal) {
    if (goal.text === "") {
      return null;
    }
    let newGoals = [goal, ...goals];
    setGoals(newGoals);
    setLocal(newGoals);
  }

  function removeGoal(id) {
    let newArr = goals.filter((x) => (x.id !== id ? true : false));
    setLocal(newArr);
    setGoals(newArr);
  }

  function removeAllGoals() {
    setGoals([]);
    setLocal([]);
  }

  function editGoal(id) {
    setEditState(!editState);
    goals.map((x) => {
      if (x.id === id) {
        setGoals([x]);
        setInput(`Edit '${x.name}'`);
      }
      return x;
    });
  }

  function turnOffEditMode(e) {
    e.preventDefault();
    let editedGoalID = goals[0].id;
    let loadGoals = getLocal();
    let mappedGoals = loadGoals.map((x) => {
      if (x.id === editedGoalID) {
        x.name = input;
      }
      return x;
    });
    setGoals(mappedGoals);
    setLocal(mappedGoals);
    setEditState(!editState);
    setInput("");
    setFocusPoint(!focusPoint);
  }

  function markChecked(id, check) {
    let newGoals = goals.map((goal) => {
      if (goal.id === id) {
        goal.checked = check;
      }
      return goal;
    });
    setLocal(newGoals);

    let checkedGoals = goals.filter((x) => (x.checked === true ? true : false));
    localStorage.setItem("goalsHistory", JSON.stringify(checkedGoals));
  }

  return (
    <div className="planner-list">
      <h1>Set Goals Today</h1>
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
            markChecked={markChecked}
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
