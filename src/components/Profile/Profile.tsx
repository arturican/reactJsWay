import React from 'react';

import {MyPost} from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";




const Profile = () => {

    return (
        <div>
            <ProfileInfo/>
            <MyPost posts={posts}/>
        </div>

    )
}

export default Profile;