import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    pizzas: [],
    category: 0,
    sort: 0,
    currentPagePagination: 1,
}

const mainPage = createSlice({
    name: 'mainSlice',
    initialState: initialState,
    reducers: {
        setPizzas: (state, action) => {
            state.pizzas = action.payload
        },
        setCategory: (state, action) => {
            state.category = action.payload
        },
        setSort: (state, action) => {
            state.sort = action.payload
        },
        setCurrentPagePagination: (state, action) => {
          state.currentPagePagination = action.payload
        },
    }
})

export const {setCategory, setSort, setPizzas, setCurrentPagePagination} = mainPage.actions

export default mainPage.reducer