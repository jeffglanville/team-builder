import React from 'react';
import {team} from '../Team/Team';
import './Card.scss';

function Card() {
    return (
        <div>
            {team.map(function(idx) {
                return (
                    <div>
                        <p key = {idx}>{team.name}</p>
                        <p key = {idx}>{team.email}</p>
                        <p key = {idx}>{team.role}</p>
                    </div>
                )
            })}
        </div>
    )
}



export default Card;