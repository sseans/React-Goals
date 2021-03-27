import React, { useState } from "react";

export default function GoalPlanner() {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="planner-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a goal"
        value={input}
        className="planner-input"
      />
      <button className="planner-button">Add goal.</button>
    </form>
  );
}
