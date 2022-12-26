import React from 'react'
import s from '../Dialogs.module.css';
import Post from "../../Profile/MyPost/Post/Post";

type MessageType = {
    message: string
}
export const Message = (props: MessageType) =>{

    let newMessageElement = React.createRef<HTMLTextAreaElement>();



    let addMessage = () => {
        let text = newMessageElement.current?.value;
        alert(text)
    }

    return (
        <div>
        <div className={s.message}>{props.message}</div>
        <textarea ref={newMessageElement}></textarea>
        <button onClick={addMessage}>send</button>
        </div>
    )
}
