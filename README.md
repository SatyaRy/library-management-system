Library Manager System Backend
Introduction
This repository contains the backend services for the Library Manager System application. This service provides the core business logic and data management for a comprehensive library system, including:

Adding book 
Update book 
Search book

Table of Contents

Setup and Installation

Running the Application

1. Setup and Installation
Prerequisites
Ensure you have the following installed on your machine:

Node.js (version 18.x or later)

PostgreSQL (version 14.x or later)

Docker (version 20.x or later)

Environment Variables
Create a .env file in the root directory of the project based on the provided .env.example file. This file contains sensitive configuration details such as database credentials and API keys.

# Example .env file content
DATABASE_URL=postgres://user:password@host:port/database
API_KEY=your_api_key_here
NODE_ENV=development


Dependency Installation
Install the required project dependencies:

# For Node.js
npm install

# For Node.js
npm run dev

The application will be accessible at http://localhost:[port].

Production Build
For production environments, use the following commands:

# Build the application
npm run build

# Start the production server
npm start
