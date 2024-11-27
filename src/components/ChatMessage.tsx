import React from 'react';
import { Bot, User } from 'lucide-react';

interface ChatMessageProps {
  message: string;
  isAI: boolean;
  timestamp: string;
}

export function ChatMessage({ message, isAI, timestamp }: ChatMessageProps) {
  return (
    <div className={`flex gap-4 ${isAI ? 'flex-row' : 'flex-row-reverse'}`}>
      <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
        isAI ? 'bg-indigo-100' : 'bg-green-100'
      }`}>
        {isAI ? (
          <Bot className="w-6 h-6 text-indigo-600" />
        ) : (
          <User className="w-6 h-6 text-green-600" />
        )}
      </div>
      <div className={`flex flex-col max-w-[80%] ${isAI ? 'items-start' : 'items-end'}`}>
        <div className={`rounded-lg p-4 ${
          isAI ? 'bg-white' : 'bg-indigo-600 text-white'
        } shadow-md`}>
          {message}
        </div>
        <span className="text-xs text-gray-500 mt-1">{timestamp}</span>
      </div>
    </div>
  );
}