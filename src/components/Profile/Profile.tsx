import React from 'react';
import s from './Profile.module.css';
import Post from './Post/Post'

const Profile = () => {
    return (
        <div>
            <img className={s.image} src={"https://static.tripzilla.com/thumb/2/8/92200_800x.jpg"}/>
            <div>
                <h1>Посты</h1>
            </div>
            <Post message={"Всем привет! "} likes={"21"}/>
        </div>

    )
}

export default Profile;