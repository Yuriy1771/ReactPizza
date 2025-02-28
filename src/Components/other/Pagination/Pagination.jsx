import React from 'react'
import styles from './Pagination.module.scss'
import {useDispatch} from "react-redux";
import {setCurrentPagePagination} from "../../../redux/slices/mainSlice";

const Pagination = (props) => {
    const dispatch = useDispatch()

    let totalItems = 19;
    let pageSize = 5;
    let totalCountPages = Math.floor(totalItems / pageSize)
    let pages = []

    for(let i = 1; i <= totalCountPages; i ++) {
        pages.push(i)
    }

    const onClickPage = (page) => {
        dispatch(setCurrentPagePagination(page.target.outerText))
    }

    return (
        <div className={styles.paginationWrapper}>
            {pages.map((page, index) => <div onClick={(page) => onClickPage(page)} key={index} className={styles.paginationItem}><span className={styles.pageNumber}>{page}</span></div>)}
        </div>
    )
}

export default Pagination