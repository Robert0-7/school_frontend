import { useState, useEffect } from 'react';
import './Messages.css';

function Messages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch('/api/messages');
      if (response.ok) {
        const data = await response.json();
        setMessages(data);
      }
    } catch (err) {
      console.error('Failed to fetch messages:', err);
    }
  };

  return (
    <div className="messages-container">
      <h2>Contact Messages</h2>
      <div className="messages-list">
        {messages.map((msg, index) => (
          <div key={index} className="message-card">
            <div className="message-header">
              <h4>{msg.name}</h4>
              <span>{new Date(msg.timestamp).toLocaleString()}</span>
            </div>
            <p>{msg.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Messages;
