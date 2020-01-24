import React from 'react';
import './Form.scss';



function Form(props) {
    const {teamMember, setTeamMember} = props
    const handleChange = e => {
        setTeamMember({...teamMember, [e.target.name]: e.target.value});
    }

    console.log(teamMember)

    const handleSubmit = e => {
        e.preventDefault();
        const member = {name: teamMember.name, email: teamMember.email, role: teamMember.role}
        setTeamMember({...teamMember,members:[...teamMember.members, member]});
        console.log(teamMember, 'adding a new member');
    };

    if (!teamMember){
        return <h1>Loading...</h1>
    }
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
        </div>
    )
}



export default Form;