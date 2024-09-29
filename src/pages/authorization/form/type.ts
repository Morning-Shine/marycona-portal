import { AUTH_NOTIFICATIONS } from 'constants/enums';
import { Dispatch, SetStateAction } from 'react';

// TODO
export type TAuthFormProps = {
  path: string;
  //   path: '/login' | '/signup'
};

export type TAuthFormValues = {
  login: string;
  password: string;
};

export type TAuthRegFormValues = TAuthFormValues & {
  name: string;
  repeatPassword: string;
};

export type TAuthConditional<T> = T extends TAuthRegFormValues
  ? TAuthRegFormValues
  : TAuthFormValues;

export type TNotifications = (typeof AUTH_NOTIFICATIONS)[number] | null;

export type TShowInfo = {
  setIsModal: Dispatch<SetStateAction<boolean>>;
  info: TNotifications;
};
