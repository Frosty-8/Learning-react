/*
    command to install : npm install formik --save
    -useFormik() is a custom react hook that will return all formik states
    -Internally it uses useFormik


    JSON.stringify displays the values in string format 
    A common use of JSON is to exchange data to /from to a webserver
    The data in the form is present in the JASON object . When sending data to a webserver,
    the data has to be a string.
    Convert a Javascript object into a string with JSON.stringify() - show the string representation of the JASON Object

    Json.stringify(values,null,2)
*/

import React from 'react'
import {useFormik} from 'formik';
export const SignupForm = () => {
  
  const formik = useFormik({
    initialValues: {
        email : "" , password : "", username : "",
    },
    validate:(values)=>{
        let errors = {};
        if(!values.email){
            errors.email = "Email is required"
        }
        if(!values.password){
            errors.password = "Email is required"
        }
        if(!values.username){
            errors.username = "Email is required"
        }
        return errors;

    },

    onSubmit: (values) =>{
        alert(JSON.stringify(values,null,2));
    },

  });
  
    return (
    <form onSubmit={formik.handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" onChange={formik.handleChange} value ={formik.values.username}/>
        <br />
        <div>
            {formik.touched.username && formik.errors.username ? (
                <div>{formik.errors.username}</div>
            ):null}
        </div>

        <label htmlFor="email">Email</label>
        <input type="text" id="email" onChange={formik.handleChange} value ={formik.values.email}/>
        <br />
        <div>
            {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
            ):null}
        </div>

        <label htmlFor="password">Password</label>
        <input type="password" id="password" onChange={formik.handleChange} value ={formik.values.password}/>
        <br/>
        <div>
            {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
            ):null}
        </div>

        <button type="submit">Submit</button>
        <br /><br />
    </form>
  )
}
// signup form component is created