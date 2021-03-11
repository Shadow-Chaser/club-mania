import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Team from '../Team/Team';
import banner from '../../assets/banner.jpg'
import './Home.css'

const Home = () => {
    const [teams, setTeams] = useState([]);
    useEffect(()=>{
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then(res => res.json())
        .then(data => setTeams(data.teams))

    },[])
    return (
        <div>
            <div className="banner-img">
                <img src={banner} alt=""/>
                <div className="banner-text">
                    <h1>Team Tracker</h1>
                </div>
            </div>

            <Row className='d-flex justify-content-center'>
                {
                    teams.map(team => <Team team = {team} key={team.idTeam} ></Team>)
                }
            </Row>     
        </div>
    );
};

export default Home;