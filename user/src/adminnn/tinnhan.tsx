import React, { useState, useEffect } from "react";
import "../css/admin.css";
const Tinnhan = () => {
  const [messages, setMessages] = useState<{ id: number; text: string; sender: string }[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<{ id: number; text: string } | null>(null);
  const [responseMessage, setResponseMessage] = useState<string>('');
  const [newMessage, setNewMessage] = useState<string>(''); // State để lưu tin nhắn mới

  // Tải dữ liệu từ localStorage khi component được gắn vào
  useEffect(() => {
    const storedMessages = localStorage.getItem('messages');
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  }, []);

  // Lưu tin nhắn vào localStorage mỗi khi messages thay đổi
  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(messages));
  }, [messages]);

  // Function to send the response
  const sendResponse = () => {
    if (selectedMessage) {
      const newResponse = { id: messages.length + 1, text: responseMessage, sender: 'Nhân viên' };
      setMessages([...messages, newResponse]);
      setResponseMessage(''); // Xóa trường nhập phản hồi
      setSelectedMessage(null); // Reset tin nhắn đã chọn
    } else {
      alert("Vui lòng chọn tin nhắn để trả lời.");
    }
  };

  // Function to select a message for response
  const handleSelectMessage = (message: { id: number; text: string }) => {
    setSelectedMessage(message);
    setResponseMessage(''); // Reset phản hồi khi chọn tin nhắn mới
  };

  // Function to add a new message from the customer
  const addNewMessage = () => {
    if (newMessage) {
      const newMsg = { id: messages.length + 1, text: newMessage, sender: 'Khách hàng' };
      setMessages([...messages, newMsg]);
      setNewMessage(''); // Xóa trường nhập tin nhắn mới
    } else {
      alert("Vui lòng nhập tin nhắn.");
    }
  };

  return ( 
    <>
        <div className="main-content">
          <header>
            <h1>Trả Lời Tin Nhắn Khách Hàng</h1>
          </header>
          {/* Tin nhắn khách hàng */}
          <section>
            <h2>Tin Nhắn Khách Hàng</h2>
            <div id="messageList">
              {messages.map((message) => (
                <div 
                  key={message.id} 
                  onClick={() => handleSelectMessage({ id: message.id, text: message.text })} 
                >
                  <strong>{message.sender}:</strong> {message.text}
                </div>
              ))}
            </div>
          </section>
          {/* Form thêm tin nhắn mới */}
          <section className="new-message-form">
            <h2>Thêm Tin Nhắn Mới</h2>
            <textarea 
              placeholder="Nhập tin nhắn của khách hàng tại đây..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)} // Lưu nội dung tin nhắn mới
            />
            <button onClick={addNewMessage}>Thêm Tin Nhắn</button>
          </section>
          {/* Form trả lời tin nhắn */}
          <section className="response-form">
            <h2>Trả Lời</h2>
            <label htmlFor="selectedMessage">Tin nhắn đã chọn:</label>
            <textarea 
              id="selectedMessage" 
              readOnly 
              value={selectedMessage ? selectedMessage.text : ''} 
              placeholder="Chọn tin nhắn để trả lời..."
            />
            <label htmlFor="response">Nhập phản hồi của bạn:</label>
            <textarea 
              id="response" 
              placeholder="Nhập phản hồi tại đây..." 
              value={responseMessage}
              onChange={(e) => setResponseMessage(e.target.value)} // Lưu nội dung phản hồi
            />
            <button onClick={sendResponse}>Gửi Phản Hồi</button>
          </section>
        </div>
    </>
  );
};

export default Tinnhan;
