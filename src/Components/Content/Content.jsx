import React, {useContext, useEffect, useRef, useState} from 'react'
import Skeleton from "../other/Skeleton";
import axios from "axios";
import PizzaCard from "./PizzaCard/PizzaCard";
import Categories from "../Categories/Categories";
import Sort from "../Sort/Sort";
import Pagination from "../other/Pagination/Pagination";
import {searchContext} from "../../App";
import {useDispatch, useSelector} from "react-redux";
import {setPizzas, setUrlParams} from "../../redux/slices/mainSlice";
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";

const Content = () => {
    const [isLoading, setIsLoading] = useState(true)

    const dispatch = useDispatch()
    const page = useSelector((state) => state.mainPage.currentPagePagination)
    const selectedSort = useSelector((state) => state.mainPage.sort)
    const selectedCategory = useSelector((state) => state.mainPage.category)
    const pizzas = useSelector((state) => state.mainPage.pizzas)
    const {searchValue, setSearchValue} = useContext(searchContext)

    const listsMenu = ['rating', 'price', 'title']
    let totalCountItemsOnPage = 8

    let isMounted = useRef(false)
    let isSearch = useRef(false)

    const navigate = useNavigate()
    const location = useLocation()
    const [searchParams] = useSearchParams()

    useEffect(() => {
        debugger
        console.log('3 useEffect')
            navigate({
                pathname: '/',
                search: `?&page=${page}&limit=${totalCountItemsOnPage}&sortBy=${listsMenu[selectedSort]}&category=${selectedCategory === 0 ? '' : selectedCategory}`
            })
    }, [selectedSort, selectedCategory, page])

    useEffect(() => {
        debugger
        console.log('2 useEffect')
        console.log(searchParams)
        let pageParse = Number(searchParams.get('page'))
        let limit = searchParams.get('limit')
        let sortParse = searchParams.get('sortBy')
        let categoryParse = Number(searchParams.get('category'))

        switch (sortParse) {
            case 'null':
                sortParse = null
                break
            case 'undefined':
                sortParse = undefined
                break
        }
        if (pageParse === 0) pageParse = 1

        dispatch(setUrlParams({pageParse, sortParse, categoryParse}))
    }, [location.search])

    useEffect(() => {
        debugger
            console.log('1 useEffect')
            setIsLoading(true)
            axios.get(`https://67bd631a321b883e790c3eac.mockapi.io/items?&page=${page}&limit=${totalCountItemsOnPage}&sortBy=${listsMenu[selectedSort]}&category=${selectedCategory === 0 ? '' : selectedCategory}`).then(response => {
                dispatch(setPizzas(response.data))
                setIsLoading(false)
            })
        window.scrollTo(0, 0)
    }, [selectedSort, selectedCategory, page])


    useEffect(() => {
        axios.get(`https://67bd631a321b883e790c3eac.mockapi.io/items?search=${searchValue}`).then(response => {
            dispatch(setPizzas(response.data))
        })
    }, [searchValue])


    const pizzaComponents = pizzas.map((pizza) => <PizzaCard price={pizza.price} title={pizza.title}
                                                             imgUrl={pizza.imgUrl} sizes={pizza.sizes}
                                                             types={pizza.types} key={pizza.id}/>)

    const skeleton = [...new Array(8)].map((_, index) => <Skeleton key={index}/>)
    return (
        <div className="wrapper">
            <div className="container">
                <div className="content__top">
                    <Categories selectedFilter={selectedCategory}/>
                    <Sort selectedSort={selectedSort}/>
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {isLoading ? skeleton : pizzaComponents}
                </div>
            </div>
            <Pagination/>
        </div>
    )
}

export default Content