import React, {useState} from 'react';
import './Form.scss';


function Form() {
    const [teamMember, setTeamMember] = useState({name: '', email: '', role: ''});

    const handleChange = e => {
        setTeamMember({...teamMember, [e.target.name]: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        // setTeamMember({name: '', email: '', role: '', });
        const newTeamMember = {...teamMember, };
        console.log(teamMember);
    };


    return (
        <div className = 'container'>
            <h1>Add a Team Member</h1>
            <form onSubmit = {e => handleSubmit(e)}>
                <label className = 'name' >
                    <input type = 'text' name = 'name' value = {teamMember.name} placeholder = 'name' onChange = {e => handleChange(e)} />
                </label><br />
                <label className = 'email' >
                    <input type = 'text' name = 'email' value = {teamMember.email} placeholder = 'email' onChange = {e => handleChange(e)} />
                </label><br />
                <label className = 'role' >
                    <input type = 'text' name = 'role' value = {teamMember.role} placeholder = 'role' onChange = {e => handleChange(e)} />
                </label><br />
                <button type = 'submit' onSubmit = {e => handleSubmit(e)}>Add New Member Information</button>
            </form>
            <h2>Team Member:</h2>
        </div>
    )
}



export default Form;