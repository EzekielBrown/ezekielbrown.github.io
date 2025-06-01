import React, { useEffect, useState, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../main.css";

const NavBar = () => {
  const { pathname, search } = useLocation();
  const projectCategories = ["PERSONAL", "PROFESSIONAL", "SCHOOL"];
  const shopCategories    = ["PCB", "PARTS", "KITS", "GUITARS"];

  const [currentCats, setCurrentCats] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const lastMode = useRef(null);

/* ====================================================
 * 1) UPDATE CATEGORIES ON PATHNAME CHANGE
 * ==================================================== */
  useEffect(() => {
    let newMode = null;
    if (pathname === "/projects") newMode = "projects";
    else if (pathname === "/shop") newMode = "shop";

    if (newMode === lastMode.current) {
      return;
    }

    const fadeDuration = 400;

    setIsVisible(false);

    const timeoutId = setTimeout(() => {
      if (newMode === "projects") {
        setCurrentCats(projectCategories);
      } else if (newMode === "shop") {
        setCurrentCats(shopCategories);
      } else {
        setCurrentCats([]);
      }

      setIsVisible(newMode !== null);
      lastMode.current = newMode;
    }, fadeDuration);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  const visibleClass = isVisible ? "visible" : "hidden";

/* ====================================================
 * 2) NAVBAR
 * ==================================================== */
  return (
    <nav className="top-bar">
      <div className="nav-row">
        <ul className="nav-links">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>
              PROJECTS
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop" className={({ isActive }) => (isActive ? "active" : "")}>
              SHOP
            </NavLink>
          </li>
        </ul>
      </div>

      <ul className={`category-links ${visibleClass}`}>
        {currentCats.map((cat) => {
          const expectedSearch = `?category=${cat}`;
          const isActiveCat =
            (pathname === "/projects" &&
              (search === expectedSearch || (search === "" && cat === "PERSONAL"))) ||
            (pathname === "/shop" &&
              (search === expectedSearch || (search === "" && cat === "GUITARS")));

          const basePath = pathname === "/projects" ? "/projects" : "/shop";
          return (
            <li key={cat}>
              <NavLink
                to={`${basePath}${expectedSearch}`}
                className={isActiveCat ? "active-category" : ""}
              >
                {cat}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
