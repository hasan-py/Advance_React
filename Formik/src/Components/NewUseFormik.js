import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const NewForm = (props) => {

	const initialValues = {
		email: "",
		password: "",
		youtube: "",
  	};	

  	// Must need to define at first of formik
    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid Email. Please provide a valid email").required('Required'),
        password: Yup.string().min(6, 'Too Short password!').max(50, 'Too Long password!').required('Required'),
        youtube: Yup.string().required('Required'),
    });

    const formik = useFormik({
        initialValues,
        onSubmit: values => {
        	console.log(formik.values);
            formik.resetForm();
            console.log("Form submiteed");
        },
        validationSchema, // Alternative way without yup is useing validate function
    })

    return (
        <div>
	    	<form onSubmit={formik.handleSubmit} >
			  <div className="form-group">
			    <label htmlFor="email" name="email">Email address</label>
			    <input 
				    type="text"
				    className="form-control" 
				    id="email" 
				    name="email"
				    {...formik.getFieldProps('email')} // Refectoring onChange onBlur Value
				    />
			  	{
			  		formik.touched.email && formik.errors.email
			  		? <small style={{ color:"red" }}>{formik.errors.email}</small>
			  		: ""
			  	}
			  </div>
			  <div className="form-group">
			    <label htmlFor="password" name="password">Password</label>
			    <input 
			    	type="password"
			    	className="form-control" 
			    	id="password" 
			    	name="password"
			    	{...formik.getFieldProps('password')} // Refectoring onChange onBlur Value
			    	/>
			  	{
			  		formik.touched.password && formik.errors.password
			  		? <small style={{ color:"red" }}>{formik.errors.password}</small>
			  		: ""
			  	}
			  </div>
			  <div className="form-group">
			    <label htmlFor="youtube" name="youtube">Youtube Chanel</label>
			    <input 
			    	type="text"
			    	className="form-control" 
			    	id="youtube" 
			    	name="youtube" 
			    	{...formik.getFieldProps('youtube')} // Refectoring onChange onBlur Value
			    	/>
			    	
			  	{
			  		formik.touched.youtube && formik.errors.youtube
			  		? <small style={{ color:"red" }}>{formik.errors.youtube}</small>
			  		: ""
			  	}
			  </div>
			  <button type="submit" className="btn btn-primary">Submit</button>
			</form>
	    </div>
    )
}

export default NewForm;