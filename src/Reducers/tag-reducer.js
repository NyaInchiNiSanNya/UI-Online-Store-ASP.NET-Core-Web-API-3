import { tagsApi } from '../Api/Api';

let initialState={
    totalTagsCount: 5,
    pageSize: 3,
    currentPage: 1,
    tags: [
    ],

}

export const tagReducer = (state = initialState, action) => {

switch (action.type) {
    case 'set-tags': {
        return { ...state, tags: action.tags };
    }
    case 'set-currentPage': {
        return { ...state, currentPage: action.currentPage };
    }
    case 'set-totalTagsCount': {
        return { ...state, totalTagsCount: action.totalTagsCount };
    }
    default:
        return state;
}
}

export const setTags= (tags) =>{
return {
    type:'set-tags',
    tags: tags
}
};

export const setCurrentPage= (currentPage) =>{
return {
    type:'set-currentPage',
    currentPage: currentPage
}
};

export const setTotalTagsCount= (totalTagsCount) =>{
return {
    type:'set-totalTagsCount',
    totalTagsCount: totalTagsCount
}
};

export const getTagsByPageThunkCreator = (pageNumber, pageSize) =>{
    return (dispatch) => {
        tagsApi.getTagsByPage(pageNumber,pageSize)
            .then(response => {
                dispatch(setTags(response.categories));
                dispatch(setTotalTagsCount(response.totalCategoriesCount));
            });
    }
}
export default tagReducer;