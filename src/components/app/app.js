import React from 'react';
import "./app.css";

import Header from '../header/header'
import TestList from "../testList/testList";

const App = () => {

    return (
        <div className="app">
            <Header/>
            <TestList/>
        </div>
    )
}

export default App;