import { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';
import Button from './Button';

export function WhatsAppPopover({ phoneNumber = "447912941877" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const popoverRef = useRef(null);
  const textareaRef = useRef(null);

  // Close popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Focus on textarea when popover opens
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.focus();
        }
      }, 100);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const openWhatsApp = () => {
    const encodedMessage = encodeURIComponent(message.trim() || 'Hello! I would like to inquire about driving lessons.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
    setMessage('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      openWhatsApp();
    }
  };

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative" ref={popoverRef}>
      {/* WhatsApp Button */}
      <Button
        onClick={togglePopover}
        variant="success"
        iconOnly
        icon={<MessageCircle />}
        size="md"
        aria-label="Contact on WhatsApp"
        className=""
      />

      {/* Popover */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">WhatsApp Chat</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Send us a message</p>
              </div>
            </div>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              iconOnly
              icon={<X />}
              size="sm"
              className=""
            />
          </div>

          {/* Message Input */}
          <div className="p-4">
            <label htmlFor="whatsapp-message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Your Message
            </label>
            <textarea
              ref={textareaRef}
              id="whatsapp-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Hello! I would like to inquire about driving lessons..."
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 bg-gray-100 dark:text-white resize-none"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Press Enter to send or Shift+Enter for new line
            </p>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-b-lg">
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <MessageCircle className="w-4 h-4 text-green-500" />
              <span>+{phoneNumber.replace(/(\d{2})(\d{4})(\d{6})/, '$1 $2 $3')}</span>
            </div>
            <Button
              onClick={openWhatsApp}
              variant="success"
              icon={<Send />}
              size="sm"
              className=""
            >
              Send
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}