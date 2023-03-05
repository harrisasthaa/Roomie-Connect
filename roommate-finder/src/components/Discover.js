import React from 'react';
import {useState, useEffect} from 'react';
import DiscoverCard from './DiscoverCard';

export default function Discover() {

    
    const [users, setUsers] = useState([
        {id: 0,
        first_name: "Chase",
        last_name: "Mathis",
        age: 20,
        gender: 0,
        school: "University of Wisconsin - Madison",
        city: "New York City",
        state: "New York",
        price_lower: 1500,
        price_upper: 2500,
        description: "Hi everyone! I am looking for housing in the NYC area this summer"},
        {
        id: 1,
        first_name: "Chris",
        last_name: "Plagge",
        gender: 0,
        age: 21,
        school: "University of Wisconsin - Madison",
        city: "Madison",
        state: "Wisconsin",
        min_price: 1500,
        max_price: 2500,
        description: "HELJKEOEONGONSGONHGIONHIHNSOHNOHISHNIHHOSNHOHNHOI"}
        ]);

    //const [users, setUsers] = useState([]);
    
    /*
    useEffect(() => {
        fetch('http://127.0.0.1:5000/request1', {
            method: 'GET',
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Methods": "GET",
                "Access-Control-Request-Method": '*'
            }

        }).then(resp => resp.json())
        .then(resp => {
            setUsers(resp);
        })
    }, [])*/

    return (
        <div id="discoverBackground">
            {users.map((u) => (
                <DiscoverCard
                    key={u.id}
                    first_name={u.first_name}
                    last_name={u.last_name}
                    gender={u.gender}
                    age={u.age}
                    school={u.school}
                    city={u.city}
                    state={u.state}
                    description={u.description}
                    price_lower={u.price_lower}
                    price_upper={u.price_upper}/>
            ))}
        </div>
    )
};