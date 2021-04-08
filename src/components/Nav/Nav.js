import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { MdAssignmentTurnedIn } from "react-icons/md";
import { MdBookmark } from "react-icons/md";
import { TiSocialTwitter } from "react-icons/ti";
import { ImTarget } from "react-icons/im";
import { MdDashboard } from "react-icons/md";
import { MdSettings } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import blankProfileImage from "../../Images/blank-profile.png";
import { motion } from "framer-motion";

const menuArr = [
  { name: "Goals", link: "/goals", icon: <MdAssignmentTurnedIn /> },
  { name: "History", link: "/history", icon: <MdBookmark /> },
  { name: "Social", link: "/social", icon: <TiSocialTwitter /> },
  { name: "Age Targets", link: "/agetargets", icon: <ImTarget /> },
  { name: "Dashboard", link: "/dashboard", icon: <MdDashboard /> },
  { name: "Settings", link: "/settings", icon: <MdSettings /> },
  { name: "Mail", link: "/mail", icon: <MdEmail /> },
];

const variants = {
  hidden: { opacity: 0, left: -500 },
  show: { opacity: 1, left: 0 },
};

export default function Nav() {
  let counter = 1;
  let idTag;

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={variants}
      className="nav"
    >
      <div className="navprofile">
        <Link className="profileframe" to="/">
          <img src={blankProfileImage} alt="Profile" />
        </Link>
        <p>Welcome back, Sean!</p>
      </div>
      <ul className="navwrapper">
        <div className="navcolorblock"></div>
        {menuArr.map((x) => {
          idTag = "button" + counter;
          counter++;

          return (
            <Link to={x.link} className="navlinks" key={idTag}>
              <li className="navbuttons" id={idTag}>
                {x.icon}
                <p>{x.name}</p>
              </li>
            </Link>
          );
        })}
        <div className="navcolorblock"></div>
      </ul>
    </motion.div>
  );
}
