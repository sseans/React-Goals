import React from "react";
import "./Nav.css";

const menuArr = [
  { name: "Goals", link: "/goals" },
  { name: "History", link: "/history" },
  { name: "Social", link: "/social" },
  { name: "Age Targets", link: "/agetargets" },
  { name: "Dashboard", link: "/dashboard" },
  { name: "Settings", link: "/settings" },
  { name: "Mail", link: "/mail" },
];

export default function Nav() {
  return (
    <div className="nav">
      <div className="navwrapper"></div>
    </div>
  );
}
