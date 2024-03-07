import { connect } from 'react-redux';
import Tags from './Tags';
import {setCurrentPage, getTagsByPageThunkCreator} from '../../../../Reducers/tag-reducer';
import React from 'react';

class TagsContainer extends React.Component {
  
  componentDidMount() {
    this.fetchProducts(this.props.currentPage);
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.fetchProducts(pageNumber);
  }

  fetchProducts = (pageNumber) => {
    const pageSize = this.props.pageSize;
    this.props.getTagsByPageThunkCreator(pageNumber,pageSize);
  }

  render() {
    return <Tags totalTagsCount={this.props.totalTagsCount} currentPage={this.props.currentPage} pageSize={this.props.pageSize} tags={this.props.tags} onPageChanged={this.onPageChanged}></Tags>;
  }
}

let mapStateToProps=(state)=>{
    
  return {
    tags: state.tags.tags,
    pageSize: state.tags.pageSize,
    totalTagsCount: state.tags.totalTagsCount,
    currentPage: state.tags.currentPage,
  }
}

export default connect(mapStateToProps,{
    setCurrentPage:setCurrentPage,
    getTagsByPageThunkCreator: getTagsByPageThunkCreator
  })(TagsContainer); 