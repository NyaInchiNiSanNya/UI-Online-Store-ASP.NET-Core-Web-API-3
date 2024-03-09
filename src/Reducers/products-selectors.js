export const getProducts= (state) =>{
    return state.products.products
};

export const getPageSize= (state) =>{
    return state.products.pageSize;
};

export const getTotalProductsCount= (state) =>{
    return state.products.totalProductsCount;
}

export const getCurrentPage= (state) =>{
    return state.products.currentPage;
}


