import React from 'react';
import {team} from '../Team/Team';
import './Card.scss';

function Card() {
    return (
        <div className = 'team-wrapper'>
            {team.map((team, idx) => {
                return (
                    <div key = {idx} className = 'team-content'>
                        <p>{team.Name}</p>
                        <p>{team.email}</p>
                        <p>{team.Role}</p>
                    </div>
                )
            })}
        </div>
    )
}



export default Card;