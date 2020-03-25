import React from 'react';
import FormFieldInput from '../FormFieldInput/FormFieldInput';
import { useFormik } from 'formik/dist/index';
import { validateSignIn } from './validate';
import './SignIn.css'

const SignIn = (props) => {
  const {signInUser, isLoggedIn, handleChangeLoggedIn, initialUser} = props;
console.log(initialUser)
  const signInForm = useFormik(
    {
      initialValues:
        {
          email: initialUser.email,
          password: initialUser.password,
        },
      validateSignIn,
      onSubmit: values => {
        signInUser(values);
      },
    });

  const
    {
      handleSubmit, handleChange, handleBlur,
      values: {
        email, password
      },
      touched,
      errors
    } = signInForm;

  const styles = {
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
    <div className="signIn">
      <h2 className="SignInTitle"
      >
        Sign in to Books
      </h2>
      <div className="authForm w-full m-5 max-w-md">
        <form className="bg-white rounded px-8 py-8 pt-8"
              onSubmit={handleSubmit}
        >
          <div className="flex flex-wrap -mx-3 m3-2">
            <div className="w-full px-3">
              <FormFieldInput
                styles={styles.isLoggedInStyles}
                title={'Create an account?'}
                name={'isLoggedIn'}
                type={'checkbox'}
                onChange={handleChangeLoggedIn}
                value={isLoggedIn}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 m3-2">
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
          <div className="flex flex-wrap -mx-3 m3-2">
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
                Sign In
              </button>
            </div>
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};


export default SignIn;
