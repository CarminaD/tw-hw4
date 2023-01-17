import React, {useState} from 'react';
import RobotList from './RobotList';
import store from '../stores/RobotStore'


const RobotForm=()=>{
    const [name, setName]=useState('');
    const [type, setType]=useState('');
    const [mass, setMass]=useState('');

const handleSubmit=(e)=>{
    e.preventDefault();
    if (!name || !type || !mass) {
        return;
    }
    const newRobot = {
        name: name,
        type: type,
        mass: mass
    };
    store.addRobot(newRobot);

    setName('');
    setType('');
    setMass('');
}

return (
    <div>
        <div>
        Robot form
    <form onSubmit={handleSubmit}>
        <label>
            Name:
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </label>
        <br />
        <label>
            Type:
            <input type="text" value={type} onChange={e => setType(e.target.value)} />
        </label>
        <br />
        <label>
            Mass:
            <input type="text" value={mass} onChange={e => setMass(e.target.value)} />
        </label>
        <br />
        <button type="submit">Add</button>
        <br />
    </form>
    </div>
    </div>
);
}

export default RobotForm;