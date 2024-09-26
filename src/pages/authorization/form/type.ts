import { MutableRefObject } from "react";

// TODO
export type TAuthFormProps = {
  // ref: MutableRefObject<any>;
  path: string;
  //   path: '/login' | '/signup'
};

export type TAuthFormValues = {
  login: string;
//   name: string;
  password: string;
//   repeatPassword: string;
};
