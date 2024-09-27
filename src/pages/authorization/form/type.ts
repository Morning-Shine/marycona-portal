
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
