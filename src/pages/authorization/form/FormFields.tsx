import { Field, useFormikContext } from 'formik';
import React, { Fragment } from 'react';
import { TAuthFormProps } from './type';
import { AUTH_FORM_FIELDS } from 'constants/enums';
import { TAuthField } from 'types/authField';


const FormFields: React.FC<TAuthFormProps> = ({ path }) => {
  const { errors, touched } = useFormikContext();

  const styleLabel = `mt-3 text-lg font-bold text-amber-500 dark:text-amber-600`;
  // TODO в мозилле цвет фона иной, как сбросить? appearance-none не работает
  const styleField = `h-9 mt-1 px-2 text-xl rounded-md border-collapse
                bg-slate-200 dark:bg-slate-950
                text-slate-950 dark:text-slate-50
                outline-none appearance-none !important
                focus-visible:border border-amber-500 dark:border-amber-600`;
  const styleErrorsMsg = 'text-sm text-red-500';

  const fields = (field: TAuthField) => (
    <Fragment key={field.id}>
      <label
        htmlFor={field.id}
        className={styleLabel}
      >
        {field.name}
      </label>
      <Field
        id={field.id}
        name={field.id}
        type={field.id.includes('password') ? 'password' : 'text'}
        className={styleField}
      />
      {errors?.[field.id as keyof typeof errors] &&
        touched[field.id as keyof typeof touched] && (
          <div className={styleErrorsMsg}>
            {errors[field.id as keyof typeof errors]}
          </div>
        )}
    </Fragment>
  );

  return (
    <>
      {AUTH_FORM_FIELDS.map((field) =>
        path === '/login' ? field.isLogIn && fields(field) : fields(field)
      )}
    </>
  );
};

export default FormFields;
