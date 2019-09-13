import React from "react";
import styled from "styled-components";


export const CardContainer = styled.div`
    display: flex;
`

const Card = styled.div`
    background:  orange;
    margin-bottom: 2%;
    margin-top: 2%;
`

export const Heading = styled.h1`
    color: #fff;
`

export const Text = styled.p`
    color: #fff;
`

export const PeopleCard = props => {

    if (!props.name) {
        return <h1>Loading....</h1>
    }

    return (
    
        <Card>
            <Heading>{props.name}</Heading>
            <p>{props.name} rides around town in a super extra CASH starship (only the best money can buy). {props.name} stands a whopping {props.height}cm tall, and weighs down their ship by {props.weight}lbs (for some reason we decided to use the imperial system here instead of metric like we did with height, no one knows why). They've starred in  {props.films.length} films, and hopefully no more because Star Wars is a terribly overrated series.</p>
        </Card>
    )
}

