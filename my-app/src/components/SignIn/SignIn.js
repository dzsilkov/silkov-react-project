import React from 'react';
import FormFieldInput from '../FormFieldInput/FormFieldInput';
import { useFormik } from 'formik/dist/index';
import { validate } from './../Auth/valdators';


const SignIn = (props) => {

  const form = useFormik(
    {
      initialValues:
        {
          email: '',
          password: '',
        },
      validate,
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      },
    });

  const
    {
      handleChange, handleBlur,
      values: {
        email, password
      },
      touched,
      errors
    } = form;

  return (
    <div className="signIn">
      <div className="w-full m-5 max-w-md bg-gray-800">
        <form className=" bg-white shadow-md rounded px-8 py-8 pt-8">
          <div className="flex flex-wrap -mx-3 m3-2">
            <div className="w-full px-3">
              <FormFieldInput
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
          <div className="md:flex md:items-center">
            <div className="md:w-2/3">
              <button
                className="shadow bg-blue-500 hover:bg-blue-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button">
                Sign Up
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
