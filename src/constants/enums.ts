import { TAuthField } from 'types/authField';

export const ENUMS = {
  noInfo: 'нет информации',
  noYear: '(год не указан)',
};

export const PAGE_SIZES = [8, 16, 24, 96] as const;

export const AUTH_FORM_FIELDS: TAuthField[] = [
  {
    name: 'Логин',
    id: 'login',
    isLogIn: true,
  },
  {
    name: 'Имя пользователя',
    id: 'name',
    isLogIn: false,
  },
  {
    name: 'Пароль',
    id: 'password',
    isLogIn: true,
  },
  {
    name: 'Повторите пароль',
    id: 'repeatPassword',
    isLogIn: false,
  },
];

// export const AUTH_NOTIFICATIONS={
//   noUserExist: 'пользователь не найден',
//   wrongPassword: 'пароль не подходит',
//   userAlreadyExists:  'пользователь уже существует'
// }

export const AUTH_NOTIFICATIONS = [
  'noUserExist',
  'wrongPassword',
  'userAlreadyExists',
] as const;
