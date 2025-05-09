import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import Navbar from './components/Navbar';
import TextEncryption from './components/TextEncryption';
import FileEncryption from './components/FileEncryption';
import RSAEncryption from './components/RSAEncryption';
import KeyGenerator from './components/KeyGenerator';
import Footer from './components/Footer';

function App() {
  const [activeTab, setActiveTab] = useState('text');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
  };

  return (
    <ThemeProvider value={{ isDarkMode, toggleTheme }}>
      <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
        <Navbar />
        
        <main className="container mx-auto px-4 py-8 max-w-6xl">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Secure Encryption App</h1>
            <button 
              onClick={toggleTheme} 
              className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-200 text-gray-800'}`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
          
          <div className={`mb-8 rounded-lg overflow-hidden border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className={`flex ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
              {['text', 'file', 'rsa', 'keys'].map((tab) => (
                <button
                  key={tab}
                  className={`px-6 py-3 font-medium transition-colors capitalize ${
                    activeTab === tab 
                      ? isDarkMode 
                        ? 'bg-gray-900 text-blue-400 border-b-2 border-blue-500' 
                        : 'bg-white text-blue-600 border-b-2 border-blue-500'
                      : ''
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab === 'rsa' ? 'RSA' : tab === 'keys' ? 'Key Generator' : `${tab} Encryption`}
                </button>
              ))}
            </div>
            
            <div className={`p-6 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
              {activeTab === 'text' && <TextEncryption />}
              {activeTab === 'file' && <FileEncryption />}
              {activeTab === 'rsa' && <RSAEncryption />}
              {activeTab === 'keys' && <KeyGenerator />}
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;