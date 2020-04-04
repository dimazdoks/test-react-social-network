import React from 'react';
import s from './Post.module.css';

function Post(props) {
    return (
        <div className={s.item}>
            <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" alt=""/>
            {props.message}
            <div>
                <span>like {props.likesCount} </span>
            </div>
        </div>
    );
}

export default Post;