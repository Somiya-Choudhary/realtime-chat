import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Rooms() {
    const [rooms, setRooms] = useState<string[]>(['General','Sports','Tech']);
    const navigate = useNavigate();

    useEffect(() => {
        //Fetch rooms from backend. Currently adding dummy data
    },[]);

    const joinChannel = () => {
        const ws = new WebSocket('ws://localhost:8080');

        ws.onerror = (e) => console.log("ws error:", e);

        ws.onopen = () => {
        console.log("ws opened");
        ws.send("Hello from react app!!");
        };

        ws.onmessage = (event) => {
        console.log("from server:", event.data);
        };

        ws.onclose = () => console.log("ws closed");

        //navigate('/rooms/chat');
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