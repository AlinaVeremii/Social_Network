import React from 'react';
import s from '../MyPosts/MyPosts.module.css'
import Post from './Post/Post';


function MyPosts() {
    return (

            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add Post</button>
                    <button>Remove</button>
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