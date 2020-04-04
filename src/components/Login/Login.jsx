import React from "react";
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControl";
import {maxLengthCreator, required} from "../../utils/validators/validator";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from '../common/FormsControls/FormsControl.module.css';

const maxLength15 = maxLengthCreator(30);

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('email', 'login', Input, [required, maxLength15])}

            {createField('password', 'password', Input, [required, maxLength15], 'password')}

            {createField('rememberMe', null, Input, null, 'checkbox', 'remember me')}

            {error && <div className={style.formSummaryError}> {error} </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    };

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    } else return <div>
        <h1> LOGIN </h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>;
};

function mapStateToProps(state) {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login})(Login);