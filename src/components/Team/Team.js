import React from 'react';
import { useHistory } from 'react-router';
import { Card, Button } from 'react-bootstrap';
import './Team.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

const Team = (props) => {
    const {idTeam, strTeam, strTeamBadge,strSport} = props.team;
    const history = useHistory();
    const showTeamDetails=(idTeam)=>{
        const url = `team/${idTeam}`;
        history.push(url);
    }
    return (
        <div>
            
            <Card style={{ width: '18rem' }} className='m-2 p-2 team-card'>
                <Card.Img variant="top" src={strTeamBadge} className='card-img' />
                <Card.Body>
                    <Card.Title className='text-center'>{strTeam}</Card.Title>
                    <Card.Text className='text-center'>Sports Type: {strSport}</Card.Text>
                    <Button  variant="info" onClick={()=> showTeamDetails(idTeam)}>Explore <FontAwesomeIcon icon={faLongArrowAltRight} /></Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Team;