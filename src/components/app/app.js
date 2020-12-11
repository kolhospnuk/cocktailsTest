import React from 'react';
import {Container} from "react-bootstrap";

import Header from '../header/header'
import TestList from "../testList/testList";

const App = () => {

    return (
        <Container>
            <Header/>
            <TestList/>
        </Container>
    )
}

export default App;