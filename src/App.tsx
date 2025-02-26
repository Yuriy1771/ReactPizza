import React, {useState} from 'react';
import './scss/app.scss';
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import {Route, Routes} from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import NotFound from "./Components/other/NotFound/NotFound";

function App() {
    const [searchValue, setSearchValue] = useState('')

    return (
        <div className="wrapper">
            <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
            <div className="content">
                <Routes>
                    <Route path={'/'} element={<Content searchValue={searchValue} setSearchValue={setSearchValue}/>}/>
                    <Route path={'cart/*'} element={<Cart/>}/>
                    <Route path={'*'} element={<NotFound/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
