const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9])\S{5,16}$/;
const namePattern = /^[a-zA-Z]+$/;


export const validatePassword = value => {
    if (!value) {
        return "Поле обязательно";
    } else if (!RegExp(passwordPattern).test(value)) {
        return "Пароль должен содержать от 5 до 16 символов, включая по крайней мере одну прописную букву, одну строчную букву, одну цифру и один специальный символ";
    }
    return undefined;
};

export const validateName = value => {
    if (!value) {
        return "Поле обязательно";
    } else if (false) {
        return "Имя должно содержать только буквы латинского алфавита";
    }
    return undefined;
};