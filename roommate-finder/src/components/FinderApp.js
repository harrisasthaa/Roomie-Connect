import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import FinderLayout from './FinderLayout';

function FinderApp(props) {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<FinderLayout />}></Route>
        </Routes>
    </BrowserRouter>
}

export default FinderApp;