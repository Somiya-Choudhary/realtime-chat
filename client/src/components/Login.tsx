import { useState, useEffect } from 'react';

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        //api call to login
    }

    return(
        <>
            <h2>Login To Realtime Chat App</h2>
            <p>Email: <input onChange={(e) => setEmail(e.target.value)}/></p>
            <p>Password: <input onChange={(e) => setPassword(e.target.value)}/></p>
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default Login;