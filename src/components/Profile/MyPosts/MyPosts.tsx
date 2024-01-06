import React from 'react';
import s from '../MyPosts/MyPosts.module.css'
import Post from './Post/Post';

type MyPostPropsType = {

}
function MyPosts(props:MyPostPropsType) {
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
                    <Post message='Hi, how are you' likes={12}/>
                    <Post message='Its my first post' likes={20}/>
                    <Post message='Its my first post' likes={20}/>
                    <Post message='Its my first post' likes={20}/>
                    <Post message='Its my first post' likes={20}/>

                </div>
            </div>
    );
}
export default MyPosts