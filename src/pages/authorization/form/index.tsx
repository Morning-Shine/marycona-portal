import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import {
  TAuthFormProps,
  TAuthFormValues,
  TAuthConditional,
  TAuthRegFormValues,
  TNotifications,
} from './type';
import { forwardRef, Ref, useState } from 'react';
import { FormikProps } from 'formik';
import FormFields from './FormFields';
import {
  YUP_VALIDATION_LOGIN,
  YUP_VALIDATION_SIGNUP,
} from 'constants/validation/yupAuth';
import Button from 'components/button';
import { useAppDispatch, useAppSelector } from 'utils/hooks/useRedux';
import { setActiveUser, addUser } from 'store/userSlice';
import { TUser } from 'types/user';
import { useNavigate } from 'react-router-dom';
import ShowInfo from './ShowInfo';


const AuthForm = forwardRef(
  (
    { path }: TAuthFormProps,
    ref: Ref<
      FormikProps<TAuthConditional<TAuthFormValues | TAuthRegFormValues>>
    >
  ) => {
    const dispatch = useAppDispatch();
    const users = useAppSelector((state) => state.user.users);
    const user = useAppSelector((state) => state.user.user);
    const navigate = useNavigate();
    const [isModal, setIsModal] = useState<boolean>(false);
    const [isModalInfo, setIsModalInfo] = useState<TNotifications>(null);

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
        onSubmit={(values, actions) => {
          if (path === '/signup') {
            const isExist = users.some((u) => u.login === values.login);
            if (isExist) {
              setIsModal(true);
              setIsModalInfo('userAlreadyExists');
              return;
            } else {
              const newUser: TUser = {
                // @ts-ignore
                name: values.name,
                login: values.login,
                password: values.password,
              };
              dispatch(setActiveUser(newUser));
              dispatch(addUser(newUser));
              actions.resetForm();
              navigate('/');
            }
          }
          if (path === '/login') {
            const existingUser = users.find((u) => u.login === values.login);
            if (!existingUser) {
              setIsModal(true);
              setIsModalInfo('noUserExist');
              return;
            } else {
              const matchPassword = existingUser.password === values.password;
              if (matchPassword) {
                dispatch(setActiveUser(existingUser));
                actions.resetForm();
                navigate('/');
              } else {
                setIsModal(true);
                setIsModalInfo('wrongPassword');
              }
            }
          }
        }}
      >
        {() => (
          <Form className="w-1/3 mx-auto mt-5">
            <fieldset disabled={!!user}>
              <div className="flex flex-col gap-y-1">
                <FormFields path={path} />
              </div>
              <div className="flex justify-center mt-6">
                <Button
                  type="submit"
                  size={'md'}
                  className={`rounded-md text-xl
                  bg-lime-400 dark:bg-lime-600
                  ${
                    !!user
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:bg-lime-500 hover:dark:bg-lime-500'
                  }
                  `}
                  name={path === '/login' ? 'войти' : 'зарегистрироваться'}
                />
              </div>
            </fieldset>
            {isModal && (
              <ShowInfo
                setIsModal={setIsModal}
                info={isModalInfo}
              />
            )}
          </Form>
        )}
      </Formik>
    );
  }
);

export default AuthForm;
