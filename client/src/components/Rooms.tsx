import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";
import { useChatStore } from "../stores/chatStore";
import { getRooms } from "../api/roomApi";
import type {Room} from "../types/room";

const wsUri = "ws://localhost:5000/";

function Rooms() {
    const [rooms, setRooms] = useState<Room[]>([]);
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const user = useAuthStore((state) => state.user);
    const addChat = useChatStore((state) => state.addChat);

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

    const joinChannel = (roomId: string) => {
        const socket = new WebSocket(wsUri);

        socket.addEventListener('open', () => {
            socket.send(JSON.stringify({
                type: 'JOIN_ROOM',
                roomId
            }))
        });

        socket.addEventListener('message', (event) => {
            try {
                const data = JSON.parse(event.data);
                addChat(data.messages);
            } catch {
                console.log('Non-JSON message:', event.data);
            }
        });

        navigate('/rooms/chat');
    }

    return(
        <>
            <h1>Welcome {user?.name}</h1>
            <h2>Rooms</h2>
            {rooms.map((room:Room) => <div>
                <p key={room.id}>{room.name}</p><button onClick={() => joinChannel(room.id)}>Join</button>
                </div>
            )}
            {
                error === true ? <p>Error retrieving rooms</p> : null
            }

        </>
    )
}

export default Rooms;