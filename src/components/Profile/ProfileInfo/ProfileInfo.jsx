import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import photoUrl from '../../../assets/images/user_default.png';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileEditDataForm from "./ProfileEditDataForm";
import ProfileData from "./ProfileData";

function ProfileInfo(props) {
    let [editMode, setEditMode] = useState(false);

    const onSubmit = formData => {
        console.log(formData);
        props.saveProfile(formData);
        //setEditMode(false);
    };

    const onMainPhotoSelected = e => {
        if (e.target.files.length)
            props.savePhoto(e.target.files[0]);
    };

    if (!props.profile) return <Preloader/>;
    else {
        return (
            <div className={s.content}>
                <div className={s.descriptionBlock}>

                    {/* header photo*/}
                    <div className={s.header}>
                        <img src="https://openimagedenoise.github.io/images/moana_16spp_oidn.jpg" alt={'header'}/>
                    </div>

                    {/* avatar photo*/}
                    <div className={s.avatar}>
                        <img src={props.profile.photos.large || photoUrl} alt={'ava'}/>
                        {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                    </div>


                    {/* profile status */}
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>


                    {editMode
                        ? <ProfileEditDataForm initialValues={props.profile}
                                               profile={props.profile}
                                               onSubmit={onSubmit}/>

                        : <ProfileData profile={props.profile}
                                       isOwner={props.isOwner}
                                       activeEditMode={() => {
                                           setEditMode(true)
                                       }}/>}
                </div>
            </div>
        );
    }
}

export default ProfileInfo;