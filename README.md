# 📚 Library Manager System - Backend

Simple library management system where the admin can:
-   Adding new books  
-   Updating book details 
-   Filtering books by ID, author name, category, and  published date.
-   Delete book by ID

---

## 📑 Table of Contents
   - [Project Structure](#project-structure)
   - [Prerequisites](#prerequisites)  
   - [Environment Variables](#environment-variables)  
---

## 📂 Project Structure

```bash  
└── library-management-system/
    ├── prisma/
    │   ├── migrations
    │   ├── schema.prisma
    │   └── seed.ts
    ├── src/
    │   ├── controller/
    │   │   └── book.controller.ts
    │   ├── service/
    │   │   └── book.service.ts
    │   ├── routes/
    │   │   └── routes.ts
    │   └── app.ts
    ├── .env.example
    ├── .gitignore
    └── README.md
```

## ⚙️ Setup and Installation

### Prerequisites
Ensure the following dependencies are installed on your system:

- **Node.js** (v18.x or later)  

### Environment Variables
Create a `.env` file in the root directory based on `.env.example`.  
This file holds sensitive credentials such as database configuration.

**Example `.env` file:**
```bash env
DATABASE_URL=postgres://user:password@host:port/database 
```


**Install Dependencies**
```bash 
npm install 
```

**Start Server**
```bash 
npm run dev 
```
