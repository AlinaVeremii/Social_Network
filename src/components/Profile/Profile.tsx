import React from 'react';
import s from '../Profile/Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";


function Profile() {
    return (
        <div>
            <div>
                {/*<img src="https://img.freepik.com/premium-photo/lmage-young-woman-sitting-her-laptop_948771-155.jpg"*/}
                {/*     alt=""/>*/}
            </div>
            <div><img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg02gzmfr4rAWbHHFvOfMjsm02-y1Er5GDHw&usqp=CAU"
                alt=""/></div>
            <MyPosts/>
        </div>
    );
}

export default Profile