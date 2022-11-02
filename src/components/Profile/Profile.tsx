import React from 'react';

import {MyPost} from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


export type PostsType = {
   posts: Array<PostsArrayType>
}

type PostsArrayType = {
    id: number,
    message: string,
    likes: number
}

const Profile = () => {


    let posts = [
        {id: 1, message: 'Всем привет!', likes: 10},
        {id: 2, message: 'Всем привет!', likes: 10},
        {id: 3, message: 'Всем привет!', likes: 10},
        {id: 4, message: 'Всем привет!', likes: 10},
        {id: 5, message: 'Всем привет!', likes: 10},
        {id: 6, message: 'Всем привет!', likes: 10},
    ]

    return (
        <div>
            <ProfileInfo/>
            <MyPost posts={posts}/>
        </div>

    )
}

export default Profile;