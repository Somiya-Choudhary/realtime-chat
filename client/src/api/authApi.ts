const BASEURL = "http://localhost:5000/api/user";

export const authApi = async (userData, api) => {
    const response = await fetch(`${BASEURL}/${api}`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    });

    if (!response.ok) {
        throw new Error("Authentication failed");
    }

    const data = await response.json();

    return data;
}