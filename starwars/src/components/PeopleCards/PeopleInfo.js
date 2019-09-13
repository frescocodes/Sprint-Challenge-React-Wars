import React, { useState, useEffect} from "react";
import axios from "axios";
import PeopleCard from "./PeopleCard"


const PeopleInfo = () => {
    const [ data, setData ] = useState([]);
    // const [ items, setItems ] = useState('')

    useEffect(() => {
        axios.get('https://swapi.co/api/people')
        .then(response => {
            console.log(response)
            const info = response.data.results;
            setData(info);
            
        })
        .catch(error => {
            console.log('broken =>', error)
        })
    }, []) 

    return (
        // <PeopleCard />
        data.map((character, i) => {
            return (
                <PeopleCard 
                key={i}
                name={character.name}
                height={character.height}
                mass={character.mass}
                films={character.films}
                />

            )
            
        })
    ) // end return
} // end PeopleInfo

export default PeopleInfo