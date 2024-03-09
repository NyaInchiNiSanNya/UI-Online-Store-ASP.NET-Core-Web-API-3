export const getTags= (state) =>{
    return state.tags.tags;
};

export const getPageSize= (state) =>{
    return state.tags.pageSize;
};

export const getTotalTagsCount= (state) =>{
    return state.tags.totalTagsCount;
}

export const getCurrentPage= (state) =>{
    return state.tags.currentPage;
}