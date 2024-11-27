import React, { useState } from 'react';
import { VoiceWave } from './components/VoiceWave';
import { ChatMessage } from './components/ChatMessage';
import { VoiceControls } from './components/VoiceControls';

function App() {
  const [isListening, setIsListening] = useState(false);
  const [isAISpeaking, setIsAISpeaking] = useState(false);

  const messages = [
    {
      message: "Hi po! Ako si Joy Medic, ano pong maitutulong ko sa inyo today?",
      isAI: true,
      timestamp: "2:30 PM"
    },
    {
      message: "Masakit po ang lalamunan ko.",
      isAI: false,
      timestamp: "2:31 PM"
    },
    {
      message: "Ay naku, baka po sore throat yan! Subukan nyo pong mag-gargle ng maligamgam na tubig na may asin, mga 3 beses sa isang araw. Iwasan din po ang malamig na inumin.",
      isAI: true,
      timestamp: "2:31 PM"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-indigo-600">Joy Medic Assistant</h1>
        </div>
      </header>

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-4 space-y-6 max-h-[60vh] overflow-y-auto">
            {messages.map((msg, index) => (
              <ChatMessage key={index} {...msg} />
            ))}
          </div>

          <div className="p-4 border-t border-gray-100 space-y-4">
            <div className="flex gap-4">
              <div className="w-1/2">
                <VoiceWave isActive={isListening} />
              </div>
              <div className="w-1/2">
                <VoiceWave isActive={isAISpeaking} isAI />
              </div>
            </div>
          </div>

          <VoiceControls 
            isListening={isListening}
            onToggleMic={() => setIsListening(!isListening)}
          />
        </div>
      </main>
    </div>
  );
}

export default App;