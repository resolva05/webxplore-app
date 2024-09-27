import { useState, useRef } from 'react';
import './Chatbot.css';
import { ListGroup } from 'react-bootstrap';
import chatbot from '../../assets/chatbot.png'
import close from '../../assets/close.png'


const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Welcome! How can I help you today?' },
    { sender: 'bot', text: 'You can choose from the predefined questions below.' }
  ]);
  
  // Reference for the message box
  const messageBoxRef = useRef(null);

  // Extended predefined questions and answers
  const predefinedQuestions = [
    { question: "What services do you offer?", answer: "We offer web development, mobile apps, and digital marketing services." },
    { question: "How can I contact support?", answer: "You can contact support via email at support@example.com or call our helpline at +123456789." },
    { question: "What are your working hours?", answer: "Our working hours are from 9 AM to 6 PM, Monday to Friday." },
    { question: "Do you offer custom solutions?", answer: "Yes, we provide custom solutions tailored to meet specific business needs." },
    { question: "Where are you located?", answer: "We are located at 1234 Main Street, Springfield." },
    { question: "What is your refund policy?", answer: "Our refund policy allows for a full refund within 30 days of purchase." },
    { question: "Can I get a demo of your services?", answer: "Yes, we can schedule a demo. Please contact us to arrange one." },
    { question: "Do you provide training for your products?", answer: "Yes, we offer training sessions for all our products upon request." },
    { question: "What payment methods do you accept?", answer: "We accept various payment methods including credit cards, PayPal, and bank transfers." },
    { question: "Can I upgrade my plan later?", answer: "Yes, you can upgrade your plan at any time." },
  ];

  // Toggle chatbot visibility
  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  // Handle clicking on a predefined question
  const handleQuestionClick = (selectedQuestion) => {
    const userMessage = { sender: 'user', text: selectedQuestion.question };
    setMessages([...messages, userMessage]);

    // Simulate bot's response based on the selected question
    setTimeout(() => {
      const botMessage = { sender: 'bot', text: selectedQuestion.answer };
      setMessages(prevMessages => [...prevMessages, botMessage]);
      
      // Scroll to bottom of message box
      if (messageBoxRef.current) {
        messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight;
      }
    }, 1000);
  };

  // Prevent window scrolling when interacting with the message box
  const handleScroll = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="chatbot-container">
      {/* Chatbot Icon */}
      {!isOpen && (
        <button className="chatbot-icon " onClick={toggleChatbot}>
          {/* <i className="bi bi-chat"></i> */}
          <img src={chatbot} alt="" className='imgchat'/>
        </button>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div className="chatbot-window">
          {/* Chatbot Header */}
          <div className="chatbot-header">
            <h5>Have a doubt? We are here to help!</h5>
            <button onClick={toggleChatbot} className="close-btn">
              <img src={close} alt=""className='closebtn' />
            </button>
          </div>

          {/* Chatbot Body */}
          <div className="chatbot-body">
            {/* Message Box */}
            <div 
              className="message-box" 
              ref={messageBoxRef} 
              onScroll={handleScroll}
            >
              {messages.map((message, index) => (
                <div key={index} className={`message ${message.sender}`}>
                  {message.sender === 'bot' && (
                    <img 
                      src="https://cdn-icons-png.flaticon.com/512/2363/2363324.png" 
                      alt="Bot" 
                      className="message-icon" 
                    />
                  )}
                  {message.text}
                </div>
              ))}
            </div>

            {/* Predefined Questions */}
            <div className="questions">
              <h6>Predefined Questions</h6>
              <ListGroup>
                {predefinedQuestions.map((item, index) => (
                  <ListGroup.Item 
                    key={index} 
                    action 
                    onClick={() => handleQuestionClick(item)}
                  >
                    {item.question}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
