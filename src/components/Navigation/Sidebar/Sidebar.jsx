import React from 'react';
import s from './Sidebar.module.css'
import Friend from "./Friend/Friend";

function Sidebar(props) {
    let onlineFriendsList = props.listOnline.map( f => <Friend name={f.name} img={f.img}/>);

    return (
        <div className={s.sidebar}>
            <div>
                <h3>Online:</h3>
            </div>
            <div className={s.friends}>
                {onlineFriendsList}
            </div>
        </div>
    );
}

export default Sidebar;