import React from 'react'
import styles from './NotFound.module.scss'
import notFoundImg from '../../../assets/img/notFound.png'
import {NavLink} from "react-router-dom";

const NotFound = () => {
    return (
        <div className={styles.wrapperNotFound}>
            <img src={notFoundImg} alt="404 not found"/>
            <h2>Ничего не найдено 😕</h2>
            <p>Данная страница не существует в нашем интернет магазине</p>
            <NavLink to="/" className="button button--black">
                Вернуться на главную
            </NavLink>
        </div>
    )
}

export default NotFound