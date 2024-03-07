import { connect } from 'react-redux';
import { getProductsWithTagThunkCreator } from '../../../../Reducers/product-reducer';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import ProductsWithTags from './ProductsWithTags';

const ProductsWithTagsContainer = ({ getProductsWithTagThunkCreator, products }) => {
  const { tagId } = useParams(); 

  useEffect(() => {
    getProductsWithTagThunkCreator(tagId);
  }, [tagId]);

  return <ProductsWithTags products={products} />;
};

const mapStateToProps = (state) => ({
  products: state.products.products
});

export default connect(mapStateToProps, {
  getProductsWithTagThunkCreator
})(ProductsWithTagsContainer);