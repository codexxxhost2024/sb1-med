import React from 'react';
import { Mic, Speaker } from 'lucide-react';

interface VoiceWaveProps {
  isActive: boolean;
  isAI?: boolean;
}

export function VoiceWave({ isActive, isAI = false }: VoiceWaveProps) {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md">
      <div className="p-2 rounded-full bg-indigo-100">
        {isAI ? (
          <Speaker className="w-6 h-6 text-indigo-600" />
        ) : (
          <Mic className="w-6 h-6 text-indigo-600" />
        )}
      </div>
      <div className="flex items-center gap-0.5">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`w-1 rounded-full transition-all duration-150 ${
              isActive 
                ? `h-${Math.floor(Math.random() * 12 + 4)} bg-indigo-600` 
                : 'h-2 bg-gray-300'
            }`}
            style={{
              animationDelay: `${i * 0.1}s`,
              animation: isActive ? 'pulse 1s infinite' : 'none',
            }}
          />
        ))}
      </div>
    </div>
  );
}