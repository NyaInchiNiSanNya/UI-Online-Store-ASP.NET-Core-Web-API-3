import { BrowserRouter, NavLink } from "react-router-dom";
import classes from './NavButton.module.css';
import './../../Layout.css';

let NavButton = (props) => {
    return <div>
      <NavLink to={`/${props.link}`}>
        <button className={`${classes.button} button`}>{props.label}</button>
      </NavLink>
    </div>
};
  
  export default NavButton;