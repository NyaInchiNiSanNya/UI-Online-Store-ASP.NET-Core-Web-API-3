import classes from './Products.module.css';

let Products = (props) => {
    let pageCount=Math.ceil(props.totalProductsCount / props.pageSize);
    
    let pages = [];
    
    for(let i=1;i<=pageCount;i++){
      pages.push(i);
    }
  
    return (
        <div>
        <div className={classes.grid}>
          {props.products.map(product =>
            <div key={product.id}>
              <div className={classes.productImgCont}>
                <img className={classes.productImg} src={product.pictureLink} alt="Product" />
              </div>
              <h3 style={{ margin: '0px' }}>{product.name}</h3>
              <div style={{ padding: '0px' }}>{product.description}</div>
             <h3 style={{ margin: '0px' }}>{product.price}$</h3>
            </div>
          )}
        </div>
        
        <div>
            {pages.map(pageNumber=>{
              return <a 
              className={`${props.currentPage === pageNumber && classes.selectedPage} ${classes['custom-button-2']} ${classes['custom-button-3']}`} 
              onClick={(e) => {props.onPageChanged(pageNumber);}}>
              {pageNumber}
            </a>
            })}
          </div>
        </div>
      );
  };
  
  export default Products;