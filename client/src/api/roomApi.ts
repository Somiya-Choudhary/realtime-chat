const BASEURL = 'http://localhost:5000/api/rooms';

export const getRooms = async () => {
    const response = await fetch(`${BASEURL}`);

    if (!response.ok) {
        throw new Error("Failed getting rooms");
    }

    const data = await response.json();

    return data;
}