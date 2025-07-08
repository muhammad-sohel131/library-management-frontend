# 📚 Minimal Library Management System

A minimal library management system built with **React, Redux Toolkit Query (RTK Query), TypeScript**, and **Shadcn UI**. The system allows users to manage books, perform CRUD operations, borrow books, and view a borrow summary—all without authentication.

## 🚀 Project Overview

This project demonstrates:

- Clean React + TypeScript structure
- API integration with Redux Toolkit Query
- CRUD functionalities for books
- Borrowing system with validation
- Minimalist, responsive UI using Shadcn UI and Tailwind CSS

---

## ✨ Features

### ✅ Public Routes

All pages are accessible without authentication.

### 📖 Book Management

- **Book List Table**
  - Displays all books with: Title, Author, Genre, ISBN, Copies, Availability, Actions
- **Actions**
  - **Edit Book**
    - Opens pre-filled form to edit book details and updates instantly via API
    - If copies are set to 0, book is marked unavailable
  - **Delete Book**
    - Confirmation dialog before deletion
  - **Borrow Book**
    - Opens borrow form to borrow selected book

- **Add New Book**
  - Form to create a new book with fields: Title, Author, Genre, ISBN, Description, Copies
  - Redirects to book list and updates UI after creation

### 📚 Borrow Book

- **Borrow Form**
  - Fields: Quantity (number), Due Date (date)
  - Quantity cannot exceed available copies
  - If copies reach 0, the book is marked unavailable
  - On submit, creates borrow record via API and redirects to Borrow Summary page

### 📊 Borrow Summary

- Displays a list of borrowed books with:
  - Book Title, ISBN, Total Quantity Borrowed
- Data retrieved from aggregation API

---

## 🗂️ Pages

| Route | Description |
|-------|-------------|
| `/books` | List all books with options to view, edit, delete, and borrow |
| `/create-book` | Form to add a new book |
| `/books/:id` | View single book details |
| `/edit-book/:id` | Edit existing book |
| `/borrow/:bookId` | Borrow form for selected book |
| `/borrow-summary` | Aggregated summary of borrowed books |

---

## 💻 Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React + TypeScript |
| State Management | Redux Toolkit + RTK Query |
| UI | Shadcn UI + Tailwind CSS |
| Backend | Node.js + Express.js |
| Database | MongoDB + Mongoose |

---

## 🌟 Bonus Features

- ✅ Optimistic UI updates
- ✅ Toast notifications for success and errors
- ✅ Fully responsive layout (mobile, tablet, desktop)
- ✅ Type-safe forms with `zod` and React Hook Form

---

## 🔧 Backend (Brief)

- **Books**
  - CRUD APIs with pagination
- **Borrows**
  - CRUD APIs with copies validation and borrow summary aggregation
- **Database**
  - MongoDB with Mongoose schemas for Books and Borrows

---

## 📂 Project Setup

### 🚨 Prerequisites

- Node.js v18+
- MongoDB running locally or Atlas cluster

### 🔗 Clone Repository

```bash
git clone https://github.com/muhammad-sohel131/library-management-frontend.git
cd library-management-frontend
pnpm install
pnpm dev
```