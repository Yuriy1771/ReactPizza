import React, {useEffect, useState} from 'react'
import Skeleton from "../other/Skeleton";
import axios from "axios";
import PizzaCard from "./PizzaCard/PizzaCard";
import Categories from "../Categories/Categories";
import Sort from "../Sort/Sort";

const Content = (props) => {
    const [pizzas, setPizzas] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        axios.get('https://67bd631a321b883e790c3eac.mockapi.io/items').then(response => {
                setPizzas(response.data)
                setIsLoading(true)
        })
    }, [])

    const pizzaComponents = pizzas.map((pizza) => <PizzaCard price={pizza.price} title={pizza.title}
                                                             imgUrl={pizza.imgUrl} sizes={pizza.sizes}
                                                             types={pizza.types} key={pizza.id}/>)
    return (
        <div className="wrapper">
            <div className="container">
                <div className="content__top">
                    <Categories/>
                    <Sort/>
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {!isLoading ? [...new Array(6)].map((_, index) => <Skeleton key={index}/>) : pizzaComponents}
                </div>
            </div>
        </div>
    )
}

export default Content