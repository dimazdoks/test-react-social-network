import s from "./Message.module.css";
import React from "react";

function Message(props) {
    return (
        <div className={s.message}>
            <img src={props.sender}/>
            {props.data}
            <img src={props.receiver}/>
        </div>
    );
}

export default Message;