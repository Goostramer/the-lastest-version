# Secure Encryption Application

A professional web application for secure data encryption and decryption using industry-standard cryptographic algorithms.

## Features

### Cryptographic Operations
- AES encryption for files and text
- RSA public/private key encryption
- SHA-256 hashing
- Large file encryption support

### Security
- Browser-based cryptography
- Zero server-side data processing
- Secure key management
- PBKDF2 key derivation

### Interface
- Modern React UI
- Theme customization
- Progress tracking
- Mobile-responsive design

## Technology Stack

### Frontend
- React with TypeScript
- Vite for build tooling
- Web Crypto API for cryptographic operations
- TailwindCSS for styling

### Backend
- Node.js with Express
- Simple API for status checks

## Quick Start

1. Start the backend:
```bash
cd backend
npm install
node src/server.js
```

2. Start the frontend:
```bash
cd frontend
npm install
npm run dev
```

The application will be available at http://localhost:5173

## Setup and Installation

### 1. Clone the repository

```bash
git clone <repository-url>
cd rugby-encryption
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory with the following variables:

```
PORT=5000
JWT_SECRET=your_jwt_secret_key_here
MONGODB_URI=mongodb://localhost:27017/rugby-encryption
```

### 3. Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file in the frontend directory with the following variables:

```
VITE_API_URL=http://localhost:5000/api
```

## Running the Application

### 1. Start the Backend Server

```bash
cd backend
npm run dev
```

This will start the backend server at `http://localhost:5000`.

### 2. Start the Frontend Development Server

```bash
cd frontend
npm run dev
```

This will start the frontend development server at `http://localhost:5173`.

### 3. Access the Application

Once both servers are running, you can access the application at `http://localhost:5173`.

## Usage

1. Register a new account or log in with existing credentials
2. Use the different tabs to access various encryption features:
   - **Text Encryption**: Encrypt and decrypt text messages
   - **File Encryption**: Encrypt and decrypt files
   - **RSA Encryption**: Use RSA encryption for asymmetric cryptography
   - **Key Generator**: Generate and manage RSA key pairs
3. Toggle between dark and light themes using the theme button
4. View your saved encrypted data by clicking the "Saved Data" button

## Technologies Used

- **Backend**:
  - Node.js
  - Express
  - MongoDB with Mongoose
  - JWT for authentication
  - bcryptjs for password hashing

- **Frontend**:
  - React
  - TypeScript
  - Vite
  - Web Crypto API for encryption
  - TailwindCSS for styling
  - Lucide React for icons

## Security Features

- Password hashing with bcrypt
- JWT-based authentication
- Client-side encryption using Web Crypto API
- Secure key storage with encrypted private keys
