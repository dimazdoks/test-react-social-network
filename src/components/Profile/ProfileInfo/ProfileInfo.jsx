import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import photoUrl from '../../../assets/images/user_default.png';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

function ProfileInfo(props) {
    if (!props.profile) return <Preloader/>;
    else {
        let contacts = Object.getOwnPropertyNames(props.profile.contacts);
        return (
            <div className={s.content}>
                <div className={s.header}>
                    <img src="https://openimagedenoise.github.io/images/moana_16spp_oidn.jpg"></img>
                </div>
                <div className={s.descriptionBlock}>
                    <div className={s.avatar}>
                        <img src={props.profile.photos.large ? props.profile.photos.large : photoUrl}/>
                    </div>

                    {/* profile status */}
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>

                    <div>
                        <h3>{props.profile.fullName}</h3>
                        <p>{props.profile.aboutMe}</p>
                        {
                            contacts.map(inf =>
                                props.profile.contacts[inf] &&
                                <p> {inf}:
                                    <a href={`https://www.${props.profile.contacts[inf]}`}> {props.profile.contacts[inf]}</a>
                                </p>)
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileInfo;