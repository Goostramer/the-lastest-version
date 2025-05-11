import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { BackendStatusProvider } from './context/BackendStatusContext';
import { Sun, Moon } from 'lucide-react';
import TextEncryption from './components/TextEncryption';
import FileEncryption from './components/FileEncryption';
import RSAEncryption from './components/RSAEncryption';
import KeyGenerator from './components/KeyGenerator';
import Footer from './components/Footer';
import { useTheme } from './context/ThemeContext';

// Main app wrapper component
const AppContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'text' | 'file' | 'rsa' | 'keys'>('text');
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Secure Encryption App</h1>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-md ${isDarkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-200 text-gray-800'}`}
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        <div className="mb-8">
          <div className="flex space-x-4 mb-4">
            <button
              onClick={() => setActiveTab('text')}
              className={`px-4 py-2 rounded-md ${activeTab === 'text' ? isDarkMode ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white' : isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`}
            >
              Text Encryption
            </button>
            <button
              onClick={() => setActiveTab('file')}
              className={`px-4 py-2 rounded-md ${activeTab === 'file' ? isDarkMode ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white' : isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`}
            >
              File Encryption
            </button>
            <button
              onClick={() => setActiveTab('rsa')}
              className={`px-4 py-2 rounded-md ${activeTab === 'rsa' ? isDarkMode ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white' : isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`}
            >
              RSA Encryption
            </button>
            <button
              onClick={() => setActiveTab('keys')}
              className={`px-4 py-2 rounded-md ${activeTab === 'keys' ? isDarkMode ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white' : isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`}
            >
              Key Generator
            </button>
          </div>

          <div className={`p-6 rounded-lg border ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'}`}>
            {activeTab === 'text' && <TextEncryption />}
            {activeTab === 'file' && <FileEncryption />}
            {activeTab === 'rsa' && <RSAEncryption />}
            {activeTab === 'keys' && <KeyGenerator />}
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <BackendStatusProvider>
        <AppContent />
      </BackendStatusProvider>
    </ThemeProvider>
  );
};

export default App;