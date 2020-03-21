import React from 'react';
import FormFieldInput from '../FormFieldInput/FormFieldInput';
import { useFormik } from 'formik/dist/index';
import { validate } from './../Auth/valdators';

const SignUp = (props) => {


  const form = useFormik(
    {
      initialValues:
        {
          firstName: '',
          lastName: '',
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
      handleSubmit, handleChange, handleBlur,
      values: {
        firstName, lastName, email, password
      },
      touched,
      errors
    } = form;


  return (
    <div className="signUp">
      <div className="w-full m-5 max-w-md bg-gray-800">
        <form className=" bg-white shadow-lg rounded px-8 py-8 pt-8"
              onSubmit={handleSubmit}
        >
          <div className="flex flex-wrap -mx-3 mb-3">
            <div className="w-full px-3">
              <FormFieldInput
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
