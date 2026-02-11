import { useState, useEffect } from "react";

function Rooms() {
    const [rooms, setRooms] = useState<string[]>(['General','Sports','Tech']);

    useEffect(() => {
        //Fetch rooms from backend. Currently adding dummy data
    },[])

    return(
        <>
        <h2>Rooms</h2>
        {rooms.map((room:string) => <p key={room}>{room}</p>)}

        </>
    )
}

export default Rooms;