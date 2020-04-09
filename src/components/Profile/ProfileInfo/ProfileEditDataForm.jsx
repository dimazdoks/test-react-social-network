import React from "react";
import {reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControl";
import s from './ProfileInfo.module.css'
import {maxLengthCreator} from "../../../utils/validators/validator";
import style from "../../common/FormsControls/FormsControl.module.css";

//const maxLength30 = maxLengthCreator(30);

const ProfileEditDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <button>Save</button>
            {error && <div className={style.formSummaryError}> {error} </div>}
        </div>
        <div>
            <b>Nickname: </b>
            {createField('fullName', 'nickname', Input, [])}
        </div>
        <div>
            <b>Looking for a job: </b>
            {createField('lookingForAJob', null, Input, null, 'checkbox')}
        </div>
        <div>
            <b>My professional skills: </b>
            {createField('lookingForAJobDescription', 'Write your skills', Textarea, [])}
        </div>
        <div>
            <b>About me: </b>
            {createField('aboutMe', 'Tell about you...', Textarea, [])}
        </div>
        <div>
            <b>Contacts: </b> {Object.keys(profile.contacts).map(key => {
                return <div className={s.contacts}>
                    <b>{key}:</b>
                    {createField(`contacts.${key}`, key, Input)}
                </div>
        })}
        </div>
    </form>;
};

const ProfileEditDataReduxForm = reduxForm({form: 'edit-profile'})(ProfileEditDataForm);

export default ProfileEditDataReduxForm;