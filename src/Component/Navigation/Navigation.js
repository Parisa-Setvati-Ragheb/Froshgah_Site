import { NavLink } from "react-router-dom";
import { useCart } from "../Provider/Provider";
import styles from "./Navigation.module.css";
import { useAuth } from "../Provider/AuthProvider";

const item = [
  { name: "home", to: "/" },
  { name: "about", to: "/About" },
  { name: "cart", to: "/Cart" },
];

const Navigation = () => {
  const { cart } = useCart();
  const userInformation=useAuth();
  return (
    <nav className={styles.nav}>
      <ul>
        {item.map((item) => {
          return (
            <li key={item.to}>
              <NavLink
                className={(navData) =>
                  // console.log(navData)
                  navData.isActive ? styles.activelink : " "
                }
                // exact={item.exact || false}
                to={item.to}
              >
                {item.name}

                {item.name === "cart" ? (
                  <span className={styles.cartItem}>{cart.length}</span>
                ) : (
                  ""
                )}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <ul>
        <li>
          <NavLink
            className={(navData) =>
           
              navData.isActive ? styles.activelink : " "
            }
            to={userInformation ? "/profile" : "/login"}
          >
           {userInformation ?"Profile" :"login/signup"} 
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
