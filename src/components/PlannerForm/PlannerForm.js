import React, { useState, useRef, useEffect } from "react";
import { RiDeleteBack2Fill } from "react-icons/ri";
import "./PlannerForm.css";
import { BiAddToQueue } from "react-icons/bi";

export default function PlannerForm(props) {
  const [input, setInput] = useState("");
  const inputElement = useRef();

  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, [props.focusPoint]);

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      name: input,
      checked: false,
    });
    setInput("");
  }

  function removeButton() {
    props.removeAllGoals();
  }

  return (
    <form className="planner-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a goal"
        value={input}
        className="planner-input"
        onChange={handleChange}
        autoFocus
        ref={inputElement}
      />
      <button className="planner-button">
        <BiAddToQueue />
      </button>
      <div className="deleteall">
        <RiDeleteBack2Fill onClick={removeButton} />
      </div>
    </form>
  );
}
