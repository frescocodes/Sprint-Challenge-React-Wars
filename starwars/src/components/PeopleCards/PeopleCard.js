import React from "react";
import { CardBody, Card, CardTitle, CardText, Col } from "reactstrap";
import styled from "styled-components";


const CardContainer = styled.div`
    display: flex;
`

const PeopleCard = props => {

    if (!props.name) {
        return <h1>Loading....</h1>
    }

    return (
    <CardContainer>
        <div className="card">
                <h1>{props.name}</h1>
                <p>{props.name} rides around town in a super extra CASH starship (only the best money can buy). {props.name} stands a whopping {props.height}cm tall, and weighs down their ship by {props.weight}lbs (for some reason we decided to use the imperial system here instead of metric like we did with height, no one knows why). They've starred in  {props.films.length} films, and hopefully no more because Star Wars is a terribly overrated series.</p>
        </div>
    </CardContainer>
    )
}

export default PeopleCard