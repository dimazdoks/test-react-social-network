import React from "react";
import style from './FormsControl.module.css'
import {Field} from "redux-form";

export const Textarea = ({input, meta, ...props}) => {
    const isError = meta.touched && meta.error;

    return (
        <div className={style.forms_control + ' ' + (isError ? style.error : '')}>
            <div>
                <textarea {...input} {...props} />
            </div>
            {isError && <span>{meta.error}</span>}
        </div>
    );
};

export const Input = ({input, meta, ...props}) => {
    const isError = meta.touched && meta.error;

    return (
        <div className={style.forms_control + ' ' + (isError ? style.error : '')}>
            <input {...input} {...props} />
            {isError && <span>{meta.error}</span>}
        </div>
    );
};

export const createField = (name, placeholder, component, validators, type, text) =>
    <div>
        <Field name={name}
               placeholder={placeholder}
               type={type}
               component={component}
               validate={validators}/> {text}
    </div>;