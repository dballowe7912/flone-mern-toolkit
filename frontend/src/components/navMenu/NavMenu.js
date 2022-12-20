import { Link } from "react-router-dom";
import clsx from "clsx";

const NavMenu = ({ menuWhiteClass, sidebarMenu }) => {
  
  return (
    <div
      className={clsx(sidebarMenu
        ? "sidebar-menu"
        : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`)}
    >
      <nav>
        <ul>
          <li>
            <Link to={process.env.PUBLIC_URL + "/shop-grid"}>
              {" "}
              {("shop")}
            </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/shop-grid"}>
              {("collection")}
            </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/about"}>
                {("about_us")}
            </Link>
          </li>
          <li>
              <Link to={process.env.PUBLIC_URL + "/contact"}>
                {("contact_us")}
              </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavMenu;
