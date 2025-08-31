# 📚 Library Manager System - Backend

Simple library management system where the admin can:
-   Adding new books by manually inputting and exporting a CSV file directly.
-   Updating book details 
-   Filtering books by ID, author name, category, and  published date.
-   Delete book by ID

---

## 📑 Table of Contents
   - [Project Structure](#project-structure)
   - [Requirements](#requirements)  
   - [Environment Variables](#environment-variables)  
---

##  Project Structure

```bash  
└── library-management-system/
    ├── prisma/
    │   ├── migrations
    │   └── schema.prisma
    ├── src/
    │   ├── data/
    │   │   └── books_sample.csv
    │   ├── interface/
    │   │   └── bookInterface.ts
    │   ├── service/
    │   │   ├── addBook.ts
    │   │   ├── deleteBook.ts
    │   │   ├── filterBook.ts
    │   │   └── updateBook.ts
    │   └── app.ts
    ├── .env
    ├── .gitignore
    └── readme.md
```

## ⚙️ Setup and Installation

### Requirements
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

**Start CLI App**
```bash 
npm run dev 
```
