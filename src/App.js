import React, {useState} from 'react';
import Form from './Components/Form/Form';
import Card from './Components/Card/Card';
import './App.scss';


function App() {
 const [teamMember, setTeamMember] = useState({members:[],name: '', email: '', role: ''});

  return (
    <div className="App">
      <Form teamMember={teamMember} setTeamMember={setTeamMember} />
      <Card teamMember={teamMember} setTeamMember={setTeamMember} />
    </div>
  );
}

export default App;
