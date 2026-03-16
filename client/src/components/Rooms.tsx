import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";
import { getRooms } from "../api/roomApi";
import type {Room} from "../types/room";

function Rooms() {
    const [rooms, setRooms] = useState<Room[]>([]);
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const user = useAuthStore((state) => state.user);

    useEffect(() => {
        const fetchRooms = async () => {
        try {
            const rooms = await getRooms();
            setRooms(rooms.rooms);
        } catch {
            setError(true);
        }
    };

    fetchRooms();

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

        navigate('/rooms/chat');
    }

    return(
        <>
            <h1>Welcome {user?.name}</h1>
            <h2>Rooms</h2>
            {rooms.map((room:Room) => <div>
                <p key={room.id}>{room.name}</p><button onClick={joinChannel}>Join</button>
                </div>
            )}
            {
                error === true ? <p>Error retrieving rooms</p> : null
            }

        </>
    )
}

export default Rooms;