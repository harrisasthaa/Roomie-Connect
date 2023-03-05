import React from 'react';
import {useState, useEffect, useContext} from 'react';
import UserContext from './UserContext';
import MatchesCard from './MatchesCard';
import {Alert} from 'react-bootstrap';

export default function Matches() {

    const [userEmail, setUserEmail] = useContext(UserContext);

    const [users, setUsers] = useState([]);
    
    
    useEffect(() => {
        fetch(`http://127.0.0.1:5000/getMatches?email=${userEmail}`, {
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
    }, [])

    const displayInfo = () => {
        if (userEmail) {
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
                            about_me={u.about_me}
                            price_lower={u.price_lower}
                            price_upper={u.price_upper}
                            phone={u.phone}
                            img_link={u.img_link}/>
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