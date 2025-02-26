import React, {useEffect, useState} from 'react'
import Skeleton from "../other/Skeleton";
import axios from "axios";
import PizzaCard from "./PizzaCard/PizzaCard";
import Categories from "../Categories/Categories";
import Sort from "../Sort/Sort";
import Pagination from "../other/Pagination/Pagination";

const Content = ({searchValue, setSearchValue}) => {
    const [pizzas, setPizzas] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const [selectedCategory, setSelectedCategory] = useState(0)

    const [selectedSort, setSelectedSort] = useState(0)
    const listsMenu = ['rating', 'price', 'title']
    let totalCountItemsOnPage = 8
    const [page, setPage] = useState(1)

    useEffect(() => {
        setIsLoading(true)
        axios.get(`https://67bd631a321b883e790c3eac.mockapi.io/items?&page=${page}&limit=${totalCountItemsOnPage}&sortBy=${listsMenu[selectedSort]}&category=${selectedCategory === 0 ? '' : selectedCategory}`).then(response => {
            setPizzas(response.data)
            setIsLoading(false)
        })

        window.scrollTo(0, 0)
    }, [selectedSort, selectedCategory, page])

    useEffect(() => {
        axios.get(`https://67bd631a321b883e790c3eac.mockapi.io/items?search=${searchValue}`).then(response => {
            setPizzas(response.data)
        })
    }, [searchValue])

    const pizzaComponents = pizzas.map((pizza) => <PizzaCard price={pizza.price} title={pizza.title}
                                                             imgUrl={pizza.imgUrl} sizes={pizza.sizes}
                                                             types={pizza.types} key={pizza.id}/>)
    return (
        <div className="wrapper">
            <div className="container">
                <div className="content__top">
                    <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
                    <Sort selectedSort={selectedSort} setSelectedSort={setSelectedSort}/>
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {isLoading ? [...new Array(8)].map((_, index) => <Skeleton key={index}/>) : pizzaComponents}
                </div>
            </div>
            <Pagination setPage={setPage}/>
        </div>
    )
}

export default Content