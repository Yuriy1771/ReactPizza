import React from 'react'
import styles from './Search.module.scss'
import searchIcon from '../../../assets/img/search.png'

const Search = ({search, setSearch}) => {

    // const [search, setSearch] = useState('')


    return (
        <div className={styles.searchWrapper}>
            <img src={searchIcon} alt="search"/>
            <input type='text' placeholder='поиск пиццы...' className={styles.inputSearch} value={search}
                   onChange={(e) => setSearch(e.currentTarget.value)}/>
        </div>
    )
}

export default Search