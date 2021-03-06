import { useState, useEffect } from "react";
import "./History.css";
import HistoryGoal from "./HistoryGoal";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, translateX: 800 },
  show: { opacity: 1, translateX: 0 },
};

export default function History() {
  const [goalHistory, setGoalHistory] = useState([]);

  useEffect(() => {
    getHistory();
  }, []);

  function getHistory() {
    const loadedGoals = JSON.parse(localStorage.getItem("goalsHistory"));
    setGoalHistory(loadedGoals);
  }

  function setHistory(setWith) {
    localStorage.setItem("goalsHistory", JSON.stringify(setWith));
  }

  function removeGoal(id) {
    const removedGoalArray = goalHistory.filter((goal) =>
      goal.id !== id ? true : false
    );
    setGoalHistory(removedGoalArray);
    setHistory(removedGoalArray);
  }

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={variants}
      className="history"
    >
      <div className="historywrapper">
        <div className="historytitle">Complete Goals</div>
        {goalHistory.length === 0 ? (
          <div className="emptyarray">
            There are no complete goals on record...
          </div>
        ) : (
          goalHistory.map((goal) => {
            return (
              <HistoryGoal
                key={goal.name}
                goal={goal}
                removeGoal={removeGoal}
              />
            );
          })
        )}
      </div>
    </motion.div>
  );
}
