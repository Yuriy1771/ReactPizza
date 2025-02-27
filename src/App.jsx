import React, {createContext, useState} from 'react';
import './scss/app.scss';
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import {Route, Routes} from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import NotFound from "./Components/other/NotFound/NotFound";

export const searchContext = createContext({})

function App() {
    const [searchValue, setSearchValue] = useState('')
    return (
        <div className="wrapper">
            <searchContext.Provider value={{searchValue, setSearchValue}}>
                <Header/>
                <div className="content">
                    <Routes>
                        <Route path={'/'} element={<Content/>}/>
                        <Route path={'cart/*'} element={<Cart/>}/>
                        <Route path={'*'} element={<NotFound/>}/>
                    </Routes>
                </div>
            </searchContext.Provider>
        </div>
    );
}

export default App;
