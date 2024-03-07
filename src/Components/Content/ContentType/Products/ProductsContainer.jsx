import { connect } from 'react-redux';
import { setCurrentPage,  getProductsByPageThunkCreator } from '../../../../Reducers/product-reducer';
import React, { Component } from 'react';
import Products from './Products';
import authRedirect from '../../../../hoc/authRedirect';
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
  products: state.products.products,
  pageSize: state.products.pageSize,
  totalProductsCount: state.products.totalProductsCount,
  currentPage: state.products.currentPage,
  isAuth: state.auth.isAuthenticated,
});

export default compose(
  
  connect(mapStateToProps, {
    setCurrentPage,
    getProductsByPageThunkCreator}),
  // authRedirect
)(ProductsContainer);