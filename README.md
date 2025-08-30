# 📚 Library Manager System - Backend

Simple library management system where the admin can:
-   Adding new books  
-   Updating book details 
-   filtering books by ID, author name, category, and  published date.

---

## 📑 Table of Contents
1. [Setup and Installation](#setup-and-installation)  
   - [Prerequisites](#prerequisites)  
   - [Environment Variables](#environment-variables)  
---

## ⚙️ Setup and Installation

### Prerequisites
Ensure the following dependencies are installed on your system:

- **Node.js** (v18.x or later)  

### Environment Variables
Create a `.env` file in the root directory based on `.env.example`.  
This file holds sensitive credentials such as database configuration and API keys.

**Example `.env` file:**
```env
DATABASE_URL=postgres://user:password@host:port/database
API_KEY=your_api_key_here
NODE_ENV=development
