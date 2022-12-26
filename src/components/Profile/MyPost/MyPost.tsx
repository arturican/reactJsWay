import React from 'react';
import Post from "./Post/Post";
import {PostsType} from "../Profile";


export const MyPost = (props: PostsType) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let postElement = props.posts.map(p => <Post message={p.message} likes={p.likes}/>)

    let addPost = () => {
        let text = newPostElement.current?.value;
        alert(text)
    }

    return (
        <div>
            <div>
                <h3>Посты</h3>
                <textarea ref={newPostElement}></textarea>
                <button onClick={addPost}>send</button>
            </div>
            {postElement}
        </div>
    )
}
