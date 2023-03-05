import React from 'react';
import {useState, useEffect, useContext} from 'react';
import UserContext from './UserContext';
import MatchesCard from './MatchesCard';
import {Alert} from 'react-bootstrap';

export default function Matches() {

    const [userEmail, setUserEmail] = useContext(UserContext);
    
    const [users, setUsers] = useState([
        {id: 0,
        first_name: "Chase",
        last_name: "Mathis",
        age: 20,
        gender: 0,
        university: "University of Wisconsin - Madison",
        location: "New York City, New York",
        price_lower: 1500,
        price_upper: 2500,
        description: "Hi everyone! I am looking for housing in the NYC area this summer",
        phone_number: "763-657-6338"},
        {
        id: 1,
        first_name: "Chris",
        last_name: "Plagge",
        gender: 0,
        age: 21,
        university: "University of Wisconsin - Madison",
        location: "Madison, WI",
        min_price: 1500,
        max_price: 2500,
        description: "HELJKEOEONGONSGONHGIONHIHNSOHNOHISHNIHHOSNHOHNHOI",
        phone_number: "123-456-7890"}
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

    const displayInfo = () => {
        if (true) {
            return (
                <div id="discoverBackground">
                    {users.map((u) => (
                        <MatchesCard
                            key={u.id}
                            first_name={u.first_name}
                            last_name={u.last_name}
                            gender={u.gender}
                            age={u.age}
                            university={u.university}
                            location={u.location}
                            aboutMe={u.description}
                            price_lower={u.price_lower}
                            price_upper={u.price_upper}
                            phone_number={u.phone_number}/>
                    ))}
                </div>
            )
        } else {
            return (
                <Alert variant="danger" className="text-center">
                    Please fill out your profile before looking at matches
                </Alert>
            )
        }
    }

    return (
        <div id="discoverBackground">
            {displayInfo()}
        </div>
    )
};