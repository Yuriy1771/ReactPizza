import React from 'react'
import {useDispatch} from "react-redux";
import {setCategory} from "../../redux/slices/mainSlice";

const Categories = ({selectedFilter}) => {
    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Острые', 'Закрытые', 'Напитки']
    const dispatch = useDispatch()
    return (
        <div className="categories">
            <ul>
                {
                    categories.map((category, index) => <li onClick={() => dispatch(setCategory(index))}
                                                     className={selectedFilter === index ? 'active' : ''} key={index}>{category}</li>)
                }
            </ul>
        </div>
    )
}

export default Categories