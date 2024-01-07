import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

type DialogsPropsType = {

}


const Dialogs = (props: DialogsPropsType) => {


    let dialogsData = [
        {id:1, name: "Name1"},
        {id:2, name: "Name2"},
        {id:3, name: "Name3"},
        {id:4, name: "Name4"},
        {id:5, name: "Name5"},
        {id:6, name: "Name6"},
    ];

    let messagesData = [
        {id:1, message: "Hi"},
        {id:2, message: "Hello"},
        {id:3, message: "How u r?"},
        {id:4, message: "Yoo"},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <h2>Dialogs</h2>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
            </div>
            <div className={s.messages}>
                <h3>Messages</h3>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>

            </div>
        </div>
    )
}


export default Dialogs;
