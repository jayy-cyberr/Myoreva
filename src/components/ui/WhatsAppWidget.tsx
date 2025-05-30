import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  const whatsappNumber = '+2348000000000';
  const whatsappMessage = encodeURIComponent('Hello, I have a question about MYOREVA products.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {isOpen && (
        <div className="bg-white rounded-lg shadow-lg p-4 mb-4 w-72 animate-fadeIn">
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-semibold text-primary">Chat with us</h4>
            <button 
              onClick={toggleWidget}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Have questions about our products? Chat with our support team on WhatsApp!
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary w-full flex justify-center items-center bg-[#25D366] hover:bg-[#128C7E]"
          >
            <MessageCircle size={18} className="mr-2" />
            Start Chat
          </a>
        </div>
      )}
      
      <button
        onClick={toggleWidget}
        className={`rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-all ${
          isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-[#25D366] hover:bg-[#128C7E]'
        }`}
        aria-label={isOpen ? 'Close WhatsApp chat' : 'Open WhatsApp chat'}
      >
        {isOpen ? (
          <X size={24} className="text-white" />
        ) : (
          <MessageCircle size={24} className="text-white" />
        )}
      </button>
    </div>
  );
};

export default WhatsAppWidget;