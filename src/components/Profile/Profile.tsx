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


const Profile = (props: PostsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPost posts={props.posts}/>
        </div>

    )
}

export default Profile;