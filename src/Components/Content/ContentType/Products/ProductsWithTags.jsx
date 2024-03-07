import classes from './Products.module.css';


let ProductsWithTags = (props) => {
    return (
        <div>
        <div className={classes.grid}>
          {props.products.map(product =>
            <div key={product.id}>
              <div class={classes.productImgCont}>
                <img className={classes.productImg} src={product.pictureLink} alt="Product" />
              </div>
              <h3 style={{ margin: '0px' }}>{product.name}</h3>
              <div style={{ padding: '0px' }}>{product.description}</div>
             <h3 style={{ margin: '0px' }}>{product.price}$</h3>
            </div>
          )}
        </div>
        </div>
      );
  };
  
  export default ProductsWithTags;