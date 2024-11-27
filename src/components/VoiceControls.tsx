import React from 'react';
import { Mic, MicOff, Settings } from 'lucide-react';

interface VoiceControlsProps {
  isListening: boolean;
  onToggleMic: () => void;
}

export function VoiceControls({ isListening, onToggleMic }: VoiceControlsProps) {
  return (
    <div className="flex items-center justify-center gap-4 p-4 bg-white rounded-t-lg shadow-lg border-t border-gray-100">
      <button
        onClick={onToggleMic}
        className={`p-4 rounded-full transition-all ${
          isListening 
            ? 'bg-red-100 hover:bg-red-200 text-red-600' 
            : 'bg-indigo-100 hover:bg-indigo-200 text-indigo-600'
        }`}
      >
        {isListening ? (
          <MicOff className="w-6 h-6" />
        ) : (
          <Mic className="w-6 h-6" />
        )}
      </button>
      <button className="p-4 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600">
        <Settings className="w-6 h-6" />
      </button>
    </div>
  );
}