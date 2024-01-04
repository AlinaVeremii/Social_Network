import React from 'react';
import s from './Dialogs.module.css';

type DialogsPropsType = {}

function Dialogs(props: any) {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <h2>Dialogs</h2>
                <div className={s.dialog}>Name1</div>
                <div className={s.dialog}>Name2</div>
                <div className={s.dialog}>Name3</div>
                <div className={s.dialog}>Name4</div>
                <div className={s.dialog}>Name5</div>
            </div>
            <div className={s.messages}>
                <h3>Messages</h3>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How u r</div>
                <div className={s.message}>yoo</div>

            </div>
        </div>
    )
}


export default Dialogs;
