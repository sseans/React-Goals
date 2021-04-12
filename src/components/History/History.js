import { useState, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import "./History.css";

export default function History() {
  const [goalHistory, setGoalHistory] = useState([]);

  useEffect(() => {
    getHistory();
  }, []);

  function getHistory() {
    const loadedGoals = JSON.parse(localStorage.getItem("goalsHistory"));
    setGoalHistory(loadedGoals);
  }

  return (
    <div className="history">
      <div className="historywrapper">
        <div className="historytitle">Complete Goals</div>
        {goalHistory.length === 0 ? (
          <div className="emptyarray">
            There are no complete goals on record...
          </div>
        ) : (
          goalHistory.map((goal) => {
            return (
              <div key={goal.name} className="historygoal">
                <p>{goal.name}</p>
                <AiFillDelete />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
