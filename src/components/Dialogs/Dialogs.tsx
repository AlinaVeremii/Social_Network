import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

type DialogsPropsType = {

}


const Dialogs = (props: DialogsPropsType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <h2>Dialogs</h2>
                <DialogItem name='Name1' id={1} />
                <DialogItem name='Name2' id={2} />
                <DialogItem name='Name3' id={3} />
                <DialogItem name='Name4' id={4} />
                <DialogItem name='Name5' id={5} />
                <DialogItem name='Name6' id={6} />
            </div>
            <div className={s.messages}>
                <h3>Messages</h3>
                <Message message='Hi'/>
                <Message message='Hello'/>
                <Message message='How u r?'/>
                <Message message='Yoo'/>

            </div>
        </div>
    )
}


export default Dialogs;
