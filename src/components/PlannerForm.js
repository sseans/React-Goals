import React, { useState } from "react";

export default function PlannerForm(props) {
  const [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onSubmit({
      key: Math.floor(Math.random() * 10000),
      name: input,
    });

    setInput("");
  }

  return (
    <form className="planner-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a goal"
        value={input}
        className="planner-input"
        onChange={handleChange}
      />
      <button className="planner-button">Add +</button>
    </form>
  );
}
