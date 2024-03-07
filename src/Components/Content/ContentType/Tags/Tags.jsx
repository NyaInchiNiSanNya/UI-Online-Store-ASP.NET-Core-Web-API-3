import classes from './Tags.module.css';
import { BrowserRouter, NavLink } from "react-router-dom";

let Tags = (props) => {
    let pageCount=Math.ceil(props.totalTagsCount / props.pageSize);
    
    let pages = [];
    
    for(let i=1;i<=pageCount;i++){
      pages.push(i);
    }
  
    return (
        <div>
        <div className={classes.grid}>
          {props.tags.map(tag =>
            <div key={tag.id}>
                <NavLink to={`/products/tag/${tag.id}`}>
              <h3 style={{ margin: '0px' }}>{tag.name}</h3>
              </NavLink>
            </div>
          )}
        </div>
        
        <div>
            {pages.map(pageNumber=>{
              return <a 
              className={`${props.currentPage === pageNumber && classes.selectedPage} ${classes['custom-button-2']} ${classes['custom-button-3']}`} 
              onClick={(e) => {props.onPageChanged(pageNumber);}}
            >
              {pageNumber}
            </a>
            })}
          </div>
        </div>
      );
  };
  
  export default Tags;