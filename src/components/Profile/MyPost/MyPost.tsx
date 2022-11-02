import React from 'react';
import Post from "./Post/Post";


export const MyPost = () => {
    let posts = [
        {id: 1, message: 'Всем привет!', likes: 10},
        {id: 2, message: 'Всем привет!', likes: 10},
        {id: 3, message: 'Всем привет!', likes: 10},
        {id: 4, message: 'Всем привет!', likes: 10},
        {id: 5, message: 'Всем привет!', likes: 10},
    ]

    let postElement = posts.map(p => <Post message={p.message} likes={p.likes}/>)

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
