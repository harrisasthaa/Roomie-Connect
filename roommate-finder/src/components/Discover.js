import React from 'react';
import {useState, useEffect} from 'react';
import DiscoverCard from './DiscoverCard';

export default function Discover() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        setUsers()
    }, [])

    return (
        <div>
            <div>
                {users.map((u) => (
                    <DiscoverCard key={u} name={u}/>
                ))}
            </div>
        </div>
    )
};