import React from 'react';
import './scss/app.scss';
import Header from "./Components/Header";
import Categories from "./Components/Categories";
import Sort from "./Components/Sort";
import PizzaCard from "./Components/PizzaCard";

function App() {
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
                        <PizzaCard price={400}/>
                        <PizzaCard price={450}/>
                        <PizzaCard price={350}/>
                        <PizzaCard price={250}/>
                        <PizzaCard price={150}/>
                        <PizzaCard price={850}/>
                        <PizzaCard price={450}/>
                        <PizzaCard price={250}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
