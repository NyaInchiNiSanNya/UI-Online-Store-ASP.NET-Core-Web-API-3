import classes from './NavBar.module.css';
import './../../Layout.css';
import HeaderButton from './HeaderButton';
import SearchLabel from './SearchLabel';
let NavBar = ()=>{
    return <div className={`${classes.main_nav_block} main_block`}>
<div className={`${classes.search}`}>
<SearchLabel></SearchLabel>
<HeaderButton link='' label='Поиск'>Поиск</HeaderButton>
</div>
      <div className={`${classes.buttons}`}>
      <HeaderButton link='settings' label='Настройки'>Спорт</HeaderButton>
      <HeaderButton link='admin' label='Админ'>Наука</HeaderButton>
      <HeaderButton link='login' label='Вход'>Лайфстайл</HeaderButton>
      </div>
    </div>
  };
  
  export default NavBar;