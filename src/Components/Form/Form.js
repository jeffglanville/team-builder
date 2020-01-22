import React, {useState} from 'react';
import './Form.scss';

function Form() {
    const [teamMember, setTeamMember] = useState({name: '', email: '', role: ''});

    const handleChange = e => {
        setTeamMember({...teamMember, [e.target.name]: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        setTeamMember({name: '', email: '', role: '', });
    };


    return (
        <div className = 'container'>
            <form onSubmit = {e => handleSubmit(e)}>
                <label className = 'name' >
                    Name:
                    <input type = 'text' name = 'name' value = {teamMember.name} onChange = {e => handleChange(e)} />
                </label><br />
                <label className = 'email' >
                    Email:
                    <input type = 'text' name = 'email' value = {teamMember.email} onChange = {e => handleChange(e)} />
                </label><br />
                <label className = 'role' >
                    Role:
                    <input type = 'text' name = 'role' value = {teamMember.role} onChange = {e => handleChange(e)} />
                </label><br />
                <button>Submit</button>
            </form>
        </div>
    )
}



export default Form;