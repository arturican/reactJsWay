import React from 'react'
import s from './Dialogs.module.css';
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";

type DialogsDataType = {
    dialogs: Array<DialogsType>
}

type DialogsType = {
    id: number,
    name: string
}

type MessageDataType = {
    message: Array<MessageType>
}

type MessageType = {
    message: string
}
const Dialogs = (props: DialogsDataType) => {

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