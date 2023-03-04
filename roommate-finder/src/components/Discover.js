import React from 'react';
import {useState, useEffect} from 'react';
import DiscoverCard from './DiscoverCard';

export default function Discover() {

    const [users, setUsers] = useState([{
        user_id: 0,
        first_name: "Chase",
        last_name: "Mathis",
        age: 20,
        school: "University of Wisconsin - Madison",
        city: "Madison",
        state: "Wisconsin",
        min_price: 1000,
        max_price: 2000
    }, {
        user_id: 1,
        first_name: "Chris",
        last_name: "Plagge",
        age: 21,
        school: "University of Wisconsin - Madison",
        city: "Madison",
        state: "Wisconsin",
        min_price: 1500,
        max_price: 2500
    }]);

    useEffect(() => {
    }, [])

    return (
        <div>
            <div>
                {users.map((u) => (
                    <DiscoverCard 
                        key={u.user_id}
                        first_name={u.first_name}
                        last_name={u.last_name}
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