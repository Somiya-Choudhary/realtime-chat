import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { authApi } from "../api/authApi";
import { useAuthStore } from "../stores/authStore";

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const setUser = useAuthStore((state) => state.setUser);

    const handleSubmit = async () => {
        //api call to login
        try {
           const userData =  await authApi({
                email,
                password
            },'login');
            setUser(userData.user);
            navigate("/rooms");

        } catch {
            setError(true)
        }
    }

    return(
        <>
            <h2>Login To Realtime Chat App</h2>
            <p>Email: <input onChange={(e) => setEmail(e.target.value)}/></p>
            <p>Password: <input onChange={(e) => setPassword(e.target.value)}/></p>
            <button onClick={handleSubmit}>Submit</button>
            {error === true ? <p>Error login in. Please Retry.</p> : null}
        </>
    )
}

export default Login;