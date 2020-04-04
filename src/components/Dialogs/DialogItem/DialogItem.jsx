import {NavLink} from "react-router-dom";
import React from "react";
import s from "./DialogItem.module.css"

function DialogItem(props) {
    let path = "/dialog/" + props.id;
    return (
        <div className={s.dialogsItems + ' ' + s.active}>
            <NavLink to={path}>
                <div>
                    <img src={props.image}/>
                </div>
                <div>
                    {props.name}
                </div>
            </NavLink>
        </div>
    );
}

export default DialogItem;