import React from 'react'

const Categories = ({selectedCategory, setSelectedCategory}) => {

    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Острые', 'Закрытые', 'Напитки']
    return (
        <div className="categories">
            <ul>
                {
                    categories.map((category, index) => <li onClick={() => setSelectedCategory(index)}
                                                     className={selectedCategory === index ? 'active' : ''} key={index}>{category}</li>)
                }
            </ul>
        </div>
    )
}

export default Categories