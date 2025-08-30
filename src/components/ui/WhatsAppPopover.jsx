import { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';
import Button from './Button';

export function WhatsAppPopover({ phoneNumber = "447912941877" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [position, setPosition] = useState({ vertical: 'bottom', horizontal: 'right' });
  const popoverRef = useRef(null);
  const buttonRef = useRef(null);
  const textareaRef = useRef(null);

  // Calculate optimal position based on available space
  const calculatePosition = () => {
    if (!buttonRef.current) return;

    const buttonRect = buttonRef.current.getBoundingClientRect();
    const viewport = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    
    const popoverWidth = 320; // w-80 = 20rem = 320px
    const popoverHeight = 400; // Approximate height
    const spacing = 8; // mb-2/mt-2 = 8px

    // Check vertical space
    const spaceAbove = buttonRect.top;
    const spaceBelow = viewport.height - buttonRect.bottom;
    const vertical = spaceBelow >= popoverHeight + spacing ? 'bottom' : 
                    spaceAbove >= popoverHeight + spacing ? 'top' : 
                    spaceBelow > spaceAbove ? 'bottom' : 'top';

    // Check horizontal space
    const spaceRight = viewport.width - buttonRect.right;
    const spaceLeft = buttonRect.left;
    let horizontal = 'right';

    if (spaceRight >= popoverWidth) {
      horizontal = 'right';
    } else if (spaceLeft >= popoverWidth) {
      horizontal = 'left';
    } else {
      // If neither side has enough space, choose the side with more space
      horizontal = spaceRight > spaceLeft ? 'right' : 'left';
    }

    setPosition({ vertical, horizontal });
  };

  // Close popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    const handleResize = () => {
      if (isOpen) {
        calculatePosition();
      }
    };

    if (isOpen) {
      calculatePosition();
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
      window.addEventListener('resize', handleResize);
      window.addEventListener('scroll', handleResize);
      
      // Focus on textarea when popover opens
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.focus();
        }
      }, 100);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleResize);
    };
  }, [isOpen]);

  const openWhatsApp = () => {
    const encodedMessage = encodeURIComponent(message.trim() || 'Hello! I would like to inquire about driving lessons.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
    setMessage('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      openWhatsApp();
    }
  };

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  // Generate positioning classes based on calculated position
  const getPositionClasses = () => {
    const classes = ['absolute', 'w-80', 'max-w-[calc(100vw-1rem)]', 'bg-white', 'border', 'border-gray-200', 'z-[10000]', 'transition-all', 'duration-200'];
    
    // Vertical positioning
    if (position.vertical === 'bottom') {
      classes.push('top-full', 'mt-2', 'animate-fade-in-down');
    } else {
      classes.push('bottom-full', 'mb-2', 'animate-fade-in-up');
    }
    
    // Horizontal positioning
    if (position.horizontal === 'right') {
      classes.push('left-0');
    } else {
      classes.push('right-0');
    }
    
    return classes.join(' ');
  };

  return (
    <>

      <div className="relative hidden md:block" ref={popoverRef}>
        {/* WhatsApp Button */}
        <Button
          ref={buttonRef}
          onClick={togglePopover}
          variant="success"
          iconOnly
          icon={<MessageCircle />}
          size="md"
          aria-label="Contact on WhatsApp"
          className="relative z-[10001]"
        />

        {/* Popover */}
        {isOpen && (
          <div className={getPositionClasses()}>
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-500 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">WhatsApp Chat</h3>
                  <p className="text-sm text-gray-600">Send us a message</p>
                </div>
              </div>
              <Button
                onClick={() => setIsOpen(false)}
                variant="ghost"
                iconOnly
                icon={<X />}
                size="sm"
              />
            </div>

            {/* Message Input */}
            <div className="p-4">
              <label htmlFor="whatsapp-message" className="block text-sm font-medium text-gray-700 mb-2">
                Your Message
              </label>
              <textarea
                ref={textareaRef}
                id="whatsapp-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Hello! I would like to inquire about driving lessons..."
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 resize-none"
              />
              <p className="text-xs text-gray-500 mt-1">
                Press Enter to send or Shift+Enter for new line
              </p>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between p-4 bg-gray-50 border-t border-gray-200">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <MessageCircle className="w-4 h-4 text-green-500" />
                <span>+{phoneNumber.replace(/(\d{2})(\d{4})(\d{6})/, '$1 $2 $3')}</span>
              </div>
              <Button
                onClick={openWhatsApp}
                variant="success"
                icon={<Send />}
                size="sm"
              >
                Send
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}