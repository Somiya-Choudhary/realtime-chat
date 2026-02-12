import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Rooms() {
    const [rooms, setRooms] = useState<string[]>(['General','Sports','Tech']);
    const navigate = useNavigate();

    useEffect(() => {
        //Fetch rooms from backend. Currently adding dummy data
    },[]);

    const joinChannel = () => {
        navigate('/rooms/chat');
    }

    return(
        <>
        <h2>Rooms</h2>
        {rooms.map((room:string) => <div>
            <p key={room}>{room}</p><button onClick={joinChannel}>Join</button>
            </div>
        )}

        </>
    )
}

export default Rooms;