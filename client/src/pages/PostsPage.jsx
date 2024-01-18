import { useState, useEffect } from "react";

export function PostsPage() {
    const [messages, setMessages] = useState([]);


    useEffect(() => {
        async function getMessages() {
            const response = await fetch("http://localhost:8080/posts");
            const data = await response.json();
            setMessages(data);
        }

        getMessages();
    },[messages]);

    

    return (<>
        <h2>List of posts</h2>
        <div id="messageContainer">
            {messages.map((message, index) => (
                <div key={index}>
                    <h2>Title: </h2>
                    <h2>{message.title}</h2>
                    <h3>Message: </h3>
                    <h3>{message.content}</h3>
                    <h4>Category: </h4>
                    <p> {message.category_name}</p>
                </div>
            ))}
        </div>
    </>);
}