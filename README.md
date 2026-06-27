# MediaHub Auth API 🚀

MediaHub Auth API is a secure RESTful backend application built with Node.js, Express.js, and MongoDB. It demonstrates modern authentication, authorization, and user management practices using JWT, Role-Based Access Control (RBAC), Multer for file uploads, and Joi validation.

---

# Features

- 🔐 JWT Authentication (Access Token & Refresh Token)
- 🛡️ Role-Based Access Control (Admin, Moderator, User)
- 👤 Secure User Registration & Login
- 🔑 Password Hashing using bcryptjs
- 📁 Avatar Uploads with Multer
- ✅ Input Validation with Joi
- 🔒 Protected Routes using Authentication Middleware
- 👥 User CRUD Operations
- 🗄️ MongoDB Integration with Mongoose
- 📂 Clean MVC Folder Structure
- ⚙️ Environment Variables with dotenv

---

# Tech Stack

**Runtime**
- Node.js

**Framework**
- Express.js

**Database**
- MongoDB
- Mongoose

**Authentication & Security**
- JSON Web Token (jsonwebtoken)
- bcryptjs

**Validation**
- Joi

**File Upload**
- Multer

**Environment**
- dotenv

---

# Project Structure

```text
config/
controllers/
middleware/
models/
routes/
utils/
uploads/
.env
index.js
```

---

# Prerequisites

Before running this project, install:

- Node.js (v18+ Recommended)
- MongoDB (Local or Atlas)
- npm

---

# Installation

Clone the repository

```bash
git clone https://github.com/your-username/mediahub-auth-api.git
```

Move into the project directory

```bash
cd mediahub-auth-api
```

Install dependencies

```bash
npm install
```

---

# Environment Variables

Create a `.env` file in the root directory.

```env
PORT=8000

MONGO_URI=mongodb://localhost:27017/mh

JWT_SECRET=your_access_token_secret

JWT_REFRESH_SECRET=your_refresh_token_secret
```

---

# Run the Server

Development

```bash
npm run dev
```

Production

```bash
npm start
```

---

# API Endpoints

## Authentication

```http
POST /api/v0/auth/register
POST /api/v0/auth/login
```

## User

```http
GET    /api/v0/user/get-user/:id
PUT    /api/v0/user/update-user/:id
DELETE /api/v0/user/delete-user/:id
```

---

# Authentication Flow

1. Register a new user.
2. Login with email and password.
3. Receive Access Token and Refresh Token.
4. Access protected routes using:

```
Authorization: Bearer <access_token>
```

5. Authorization is enforced through Role-Based Access Control (RBAC).

---

# Roles

- 👑 Admin
- 🛡️ Moderator
- 👤 User

---

# Security Features

- Password hashing with bcryptjs
- JWT-based authentication
- Protected API routes
- RBAC authorization middleware
- Sensitive fields excluded using Mongoose `.select()`
- Environment variables for secrets
- Secure middleware architecture


---

# Author

**Malik Subhan**

Backend Developer • MERN Stack Learner • Building in Public 🚀