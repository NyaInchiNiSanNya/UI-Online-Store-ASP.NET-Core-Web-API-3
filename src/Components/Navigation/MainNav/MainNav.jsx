import classes from './MainNav.module.css';
import './../../Layout.css';
import NavButton from './NavButton';
import logo from '../../../img/Log.png';

let MainNav = () => {
    return <div className={`${classes.main_nav_block} main_block`}>
      
      <img className={classes.logo} src={logo} alt='megumin-logo'></img>
      
      <div  className={classes.buttons}>
      <NavButton link='products/' label='Все товары'>Все товары</NavButton>
      <NavButton link='tags/' label='Поиск по тегам' >Поиск по тегам</NavButton>
      </div>
    
    </div>
  };
  
  export default MainNav;