import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import FinderLayout from './FinderLayout';
import Discover from './Discover';
import Profile from './Profile';
import Matches from './Matches';

function FinderApp(props) {
    return( 
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FinderLayout />}>
                    <Route path="/discover" element={<Discover />}></Route>
                    <Route path="/profile" element={<Profile />}></Route>
                    <Route path="/matches" element={<Matches />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </>);
}

export default FinderApp;