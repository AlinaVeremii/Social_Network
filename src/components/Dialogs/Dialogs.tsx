import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogsPropsType = {}

function Dialogs(props: any) {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <h2>Dialogs</h2>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/1'>Name1</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'>Name2</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'>Name3</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4'>Name4</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/5'>Name5</NavLink>
                </div>
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
