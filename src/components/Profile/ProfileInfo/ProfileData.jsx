import s from "./ProfileInfo.module.css";
import React from "react";

const ProfileData = ({profile, isOwner, activeEditMode}) => {
    return <div>
        {isOwner && <div>
            <button onClick={activeEditMode}>Edit</button>
        </div>}
        <div>
            <b>Nickname: </b> {profile.fullName}
        </div>
        <div>
            <b>Looking for a job: </b> {profile.lookingForAJob ? 'Yes' : 'No'}
        </div>
        <div>
            <b>My professional skills: </b> {profile.lookingForAJobDescription}
        </div>
        <div>
            <b>About me: </b> {profile.aboutMe}
        </div>
        <div>
            <b>Contacts: </b> {Object.keys(profile.contacts).map(key => {
            return <Contact key={key}
                            socialNetwork={key}
                            networkUrl={profile.contacts[key]}/>
        })}
        </div>
    </div>
};

const Contact = ({socialNetwork, networkUrl}) => {
    return <div className={s.contacts}>
        <b>{socialNetwork}: </b> {networkUrl}
    </div>;
};

export default ProfileData;