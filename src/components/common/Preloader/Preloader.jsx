import React from "react";
import load from '../../../assets/images/preloader.gif';
import s from './Preloader.module.css';

function Preloader() {
    return <div className={s.preloader}>
        <img src={load}/>
    </div>
}

export default Preloader;