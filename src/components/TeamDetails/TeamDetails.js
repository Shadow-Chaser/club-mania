import React from 'react';
import  { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Row, Col } from 'react-bootstrap';
import male from '../../assets/male.png'
import female from '../../assets/female.png'
import './TeamDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faFlag, faFutbol, faMars } from '@fortawesome/free-solid-svg-icons'
import SocialFollow from '../SocialFollow/SocialFollow';


const TeamDetails = (props) => {
    const {idTeam} = useParams();
    const [teamDetails, setTeamDetails] = useState([]);


    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`)
        .then(res => res.json())
        .then(data => setTeamDetails(data.teams))
    },[idTeam])

    const {strTeam, intFormedYear, strSport, strCountry, strDescriptionEN, strGender} = teamDetails[0] || {};
    let Image;
    if(strGender === "Male"){
        Image= <img src={male} alt="" style = {{ width:'300px' }}/>;
    }
    else if(strGender === "Female"){
        Image =  <img src={female} alt="" style = {{ width:'300px' }}/>
    }
    console.log(Image);
    return (
        <div>
            
            <div className="main-container ">
                <Row className='banner d-flex justify-content-around'>
                    <Col className='first-col '>
                        <h3>{strTeam}</h3>
                        <h5><FontAwesomeIcon icon={faMapMarkerAlt}/>  Founded: {intFormedYear}</h5>
                        <h5><FontAwesomeIcon icon={faFlag}/>  Country: {strCountry}</h5>
                        <h5><FontAwesomeIcon icon={faFutbol}/>  Sport Type: {strSport}</h5>
                        <h5><FontAwesomeIcon icon={faMars}/>  Gender: {strGender}</h5>
                    </Col>
                    
                    <Col className='second-col'>
                       {Image}
                    </Col>
                </Row>

                <p>{strDescriptionEN}</p>
            </div>

            <SocialFollow teamDetails = {teamDetails} ></SocialFollow>

        </div>
    );
};

export default TeamDetails;