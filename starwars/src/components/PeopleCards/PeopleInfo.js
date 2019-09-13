import React, { useState, useEffect} from "react";
import axios from "axios";
import PeopleCard from "./PeopleCard"


const PeopleInfo = () => {
    const [ data, setData ] = useState('');
    const [ items, setItems ] = useState('')

    useEffect(() => {
        axios.get('https://swapi.co/api/people')
        .then(response => {
            console.log(response)
            const people = response.data;
            setData(people)
        })
        .catch(error => {
            console.log('broken =>', error)
        })
    }, []) 

    return (
    <PeopleCard />
    )
}

export default PeopleInfo