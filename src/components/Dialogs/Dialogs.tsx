import React from 'react'
import s from './Dialogs.module.css';
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";

const Dialogs = () => {
    let dialogsData = [
        {id: 1, name: 'Artur'},
        {id: 2, name: 'Dilpopo'},
        {id: 3, name: 'Arturican'},
        {id: 4, name: 'Vasya'},
    ]
    let messageData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Как дела?'},
        {id: 3, message: 'Что нового?'},
        {id: 4, message: 'Йоу'},
    ]
    let dialogsElement = dialogsData.map(d => <DialogsItem name={d.name} id={d.id}/>)
    let messageElement = messageData.map(m => <Message message={m.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messageElement}
            </div>
        </div>
    )
}

export default Dialogs