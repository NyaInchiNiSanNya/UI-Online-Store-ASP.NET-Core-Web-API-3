import { productsApi } from '../Api/Api';

let initialState={
        totalProductsCount: 16,
        pageSize: 8,
        currentPage: 1,
        products: [
        ],

}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'set-products': {
            return { ...state, products: action.products };
        }
        case 'set-currentPage': {
            return { ...state, currentPage: action.currentPage };
        }
        case 'set-totalProductsCount': {
            return { ...state, totalProductsCount: action.totalProductsCount };
        }
        default:
            return state;
    }
}

export const setProducts= (products) =>{
    return {
        type:'set-products',
        products: products
    }
};

export const setCurrentPage= (currentPage) =>{
    return {
        type:'set-currentPage',
        currentPage: currentPage
    }
};

export const setTotalProductsCount= (totalProductsCount) =>{
    return {
        type:'set-totalProductsCount',
        totalProductsCount: totalProductsCount
    }
};

export const getProductsByPageThunkCreator = (pageNumber, pageSize) =>{
    return (dispatch) => {
        productsApi.getProductsByPage(pageNumber,pageSize)
            .then(response => {
                const { products, totalProductsCount } = response;       
                dispatch(setProducts(products));
                dispatch(setTotalProductsCount(totalProductsCount));
      });
    }
}

export const getProductsWithTagThunkCreator = (tagId) =>{
    return (dispatch) => {
        productsApi.getProductsWithTag(tagId)
            .then(response => {
                dispatch(setProducts(response));
        });
    }
}

export default productReducer;