import './../../Layout.css';
import classes from './SearchLabel.module.css';
import HeaderButton from './HeaderButton';

let SearchLabel = ()=>{
    return <div className={classes.search}>
        <input className={classes.search_label} type="text" placeholder="Введите текст" />
    </div>
  };

  export default SearchLabel;