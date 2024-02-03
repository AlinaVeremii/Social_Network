import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

type DialogsPropsType = {}


const Dialogs = (props: DialogsPropsType) => {
    // ===================================================================================================================
    let dialogsData = [
        {id: 1, name: "Name1"},
        {id: 2, name: "Name2"},
        {id: 3, name: "Name3"},
        {id: 4, name: "Name4"},
        {id: 5, name: "Name5"},
        {id: 6, name: "Name6"},
    ];

    let dialogsElements = dialogsData.map((dialog) =>
        <DialogItem name={dialog.name} id={dialog.id}/>
    );

// ===================================================================================================================
    let messagesData = [
        {id: 1, message: "Hi"},
        {id: 2, message: "Hello"},
        {id: 3, message: "How u r?"},
        {id: 4, message: "Yoo"},
    ]

    let messagesElements = messagesData.map(message =>
        <Message message={message.message}/>
    )

// ===================================================================================================================


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <h2>Dialogs</h2>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <h3>Messages</h3>
                {messagesElements}
            </div>
        </div>
    )
}


export default Dialogs;
