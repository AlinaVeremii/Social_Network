import React from 'react';
import s from '../MyPosts/MyPosts.module.css'
import Post from './Post/Post';

type MyPostPropsType = {

}
function MyPosts(props:MyPostPropsType) {

    let postData = [
        {id:1, message: "Hi, how are you", likesCount: 12},
        {id:2, message: "Hello,world", likesCount: 9},
        {id:3, message: "Sunny morning", likesCount: 6},
        {id:4, message: "Hi, its my first post", likesCount: 15},
    ]

    return (

            <div>
                My posts
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <button className={s.addPostButton}>Add Post</button>
                    <button className={s.removePostButton}>Remove</button>
                </div>
                <div className={s.posts}>
                    <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
                    <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
                    <Post message={postData[2].message} likesCount={postData[2].likesCount}/>
                    <Post message={postData[3].message} likesCount={postData[3].likesCount}/>
                </div>
            </div>
    );
}
export default MyPosts