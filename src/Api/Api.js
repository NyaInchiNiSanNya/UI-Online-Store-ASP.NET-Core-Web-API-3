import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://localhost:7070/',
    headers:{

    }
})

export const setAuthorizationHeader = (jwtToken) => {
    if (jwtToken) {
        instance.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;
    } else {
        delete instance.defaults.headers.common['Authorization'];
    }
};

export const productsApi={
    getProductsByPage(pageNumber, pageSize){
        return instance.get(`products?Page=${pageNumber}&PageSize=${pageSize}`)
        .then(response=>{
            return response.data;
        });
    },

    getProductsWithTag(tagId){
        return instance.get(`products/${tagId}`)
        .then(response=>{
            return response.data;
        });
    }
}

export const tagsApi={
    getTagsByPage(pageNumber, pageSize){
        return instance.get(`categories?Page=${pageNumber}&PageSize=${pageSize}`)
        .then(response=>{
            return response.data;
        });
    }
}

export const authApi={
    login: (login, password) => {
        return instance.post('auth/login', {
            password: password,
            email: login
        })
        .then(response => {
            return response;
        })
    }
}