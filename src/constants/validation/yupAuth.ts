import * as Yup from 'yup';

const regex = /^[0-9A-Za-z]+$/;

export const YUP_VALIDATION_LOGIN = {
  login: Yup.string()
    .required('поле обязательно к заполнению')
    .min(5, 'логин не менее 5-ти символов')
    .matches(regex, 'только цифры и латинские буквы'),
  password: Yup.string()
    .required('пароль обязателен')
    .min(8, 'минимальная длина пароля - 8 символов')
    .matches(regex, 'только цифры и латинские буквы'),
};

export const YUP_VALIDATION_SIGNUP = {
  ...YUP_VALIDATION_LOGIN,
  name: Yup.string()
    .required('пожалуйста, представьтесь')
    .min(3, 'имя не может быть короче 3-х символов'),
  repeatPassword: Yup.string().oneOf(
    [Yup.ref('password')],
    'Пароли не совпадают'
  ),
};
