import React from 'react';
import s from "../MyPost/Post/Post.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <img className={s.image} src={"https://www.rosphoto.com/images/u/articles/1406/16_elena_anosova_lk-a.jpg"} alt={'природа'}/>
        </div>
    );
};

export default ProfileInfo;