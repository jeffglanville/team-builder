import React, {useState} from 'react';
import './Form.css';

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
        <div>
            <form onSubmit = {e => handleSubmit(e)}>
                <label>
                    Name: <input type = 'text' name = 'name' value = {teamMember.name} onChange = {e => handleChange(e)} />
                </label>
                <label>
                    Email: <input type = 'text' name = 'email' value = {teamMember.email} onChange = {e => handleChange(e)} />
                </label>
                <label>
                    Role: <input type = 'text' name = 'role' value = {teamMember.role} onChange = {e => handleChange(e)} />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}



export default Form;