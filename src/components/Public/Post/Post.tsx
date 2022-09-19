import React from 'react';
import s from './Post.module.css';


type MessageandLikesPropsType  = {
    message: string;
    likes: string;
}


const Post = (props: MessageandLikesPropsType) => {
    return (
        <div className={s.post}>
            <img className={s.icon} src={"https://thumbs.dreamstime.com/b/cat-avatar-illustration-cartoon-45383590.jpg"}/>
            <span>{props.message}</span>
            <span>&#10084; {props.likes}</span>
        </div>

    )
}

export default Post;