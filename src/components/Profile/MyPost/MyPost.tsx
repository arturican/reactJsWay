import React from 'react';
import Post from "./Post/Post";
import {PostsType} from "../Profile";


export const MyPost = (props: PostsType) => {

    let postElement = props.posts.map(p => <Post message={p.message} likes={p.likes}/>)

    return (
        <div>
            <div>
                <h3>Посты</h3>
                <textarea></textarea>
                <button>send</button>
            </div>
            {postElement}
        </div>
    )
}
