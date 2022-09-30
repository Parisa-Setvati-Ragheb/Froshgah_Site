import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const item=[
    {name:"home",to:"/"},
    {name:"about",to:"/About"},
    {name:"cart",to:"/Cart"},
]
const Navigation = () => {
    return ( 
        <nav className={styles.nav}>
            <ul>
                {item.map((item)=>{
                    return(<li key={item.to}>
                        <NavLink className={styles.link} to={item.to}>{item.name}</NavLink>
                    </li>)
                })}
            </ul>
        </nav>

     );
}
 
export default Navigation;