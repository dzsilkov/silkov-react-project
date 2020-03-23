import React from 'react';
import FormFieldInput from '../FormFieldInput/FormFieldInput';
import { useFormik } from 'formik/dist/index';
import { validateSignUp } from './validate';

const SignUp = (props) => {
  const {signUpUser, isLoggedIn, handleChangeLoggedIn} = props;

  const signUpForm = useFormik(
    {
      initialValues:
        {
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          books: []
        },
      validateSignUp,
      onSubmit: values => {
        signUpUser(values);
      },
    });

  const
    {
      handleSubmit, handleChange, handleBlur,
      values: {
        firstName, lastName, email, password
      },
      touched,
      errors
    } = signUpForm;


  const styles = {
    firstNameStyles: {
      label: 'lock uppercase tracking-wide text-gray-700 text-xs font-bold mb-2',
      input: 'appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500',
      alert: 'text-red-600 text-xs italic',
    },
    lastNameStyles: {
      label: 'lock uppercase tracking-wide text-gray-700 text-xs font-bold mb-2',
      input: 'appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500',
      alert: 'text-red-600 text-xs italic',
    },
    emailStyles: {
      label: 'lock uppercase tracking-wide text-gray-700 text-xs font-bold mb-2',
      input: 'appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500',
      alert: 'text-red-600 text-xs italic',
    },
    passwordStyles: {
      label: 'lock uppercase tracking-wide text-gray-700 text-xs font-bold mb-2',
      input: 'appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500',
      alert: 'text-red-600 text-xs italic',
    },
    isLoggedInStyles: {
      label: 'md:w-2/3 block text-gray-500 font-bold text-sm',
      input: 'mr-2 leading-tight',
      alert: '',
    }
  };

  return (
    <div className="signUp mt-6">
      <h2 className="mt-5 my-1 text-2xl md:text-center text-white"
      >
        Create your account
      </h2>
      <div className="w-full mx-5 mb-5 max-w-md bg-gray-800">
        <form className=" bg-white shadow-lg rounded px-8 py-8 pt-8"
              onSubmit={handleSubmit}
        >
          <div className="flex flex-wrap -mx-3 m3-2">
            <div className="w-full px-3">
              <FormFieldInput
                styles={styles.isLoggedInStyles}
                title={'Already have an account?'}
                name={'isLoggedIn'}
                type={'checkbox'}
                onChange={handleChangeLoggedIn}
                value={isLoggedIn}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-3">
            <div className="w-full px-3">
              <FormFieldInput
                styles={styles.firstNameStyles}
                title={'First Name'}
                name={'firstName'}
                type={'text'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={firstName}
                errors={touched.firstName && errors.firstName ? errors.firstName : null}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-3">
            <div className="w-full px-3">
              <FormFieldInput
                styles={styles.lastNameStyles}

                title={'Last Name'}
                name={'lastName'}
                type={'text'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={lastName}
                errors={touched.lastName && errors.lastName ? errors.lastName : null}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-3">
            <div className="w-full px-3">
              <FormFieldInput
                styles={styles.emailStyles}
                title={'E-Mail'}
                name={'email'}
                type={'email'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={email}
                errors={touched.email && errors.email ? errors.email : null}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-3">
            <div className="w-full px-3">
              <FormFieldInput
                styles={styles.passwordStyles}
                title={'Password'}
                name={'password'}
                type={'password'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={password}
                errors={touched.password && errors.password ? errors.password : null}
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-between items-center mx-1 m3-2">
            <div className="md:w-1/3">
              <button
                className="shadow bg-blue-500 hover:bg-blue-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
