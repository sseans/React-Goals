import React from "react";
import "./Nav.css";
import { MdAssignmentTurnedIn } from "react-icons/md";
import { MdBookmark } from "react-icons/md";
import { TiSocialTwitter } from "react-icons/ti";
import { ImTarget } from "react-icons/im";
import { MdDashboard } from "react-icons/md";
import { MdSettings } from "react-icons/md";
import { MdEmail } from "react-icons/md";

const menuArr = [
  { name: "Goals", link: "/goals", icon: <MdAssignmentTurnedIn /> },
  { name: "History", link: "/history", icon: <MdBookmark /> },
  { name: "Social", link: "/social", icon: <TiSocialTwitter /> },
  { name: "Age Targets", link: "/agetargets", icon: <ImTarget /> },
  { name: "Dashboard", link: "/dashboard", icon: <MdDashboard /> },
  { name: "Settings", link: "/settings", icon: <MdSettings /> },
  { name: "Mail", link: "/mail", icon: <MdEmail /> },
];

export default function Nav() {
  return (
    <div className="nav">
      <ul className="navwrapper">
        {menuArr.map((x) => {
          return (
            <a href={x.link} className="navlinks">
              <li className="navbuttons">
                <p>
                  {x.icon}
                  {x.name}
                </p>
              </li>
            </a>
          );
        })}
      </ul>
    </div>
  );
}
