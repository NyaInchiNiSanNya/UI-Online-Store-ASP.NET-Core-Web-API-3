import { BrowserRouter, NavLink } from "react-router-dom";
import classes from './HeaderButtons.module.css';
import './../../Layout.css';

let HeaderButton = (props) => {
    return <div>
      <NavLink to={`/${props.link}`}>
        <button className={`${classes.button} button`}>{props.label}</button>
      </NavLink>
    </div>
};
  
  export default HeaderButton;