import React from 'react';
import s from '../Header/Header.module.css'
import logo from '../../image/mainlogo.jpg'

type HeaderPropsType = {

}
const Header =(props:HeaderPropsType) => {
    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.body}>
                    <div className={s.logo}>
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className={s.search}>
                        <form action="">
                            <input type="text"/>
                            <button type={"submit"}>Search</button>
                        </form>
                    </div>
                    <div className={s.nav}>
                        <div className={s.home}>
                            <a href="">Home</a>
                        </div>
                        <div className={s.friends}>
                            <a href="">Friends</a>
                        </div>
                        <div className={s.marketplace}>
                            <a href="">Marketplace</a>
                        </div>
                    </div>


                </div>
            </div>
        </header>
    );
}
export default Header