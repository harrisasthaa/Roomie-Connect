import React from 'react';
import {useState, useEffect} from 'react';
import DiscoverCard from './DiscoverCard';

export default function Discover() {

    /*const [users, setUsers] = useState([{
        user_id: 0,
        first_name: "Chase",
        last_name: "Mathis",
        age: 20,
        gender: "Male",
        school: "University of Wisconsin - Madison",
        city: "Madison",
        state: "Wisconsin",
        min_price: 1000,
        max_price: 2000
    }, {
        user_id: 1,
        first_name: "Chris",
        last_name: "Plagge",
        gender: "Male",
        age: 21,
        school: "University of Wisconsin - Madison",
        city: "Madison",
        state: "Wisconsin",
        min_price: 1500,
        max_price: 2500
    }]);*/

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/request1', {
            method: 'GET',
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Methods": "GET",
                "Access-Control-Request-Method": '*'
            }

        }).then(resp => {
            console.log(resp);
            return resp.json();
        }).then(resp => {
            console.log(resp);
            setUsers(resp);
        })
    }, [])

    return (
        <div>
            <div>
                {users.map((u) => (
                    <DiscoverCard 
                        key={u.user_id}
                        first_name={u.first_name}
                        last_name={u.last_name}
                        gender={u.gender}
                        age={u.age}
                        school={u.school}
                        city={u.city}
                        state={u.state}
                        min_price={u.min_price}
                        max_price={u.max_price}/>
                ))}
            </div>
        </div>
    )
};