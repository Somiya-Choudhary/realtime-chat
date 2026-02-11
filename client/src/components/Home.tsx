import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const [name,setName] = useState('');
    const navigate = useNavigate();

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const handleSubmit = () => {
       //Do api call to backend and get all the rooms to join for user and go to next page
       navigate("/rooms");
    }



    return(
        <>
            <h1>Welcome to Real Time Chat</h1>
            <h4>Enter Your Name:</h4>
            <input value={name} onChange={handleNameChange} />
            <button onClick={handleSubmit}>Submit</button>
        
        </>
    )

}

export default Home;