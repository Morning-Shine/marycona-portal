import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { TAuthFormProps, TAuthFormValues } from './type';
import { forwardRef, Ref } from 'react';
import { FormikProps } from 'formik';

const AuthForm = forwardRef(
  (props: TAuthFormProps, ref: Ref<FormikProps<TAuthFormValues>>) => {
    const initialValues: TAuthFormValues = { login: '', password: '' };

    const styleLabel = `mt-3 text-lg font-bold text-amber-500 dark:text-amber-600`;
    const styleField = `h-9 mt-1 px-2 text-xl rounded-md border-collapse
                bg-slate-200 dark:bg-slate-950
                text-slate-950 dark:text-slate-50
                outline-none focus-visible:border border-amber-500 dark:border-amber-600`;
    const styleErrorsMsg = 'text-sm text-red-500';

    return (
      <Formik
        innerRef={ref}
        initialValues={initialValues}
        onSubmit={(values, actions) => console.log('FORM', values, actions)}
      >
        {({ errors, touched }) => (
          <Form className="w-1/3 mx-auto mt-5">
            <div className="flex flex-col gap-y-1">
              <label
                htmlFor="login"
                className={styleLabel}
              >
                Логин
              </label>
              <Field
                className={styleField}
                id="login"
                name="login"
              />
              {errors.login && touched.login && (
                <div className={styleErrorsMsg}>{errors.login}</div>
              )}
              <label
                htmlFor="password"
                className={styleLabel}
              >
                Пароль
              </label>
              <Field
                type="password"
                className={styleField}
                id="password"
                name="password"
              />
              {errors.password && touched.password && (
                <div className={styleErrorsMsg}>{errors.password}</div>
              )}
            </div>
            <button
              type="submit"
              className="my-3 w-32 h-10 bg-emerald-700"
            />
          </Form>
        )}
      </Formik>
    );
  }
);

export default AuthForm;
