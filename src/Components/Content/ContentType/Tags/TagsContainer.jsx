import { connect } from 'react-redux';
import Tags from './Tags';
import {setCurrentPage, getTagsByPageThunkCreator} from '../../../../Reducers/tag-reducer';
import { getTags,  getPageSize, getTotalTagsCount, getCurrentPage } from '../../../../Reducers/tag-selectors';
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
    tags: getTags(state),
    pageSize: getPageSize(state),
    totalTagsCount: getTotalTagsCount(state),
    currentPage: getCurrentPage(state),
  }
}

export default connect(mapStateToProps,{
    setCurrentPage:setCurrentPage,
    getTagsByPageThunkCreator: getTagsByPageThunkCreator
  })(TagsContainer); 