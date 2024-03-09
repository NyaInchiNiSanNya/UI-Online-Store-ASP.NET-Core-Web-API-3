import { connect } from 'react-redux';
import { getProductsWithTagThunkCreator } from '../../../../Reducers/product-reducer';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import ProductsWithTags from './ProductsWithTags';
import { getProducts } from '../../../../Reducers/products-selectors';

const ProductsWithTagsContainer = ({ getProductsWithTagThunkCreator, products }) => {
  const { tagId } = useParams(); 

  useEffect(() => {
    getProductsWithTagThunkCreator(tagId);
  }, [tagId]);

  return <ProductsWithTags products={products} />;
};

const mapStateToProps = (state) => ({
  products: getProducts(state)
});

export default connect(mapStateToProps, {
  getProductsWithTagThunkCreator
})(ProductsWithTagsContainer);