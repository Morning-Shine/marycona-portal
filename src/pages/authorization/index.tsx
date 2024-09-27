import { useLocation } from 'react-router-dom';
import AuthForm from './form';
import { useRef } from 'react';
import { FormikProps } from 'formik';
import {
  TAuthConditional,
  TAuthFormValues,
  TAuthRegFormValues,
} from './form/type';

const PageAuthorization: React.FC = () => {
  const { pathname: path } = useLocation();
  const formRef =
    useRef<FormikProps<TAuthConditional<TAuthFormValues | TAuthRegFormValues>>>(
      null
    );

  return (
    <section className="h-full">
      <AuthForm
        path={path}
        ref={formRef}
      />
    </section>
  );
};

export default PageAuthorization;
