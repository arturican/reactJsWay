import React from 'react'
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


type DialogsItemType = {
    name: string,
    id: number
}

 const DialogsItem = (props:DialogsItemType) => {
    return (
    <div className={s.dialog + ' ' + s.active}>
        <NavLink to={'dialogs/' + props.id}>{props.name}</NavLink>
    </div>
    )
}

type MessageType = {
    message: string
}

const Message = (props: MessageType) =>{
    return  <div className={s.message}>{props.message}</div>
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogsItem name={'Artur'} id={1}/>
                <DialogsItem name={'Dilpopo'} id={2}/>
                <DialogsItem name={'Arturican'} id={3}/>
                <DialogsItem name={'Vasya'} id={4}/>
            </div>
            <div className={s.messages}>
                <Message message={'Hi'}/>
                <Message message={'Как дела?'}/>
                <Message message={'Что нового?'}/>
            </div>
        </div>
    )
}

export default Dialogs