import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikWithRenderMethod = (props) => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid Email. Please provide a valid email")
      .required("Required"),
    password: Yup.string()
      .min(6, "Too Short password!")
      .max(50, "Too Long password!")
      .required("Required"),
  });

  const onSubmit = (values, bag) => {
    console.log("Form submiteed", bag, values);
    console.log(Formik());
    bag.setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => {
        console.log(formik);
        return (
          <Form>
            <div className="form-group">
              <label htmlFor="email" name="email">
                Email address
              </label>
              <Field name="email">
                {(props) => {
                  const { meta, field } = props;
                  return (
                    <input
                      {...field}
                      id="email"
                      type="text"
                      className={`${
                        meta.error && meta.touched ? "border-alert" : ""
                      } form-control`}
                    />
                  );
                }}
              </Field>
              <ErrorMessage name="email">
                {(err) => {
                  return <small className="text-danger">{err}</small>;
                }}
              </ErrorMessage>
            </div>
            <div className="form-group">
              <label htmlFor="password" name="password">
                Password
              </label>
              <Field name="password">
                {(props) => {
                  const { meta, field } = props;
                  return (
                    <input
                      {...field}
                      id="password"
                      type="password"
                      className={`${
                        meta.error && meta.touched ? "border-alert" : ""
                      } form-control`}
                    />
                  );
                }}
              </Field>
              <ErrorMessage name="password">
                {(err) => {
                  return <small className="text-danger">{err}</small>;
                }}
              </ErrorMessage>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={formik.isValid || !formik.isSubmitting}
            >
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormikWithRenderMethod;
