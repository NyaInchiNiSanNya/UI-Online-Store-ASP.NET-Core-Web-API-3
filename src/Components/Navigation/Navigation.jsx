import classes from './Navigation.module.css';
import MainNav from './MainNav/MainNav';

let Navigation = () => {
  return <div className={classes.Navigation}>
    <MainNav></MainNav>
  </div>
};

export default Navigation;