import { useState, useEffect } from "react";

export function PostsPage() {
    const [messages, setMessages] = useState([]);

    const getMessages = async () => {
        const response = await fetch("http://localhost:8080/posts");
        const data = await response.json();
        const sortedMessages = data.sort((a, b) => a.id - b.id);
        setMessages(sortedMessages);
    }

    useEffect(() => {
        getMessages();
    }, []);



    const handleLike = async (postId) => {
        await fetch(`http://localhost:8080/posts/${postId}/like`, {
            method: 'PUT',
        });
    
        getMessages();
    };

    const handleDelete = async (postId) => {
        const response = await fetch(`http://localhost:8080/posts/${postId}`, {
          method: 'DELETE',
        });
    
        setMessages((prevMessages) => prevMessages.filter((message) => message.id !== postId));
        
      };


    return (<>
        <h2 id="title-top">List of posts</h2>
        <div id="messageContainer">
            {messages.map((message) => (
                <div key={message.id}>
                    <div id="titMesCat">
                    <h2>Title: {message.title}</h2>
                    <h3>Message: {message.content}</h3>
                    <h4>Category: {message.category_name}</h4>
                    </div>
                    <div id="butsAndLikes">
                    <button onClick={() => handleLike(message.id)}>{message.likes === 1 ? 'Dislike' : 'Like'}</button>
                    <p>{message.likes} {message.likes === 1 ? 'like' : 'likes'}</p>
                    <button onClick={() => handleDelete(message.id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    </>);
}