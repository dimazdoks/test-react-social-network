import React from 'react';
import s from './Friend.module.css'

function Friend(props) {
    return (
        <div className={s.friend}>
            <div>
                <img src={props.img}/>
            </div>
            <div>
                {props.name}
            </div>
        </div>
    );
}

export default Friend;