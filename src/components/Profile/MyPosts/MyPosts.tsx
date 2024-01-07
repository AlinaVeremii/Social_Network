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


    let postsElements = postData.map(post =>
    <Post message={post.message} likesCount={post.likesCount}/>
    );
//====================================================================================================================
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
                    {postsElements}
                </div>
            </div>
    );
}
export default MyPosts