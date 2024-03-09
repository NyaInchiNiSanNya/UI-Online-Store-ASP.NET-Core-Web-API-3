import { connect } from 'react-redux';
import { setCurrentPage,  getProductsByPageThunkCreator } from '../../../../Reducers/product-reducer';
import React, { Component } from 'react';
import Products from './Products';
import { getProducts,  getPageSize, getTotalProductsCount, getCurrentPage } from '../../../../Reducers/products-selectors';
import { isUserAuthenticated } from '../../../../Reducers/auth-selectors';
import { compose } from 'redux';


class ProductsContainer extends Component {
  
  componentDidMount() {
    this.fetchProducts(this.props.currentPage);
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.fetchProducts(pageNumber);
  }

  fetchProducts = (pageNumber) => {
    let pageSize= this.props.pageSize;
    this.props.getProductsByPageThunkCreator(pageNumber, pageSize);
  }

  render() {
    const { totalProductsCount, currentPage, pageSize, products } = this.props;
    return (
      <Products
        totalProductsCount={totalProductsCount}
        currentPage={currentPage}
        pageSize={pageSize}
        products={products}
        onPageChanged={this.onPageChanged}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  products: getProducts(state),
  pageSize: getPageSize(state),
  totalProductsCount: getTotalProductsCount(state),
  currentPage: getCurrentPage(state),
  isAuth: isUserAuthenticated(state),
});

export default compose(
  
  connect(mapStateToProps, {
    setCurrentPage,
    getProductsByPageThunkCreator}),
)(ProductsContainer);