import React from 'react';
import { useFormik } from 'formik';

const Form = (props) => {

	const formik = useFormik({
		/*initialValues,
		onSubmit,
		validate,*/
		initialValues:{
			email:"",
			password:"",
			youtube:"",
		},
		onSubmit: values => {
			formik.resetForm();
		},
		validate: values => {
			let errors = {}

			let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

			if(!values.email){
				errors.email = "Required"
			}else if(!pattern.test(values.email)){
    			errors.email = "Invalid Email"
			}

			if(!values.password){
				errors.password = "Required"
			}

			if(!values.youtube){
				errors.youtube = "Required"
			}

			return errors
		}
	})

	console.log(formik.errors);

  return (
    <div>
    	<form onSubmit={formik.handleSubmit} >
		  <div class="form-group">
		    <label for="email" name="email">Email address</label>
		    <input onChange={formik.handleChange} value={formik.values.email} type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp" />
		  	{
		  		formik.errors.email
		  		? <small>{formik.errors.email}</small>
		  		: ""
		  	}
		  </div>
		  <div class="form-group">
		    <label for="password" name="password">Password</label>
		    <input onChange={formik.handleChange} value={formik.values.password} type="password" class="form-control" id="password" name="password" />
		  	{
		  		formik.errors.password
		  		? <small>{formik.errors.password}</small>
		  		: ""
		  	}
		  </div>
		  <div class="form-group">
		    <label for="youtube" name="youtube">Youtube Chanel</label>
		    <input onChange={formik.handleChange} value={formik.values.youtube} type="text" class="form-control" id="youtube" name="youtube" />
		  	{
		  		formik.errors.youtube
		  		? <small>{formik.errors.youtube}</small>
		  		: ""
		  	}
		  </div>
		  <button type="submit" class="btn btn-primary">Submit</button>
		</form>
    </div>
  )
}

export default Form;