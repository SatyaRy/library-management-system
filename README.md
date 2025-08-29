# 📚 Library Manager System - Backend

The **Library Manager System Backend** is the core service that powers the Library Manager application.  
It encapsulates the **business logic** and **data management layer** of a comprehensive digital library, enabling functionalities such as:

- ➕ Adding new books  
- ✏️ Updating book details  
- 🔍 Searching for books  

This backend ensures smooth interaction with the database and provides the foundation for efficient library operations.

---

## 📑 Table of Contents
1. [Setup and Installation](#setup-and-installation)  
   - [Prerequisites](#prerequisites)  
   - [Environment Variables](#environment-variables)  
   - [Dependency Installation](#dependency-installation)  
2. [Running the Application](#running-the-application)  
3. [Production Build](#production-build)  

---

## ⚙️ Setup and Installation

### Prerequisites
Ensure the following dependencies are installed on your system:

- **Node.js** (v18.x or later)  
- **PostgreSQL** (v14.x or later)  
- **Docker** (v20.x or later)  

### Dependency Installation
Install required project dependencies:
```npm install

### 🚀 Running the Application
To run the application in development mode:
```npm run dev 
---

### Environment Variables
Create a `.env` file in the root directory based on `.env.example`.  
This file holds sensitive credentials such as database configuration and API keys.

**Example `.env` file:**
```env
DATABASE_URL=postgres://user:password@host:port/database
API_KEY=your_api_key_here
NODE_ENV=development
