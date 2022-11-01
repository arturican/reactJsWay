import React from 'react'
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";



const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to={'Artur'}>Artur</NavLink>
                </div>
                <div className={s.dialog}>
                    Dilpopo
                </div>
                <div className={s.dialog}>
                    Arturican
                </div>
                <div className={s.dialog}>
                    Vasya
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Как дела?</div>
                <div className={s.message}>Что нового?</div>
            </div>
        </div>
    )
}

export default Dialogs