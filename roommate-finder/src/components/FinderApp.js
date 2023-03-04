import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import FinderLayout from './FinderLayout';
import Discover from './Discover';

function FinderApp(props) {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<FinderLayout />}></Route>
            <Route path="/discover" element={<Discover />}></Route>
        </Routes>
    </BrowserRouter>
}

export default FinderApp;