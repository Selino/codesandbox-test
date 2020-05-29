import React from "react"
import { withFormik, Form, Field } from "formik"
import Yup from "yup"
import "./styles.css"
import { render } from "react-dom"

const App = ({ values }) => (
  <Form>
    <Field type="email" name="email" placeholder="Email" />
    <Field type="password" name="password" placeholder="Password" />
    <label style={{ display: "block", marginTop: ".5rem", userSelect: "none" }}>
      <Field type="checkbox" name="newsletter" checked={values.newsletter} />
      Join our newsletter
    </label>
    <Field
      component="select"
      name="plan"
      style={{ display: "block", marginTop: ".5rem", userSelect: "none" }}
    >
      <option value="free">Free</option>
      <option value="premium">Premium</option>
    </Field>
    <button>Submit</button>
  </Form>
)

export default (FormikApp = withFormik({
  mapPropsToValues({ email, password, newsletter, plan }) {
    return {
      email: email || "",
      password: password || "",
      newsletter: newsletter || false,
      plan: plan || "premium"
    }
  },
  handleSubmit(values) {
    console.log(values)
  }
})(App))

render(<FormikApp />, document.getElementById("root"))
