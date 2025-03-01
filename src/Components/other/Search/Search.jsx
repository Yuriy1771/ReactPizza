import React, {useCallback, useContext, useRef, useState} from 'react'
import styles from './Search.module.scss'
import searchIcon from '../../../assets/img/search.png'
import closeIcon from '../../../assets/img/clear.png'
import {searchContext} from "../../../App";
import lodash from "lodash";

const Search = () => {
    const [value, setValue] = useState('')
    const {setSearchValue} = useContext(searchContext)
    const searchInputRef = useRef(null)

    const onClickClear = () => {
        setSearchValue('')
        setValue('')
        searchInputRef.current.focus()
    }

    const updateSearchValue = useCallback(lodash.debounce((value) => setSearchValue(value), 500),[])

    const onChangeInput = (e) => {
        setValue(e.currentTarget.value)
        updateSearchValue(e.currentTarget.value)
    }


    return (
        <div className={styles.searchWrapper}>
            <img src={searchIcon} alt="search" className={styles.searchIcon}/>
            <input ref={searchInputRef} placeholder='поиск пиццы...' className={styles.inputSearch} value={value}
                   onChange={(e) => onChangeInput(e)}/>
            {value && <img src={closeIcon} alt="closeIcon" onClick={onClickClear} className={styles.clearIcon}/>}
        </div>
    )
}

export default Search