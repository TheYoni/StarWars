import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

function MainNavigation() {
  const links = [
    { id: "1", navigateTo: "/", label: "Home" },
    { id: "2", navigateTo: "/charecters", label: "Charecters" },
    { id: "3", navigateTo: "/planets", label: "Planets" },
    { id: "4", navigateTo: "/starships", label: "Starships" },
  ];
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          {links.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.navigateTo}
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
