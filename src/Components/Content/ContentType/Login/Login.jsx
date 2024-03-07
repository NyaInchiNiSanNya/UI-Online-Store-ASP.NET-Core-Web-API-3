import React from 'react';
import {validateName, validatePassword} from "../../../../utils/validators/validators"
import { Field, reduxForm } from 'redux-form';
import { Input } from '../../../Common/FormsControls/FormsControls';




const LoginForm = (props) => {
  return <div>
    <form onSubmit={props.handleSubmit}>
      
        {props.error && < div> {props.error} </div>}
      
      <div>
        <Field placeholder={"логин"} name="login" component={Input} validate={validateName} />
      </div>

      <div>
        <Field placeholder={"пароль"} name="password" component={Input} validate={ validatePassword}/>
      </div>
      
      <div>
        <button>логин</button>
      </div>

    </form>
  </div>
};

const ReduxLoginForm= reduxForm({
  form: 'login'
})(LoginForm)

let Login = (props) => {
  
  const onSubmit = (formData) => {
    props.login(formData.login, formData.password)
  }

  return <div>
    <h1>Login</h1>
    <ReduxLoginForm onSubmit={onSubmit}></ReduxLoginForm>
  </div>
};

export default Login;  