import React, {useState} from 'react'

const Categories = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    const onActiveCategory = (index) => {
        setActiveIndex(index)
    }

    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
    return (
        <div className="categories">
            <ul>
                {
                    categories.map((category, index) => <li onClick={() => onActiveCategory(index)}
                                                     className={activeIndex === index ? 'active' : ''}>{category}</li>)
                }
            </ul>
        </div>
    )
}

export default Categories