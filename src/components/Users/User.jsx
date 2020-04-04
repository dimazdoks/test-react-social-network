import React from "react";
import s from './Users.module.css';
import photoUrl from '../../assets/images/user_default.png';
import {NavLink} from "react-router-dom";

function User({user, followingInProgres, unfollow, follow}) {
    return <div>
        <span>
            <NavLink to={'/profile/' + user.id}>
                <div>
                    <img src={user.photos.small ? user.photos.small : photoUrl} className={s.userPhoto}
                         alt={'profile photo'}/>
                </div>
            </NavLink>
            <div>
                {user.followed
                    ? <button disabled={followingInProgres.some(id => id === user.id)}
                              onClick={() => {
                                  unfollow(user.id);
                              }}>Unfollow</button>


                    : <button disabled={followingInProgres.some(id => id === user.id)}
                              onClick={() => {
                                  follow(user.id);
                              }}>Follow</button>
                }
            </div>
        </span>
        <span>
            <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </span>
            <span>
                <div>{"user.location.city"}</div>
                <div>{"user.location.country"}</div>
            </span>
        </span>
    </div>;
}

export default User;