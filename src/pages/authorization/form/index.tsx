import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import {
  TAuthFormProps,
  TAuthFormValues,
  TAuthConditional,
  TAuthRegFormValues,
} from './type';
import { forwardRef, Ref } from 'react';
import { FormikProps } from 'formik';
import FormFields from './FormFields';
import {
  YUP_VALIDATION_LOGIN,
  YUP_VALIDATION_SIGNUP,
} from 'constants/validation/yupAuth';

const AuthForm = forwardRef(
  (
    { path }: TAuthFormProps,
    ref: Ref<
      FormikProps<TAuthConditional<TAuthFormValues | TAuthRegFormValues>>
    >
  ) => {
    const initialValues: TAuthConditional<
      TAuthFormValues | TAuthRegFormValues
    > =
      path === '/login'
        ? { login: '', password: '' }
        : { login: '', password: '', name: '', repeatPassword: '' };

    const validationSchema = Yup.object().shape(
      path === '/login' ? YUP_VALIDATION_LOGIN : YUP_VALIDATION_SIGNUP
    );

    return (
      <Formik
        innerRef={ref}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => console.log('FORM', values, actions)}
      >
        {
          (/*{ errors, touched }*/) => (
            <Form className="w-1/3 mx-auto mt-5">
              <div className="flex flex-col gap-y-1">
                <FormFields path={path} />
              </div>
              <button
                type="submit"
                className="my-3 w-32 h-10 bg-emerald-700"
              />
            </Form>
          )
        }
      </Formik>
    );
  }
);

export default AuthForm;
