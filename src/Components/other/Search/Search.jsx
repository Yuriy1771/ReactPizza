import React, {useContext} from 'react'
import styles from './Search.module.scss'
import searchIcon from '../../../assets/img/search.png'
import closeIcon from '../../../assets/img/clear.png'
import {searchContext} from "../../../App";

const Search = () => {
    const {searchValue, setSearchValue} = useContext(searchContext)
    return (
        <div className={styles.searchWrapper}>
            <img src={searchIcon} alt="search" className={styles.searchIcon}/>
            <input type='text' placeholder='поиск пиццы...' className={styles.inputSearch} value={searchValue}
                   onChange={(e) => setSearchValue(e.currentTarget.value)}/>
            {searchValue && <img src={closeIcon} alt="closeIcon" onClick={() => setSearchValue('')} className={styles.clearIcon}/>}
        </div>
    )
}

export default Search