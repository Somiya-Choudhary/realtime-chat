import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { authApi } from "../api/authApi";
import { useAuthStore } from "../stores/authStore";

function Signup() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const setUser = useAuthStore((state) => state.setUser);
    const navigate = useNavigate();

    const handleSubmit = async () => {
        //api call for signup
        try {
           const userData =  await authApi({
                name,
                email,
                password
            },'signup');
            setUser(userData.newUser);
            navigate("/rooms");

        } catch {
            setError(true)
        }
    }

    return(
        <div>
            <h2>Signup For Realtime Chat</h2>
            <p>Name: <input onChange={(e) => setName(e.target.value)}/></p>
            <p>Email: <input onChange={(e) => setEmail(e.target.value)}/></p>
            <p>Password: <input onChange={(e) => setPassword(e.target.value)}/></p>
            <button onClick={handleSubmit}>Submit</button>
            {error === true ? <p>Error signing up. Please Retry.</p> : null}

        </div>
    )
}

export default Signup