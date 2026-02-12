
const chatData = [
    {name: 'Luffy', message: "Hello Guys", timestamp: '2026-02-12 10:00:00'},
    {name: 'Robin', message: "Hey Pirat king", timestamp: '2026-02-12 10:01:15'},
    {name: 'Nami', message: "What's up Luffy?", timestamp: '2026-02-12 10:02:30'},
    {name: 'Zoro', message: "Heya", timestamp: '2026-02-12 10:03:05'},
    {name: 'Sanji', message: "Hello Nami chawn and Robin shawn", timestamp: '2026-02-12 10:04:40'},
    {name: 'Usopp', message: "What's up Guys", timestamp: '2026-02-12 10:05:10'},
    {name: 'Chopper', message: "Heyyyy", timestamp: '2026-02-12 10:06:25'},
    {name: 'Brook', message: "Hooooo", timestamp: '2026-02-12 10:07:50'},
    {name: 'Franky', message: "Heyyyy", timestamp: '2026-02-12 10:08:30'},
    {name: 'Jinbe', message: "Heyyyy", timestamp: '2026-02-12 10:09:45'},
];



function Chat () {
    return (
        <>
        {
            chatData.map((message) => 
                <div><p>{message.name}:{message.message}</p><p>{message.timestamp}</p>
                -------------------------
                </div>
            )
        }
            <div>
                <textarea /><br />
                <button>Submit</button>
            </div>
        </>
    )
}

export default Chat;