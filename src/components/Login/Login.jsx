import React from "react";
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControl";
import {maxLengthCreator, required} from "../../utils/validators/validator";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from '../common/FormsControls/FormsControl.module.css';

const maxLength30 = maxLengthCreator(30);

const LoginForm = ({handleSubmit, error, captchaURL}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('email', 'login', Input, [required, maxLength30])}
            {createField('password', 'password', Input, [required, maxLength30], 'password')}
            {createField('rememberMe', null, Input, null, 'checkbox', 'remember me')}

            {captchaURL && <img src={captchaURL} />}
            {captchaURL && createField('captcha', 'captcha', Input, [required])}

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
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    };

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    } else return <div>
        <h1> LOGIN </h1>
        <LoginReduxForm onSubmit={onSubmit} captchaURL={props.captchaURL}/>
    </div>;
};

function mapStateToProps(state) {
    return {
        isAuth: state.auth.isAuth,
        captchaURL: state.auth.captchaURL
    }
}

export default connect(mapStateToProps, {login})(Login);