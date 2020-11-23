import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormWithFormikComponent = (props) => {

    const initialValues = {
        email: "",
        password: "",
        youtube: "",
        social: {
            facebook: "",
            twitter: ""
        },
        phone: [""]
    }

    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid Email. Please provide a valid email").required('Required'),
        password: Yup.string().min(6, 'Too Short password!').max(50, 'Too Long password!').required('Required'),
        youtube: Yup.string().required('Required'),
        // Nested Object Validation
        social: Yup.object({
            facebook: Yup.string().required('Required facebook profile link')
        }),
        // Nested Array validation
        phone: Yup.array().of(
            Yup.string().required('Required Primary Phone number')
        )
    });

    const onSubmit = (values, bag) => {
		console.log("Form submiteed", bag, values);
		console.log(Formik());
    }

    return (
        <Formik
        	initialValues={initialValues}
        	onSubmit={onSubmit}
        	validationSchema={validationSchema}
        >
	    	<Form>
			  <div className="form-group">
			    <label htmlFor="email" name="email">Email address</label>
			    <Field name="email">
			    	{
			    		props => {
			    			const { meta, field } = props
			    			return <input {...field} id="email" type="text" className={`${meta.error && meta.touched ? "border-alert" : ""} form-control`} />
			    		}
			    	}
			    </Field>
				<ErrorMessage name="email">
					{err => {return <small className="text-danger">{err}</small>}}
				</ErrorMessage>
			  </div>
			  <div className="form-group">
			    <label htmlFor="password" name="password">Password</label>
			    <Field name="password">
			    	{	
			    		props => {
			    			const { meta, field } = props
			    			return <input {...field} id="password" type="password" className={`${meta.error && meta.touched ? "border-alert" : ""} form-control`} />
			    		}
			    	}
			    </Field>
			  	<ErrorMessage name="password">
					{err => {return <small className="text-danger">{err}</small>}}
				</ErrorMessage>
			  </div>
			  <div className="form-group">
			    <label htmlFor="youtube" name="youtube">Youtube Chanel</label>
			    <Field name="youtube">
			    	{	
			    		props => {
			    			const { meta, field } = props
			    			return <input {...field} id="youtube" type="text" className={`${meta.error && meta.touched ? "border-alert" : ""} form-control`} />
			    		}
			    	}
			    </Field>
			  	<ErrorMessage name="youtube">
					{err => {return <small className="text-danger">{err}</small>}}
				</ErrorMessage>
			  </div>
			  {/* Nested Object state */}
			  <div className="form-group">
			    <label htmlFor="facebook" name="social.facebook">Facebook</label>
			    <Field name="social.facebook">
			    	{	
			    		props => {
			    			const { meta, field } = props
			    			return <input {...field} id="facebook" type="text" className={`${meta.error && meta.touched ? "border-alert" : ""} form-control`} />
			    		}
			    	}
			    </Field>
			  	<ErrorMessage name="social.facebook">
					{err => {return <small className="text-danger">{err}</small>}}
				</ErrorMessage>
			  </div>
			{/* Nested Array state */}
			  <div className="form-group">
			    <label htmlFor="phone" name="phone[0]">Primary Phone</label>
			    <Field name="phone[0]">
			    	{	
			    		props => {
			    			const { meta, field } = props
			    			return <input {...field} id="phone" type="number" className={`${meta.error && meta.touched ? "border-alert" : ""} form-control`} />
			    		}
			    	}
			    </Field>
			  	<ErrorMessage name="phone[0]">
					{err => {return <small className="text-danger">{err}</small>}}
				</ErrorMessage>
			  </div>
			  <button type="submit" className="btn btn-primary">Submit</button>
			</Form>
	    </Formik>
    )
}

export default FormWithFormikComponent;