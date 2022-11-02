import React from 'react';
import s from './Profile.module.css';
import Post from './Post/Post'

const Profile = () => {

    let posts = [
        {id: 1, message: 'Всем привет!', likes: 10 },
        {id: 2, message: 'Всем привет!', likes: 10 },
        {id: 3, message: 'Всем привет!', likes: 10 },
        {id: 4, message: 'Всем привет!', likes: 10 },
        {id: 5, message: 'Всем привет!', likes: 10 },
    ]

    let postElement = posts.map(p=><Post message={p.message} likes={p.likes}/>)

    return (
        <div>
            <img className={s.image} src={"https://www.rosphoto.com/images/u/articles/1406/16_elena_anosova_lk-a.jpg"}/>
            <div>
                <h3>Посты</h3>
                <textarea></textarea>
                <button>send</button>
            </div>
            {postElement}
        </div>

    )
}

export default Profile;