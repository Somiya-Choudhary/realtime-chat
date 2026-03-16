import { useState, useEffect } from 'react';

function Signup() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        //api call for signup
    }

    return(
        <div>
            <h2>Signup For Realtime Chat</h2>
            <p>Name: <input onChange={(e) => setName(e.target.value)}/></p>
            <p>Email: <input onChange={(e) => setEmail(e.target.value)}/></p>
            <p>Password: <input onChange={(e) => setPassword(e.target.value)}/></p>
            <button onClick={handleSubmit}>Submit</button>

        </div>
    )
}

export default Signup