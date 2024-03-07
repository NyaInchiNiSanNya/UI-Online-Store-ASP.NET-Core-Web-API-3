import classes from './Header.module.css';
import NavBar from './NavBar/NavBar';

let Header = ()=>{
    return <div className={classes.Header}>
        <NavBar></NavBar>
    </div>
  };
  
  export default Header;