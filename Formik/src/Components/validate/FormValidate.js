export const initialValues = {
	email:"",
	password:"",
	youtube:"",
}

// Alternative way without yup
export const validate = values => {
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