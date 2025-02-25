import React, {useEffect, useState} from 'react';
import './scss/app.scss';
import Header from "./Components/Header";
import Categories from "./Components/Categories";
import Sort from "./Components/Sort";
import PizzaCard from "./Components/PizzaCard";
import axios from "axios";
import Skeleton from "./Components/Skeleton";

function App() {
    const [pizzas, setPizzas] = useState<any>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        axios.get('https://67bd631a321b883e790c3eac.mockapi.io/items').then(response => {
            setTimeout(() => {
                setPizzas(response.data)
                setIsLoading(true)
            }, 500)
        })
    }, [])

    const pizzaComponents = pizzas.map((pizza: any) => <PizzaCard price={pizza.price} title={pizza.title}
                                                                  imgUrl={pizza.imgUrl} sizes={pizza.sizes}
                                                                  types={pizza.types} key={pizza.id}/>)
    // <Skeleton/>
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
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
        </div>
    );
}

export default App;
