import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    const onLogin = () => {
        navigate("/login");
    }

    const onSignup = () => {
       navigate("/signup");
    }

    return(
        <>
            <h1>Welcome to Real Time Chat</h1>
            <button onClick={onLogin}>Login</button>
            <button onClick={onSignup}>Signup</button>
        </>
    )

}

export default Home;