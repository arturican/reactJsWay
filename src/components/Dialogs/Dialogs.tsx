import React from 'react'
import s from './Dialogs.module.css';
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";

export type DialogsDataType = {
    dialogs: Array<DialogsType>
}

type DialogsType = {
    id: number,
    name: string
}

export type MessageDataType = {
    message: Array<MessageType>
}

type MessageType = {
    message: string
}
const Dialogs = (props: DialogsDataType & MessageDataType) => {

    let dialogsElement = props.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)
    let messageElement = props.message.map(m => <Message message={m.message}/>)
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