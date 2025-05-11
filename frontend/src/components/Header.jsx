import React from 'react';
import { Shield, Lock } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="/logo.svg" alt="Rugby Encryption Logo" className="h-10 w-10" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Rugby Encryption</h1>
              <p className="text-sm text-gray-500">Secure Data Protection Platform</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-blue-600">
              <Shield className="h-5 w-5 mr-1" />
              <span className="text-sm font-medium">Enterprise Security</span>
            </div>
            <div className="flex items-center text-green-600">
              <Lock className="h-5 w-5 mr-1" />
              <span className="text-sm font-medium">End-to-End Encrypted</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
