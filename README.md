# Employee Leave Management System 📊 Mployee Leave Management System 📎 🔂 manager and employee profiles, where managers can approve leaves for employees.

## 👍 Table of Contents
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Deployment Instructions](#deployment-instructions)
  - [Step 1: Clone the Repository](#step-1-clone-the-repository)
  - [Step 2: Install Dependencies](#step-2-install-dependencies)
  - [Step 3: Configure Environment (Optional)](#step-3-configure-environment-optional)
  - [Step 4: Start the Server](#step-4-start-the-server)
  - [Step 5: Access the Application](#step-5-access-the-application)
- [Demo Credentials](#demo-credentials)
- [API Endpoints](#api-endpoints)
- [Hardcoded Database Structure](#hardcoded-database-structure)
- [Troubleshooting](#troubleshooting)
- [Advanced Deployment Options](#advanced-deployment-options)
- [Future Enhancements](#future-enhancements)
- [License](#license)

----

## 🎈 Features

✅ **Two User Roles**:
- 👤 **Employee**: Apply for leave, view leave balance, and track leave history
- 👔 **Manager**: View and approve/reject employee leave requests

✅ **Leave Types**:
- Vacation Leave (15 days)
- Sick Leave (10 days)
- Casual Leave (5 days)
- Total: 30 days per employee

✅ **Interactive UI**:
- Simple, clean, and responsive interface
- Real-time leave balance tracking
- Status badges (Pending, Approved, Rejected)

✅ **Hardcoded Database**:
- In-memory data storage
- No external database required
- Pre-seeded with sample users and leave requests

✅ **Leave Management**:
- Automatic leave days calculation
- Leave balance validation
- Real-time deduction upon approval
- Comprehensive leave history tracking

----

## 🚀 Technology Stack

### Backend
- **Node.js**: Server-side JavaScript runtime
- **Express.js**: Fast and minimalist web framework for Node.js
- **CORS**: Enable Cross-Origin Resource Sharing
- **Body-Parser**: Parse incoming request bodies

### Frontend
- **HTML5**: Structure and content
- **CSS3**: Styling with modern gradients and animations
- **Vanilla JavaScript**: Client-side logic and API interaction

### Data Storage
- **In-Memory** (Hardcoded): No external database required

----

## 📁 Project Structure

```
employee-leave-management-system_v2/
├── package.json               # NPM package configuration
├── server.js                  # Express server entry point
├── data.js                     # Hardcoded database (users & leave requests)
└── public/                    # Static frontend files
    └── index.html             # Main UI file
```

----

## 🖠 Prerequisites

Before deploying this application, ensure the following software is installed on your system:

### 1. Node.js (v14.0.0 or later)

**Check if Node.js is installed:**
```bash
node --version
```

**Expected output**: `v18.x x` (or similar)

**If not installed, download from:**
- 🎠 [Official Node.js Website](https://nodejs.org/)

**Installation verification:**
```bash
node --version
npm --version
```

### 2. Git (to clone the repository)

**Check if Git is installed:**
```bash
git --version
```

**If not installed, download from:**
- 🎀 POcial Git Website](https://git-scm.com/downloads)

----

## 🚀 Deployment Instructions

Follow these step-by-step instructions to deploy the Employee Leave Management System on your local machine.

----

### Step 1: Clone the Repository

Clone this GitHub repository to your local machine using Git.

**Open your terminal/command prompt and run:**

```bash
# Clone the repository
git clone https://github.com/jayvk3/employee-leave-management-system_v2.git

# Navigate into the project directory
cd employee-leave-management-system_v2
```

**‐“”” Verification:**
``bbash
# List files to ensure cloning was successful
ls -l

# Or on Windows:
dir
```

**Expected Files Visible:**
- `package.json`
- `server.js`
- Fdata.js`
- `public/` folder

----

### Step 2: Install Dependencies

Install all required Node.js packages defined in `package.json`.

**Run the following command:**

```bash
npm install
```

**What this does:**
- Downloads and installs all dependencies specified in `package.json`
  - `express`
  - `cors`
  - `body-parser`
  - `nodemon` (dev dependency for auto-restart during development)
- Creates a `node_modules/` folder that contains all packages
- Generates `package-lock.json` for dependency version locking

**✅✅ Expected Output:**
```
added XX packages, and audited XX packages in Xs

found 0 vulnerabilities
```

**⚈❤️ Verification:**
```bash
# Check that node_modules/ folder exists
ls -la | grep node_modules

# Or on Windows:
dir
```

----

### Step 3: Configure Environment (Optional)

By default, the application runs on `http://localhost:3000`. If you want to change the port, follow these steps:

**Option 1: Using Environment Variable (Recommended)**

```bash
# On Linux/macOS:
export POQU=5000

# On Windows Command Prompt:
set PORT=5000

# On Windows PowerShell:
$env:PORT = 5000

# Then start the server
npm start
```

**Option 2: Creating a `.env` File**

1. Create a `.env` file in the project root:

```bash
echo "PORT=5000" > .env
```

2. Install `dotenv` package:

```bash
npm install dotenv
```

3. Modify `server.js` to load environment variables:

```javascript
// Add at the top of server.js
require('dotenv').config();
```

> *📌 **Note**: The default port 3000 works for most setups. Only change if you encounter a port conflict.

----

### Step 4: Start the Server

Start the Express server to run the application.

**Using Normal Mode:**

```bash
npm start
```

**“ What this does:**
- Runs `node server.js`
- Starts the Express server on port 3000 (by default)
- Serves the frontend from the `public/` directory

**✅ Expected Output:**

```
Server is running on http://localhost:3000

```

**Using Development Mode with Auto-Reload:**

```bash
npm run dev
```

**What this does:**
- Runs `nodemon server.js`
- Automatically restarts the server when code changes are detected
- Useful for development and testing

**““““” Expected Output:**

```
[nodemon] starting `node server.js`
,Surver is running on http://localhost:3000
[nodemon] clean exit - waiting for changes before restart
```

> **⚠️ Important**: Leave the terminal running. The server needs to stay active to handle requests.

----

### Step 5: Access the Application

Once the server is running, open your web browser and navigate to:

```
http://localhost:3000
```

**🏆 What to Expect:**

1. You'll see the **Login Page** with:
   - Username input field
   - Password input field
   - Demo credentials displayed below the form

2. **Use the demo credentials** to login (usee below).

3. After login, you'll be redirected to either:
   - **Employee Dashboard** (if logged in as an employee)
   - **Manager Dashboard** (if logged in as a manager)

**✅ Successful Deployment Indicators:**
- The login page loads without errors
- You can login using the demo credentials
- Dashboard loads with leave balances and history
- No console errors in browser developer tools (F12)

----

## 🔑 Demo Credentials

Use these pre-configured user accounts to test the application:

### Employee Accounts

| Name | Username | Password | Department | Leave Balance |
|--------------|--------------|--------------|----------------|-----------------|
| John Doe | `john.doe` | `emp123` | Engineering | 30 days |
| Jane Smith | `jane.smith` | `emp123` | Marketing | 30 days |
| Mike Johnson | `mike.johnson` | `emp123` | Sales | 30 days |

### Manager Accounts

| Name | Username | Password | Department | Role |
|--------------|---------------|--------------|----------------|----------|
| Sarah Brown | `sarah.brown` | `mgr123` | HR | Manager |
| David Wilson | `david.wilson` | `mgr123` | Operations | Manager |

### Leave Balance Breakdown

Each employee has:
- **Vacation Leaves**: 15 days
- **Sick Leaves**: 10 days
- **Casual Leaves**: 5 days
- **Total**: 30 days

----

## 🔻‍♀️ API Endpoints

The backend provides the following RESTful API endpoints:

### 1. Authentication

**POST `Na`O-`H/api/login`**

Login with username and password.

<details>
<summary>Request Body</summary>

```json
{
  "username": "john.doe",
  "password": "emp123"
}
```

</details>

<details>
<summary>Response</summary>

```json
{
  "success": true,
  "message": "Login successful",
  "user": {
    "id": 1,
    "username": "john.doe",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "role": "employee",
    "department": "Engineering",
    "leaveBalance": 30
  }
}
```

</details>

----

### 2. Get User Profile

**GET `/api/user/:id`**

Retrieve user information by user ID.

<details>
<summary>Response</summary>

```json
{
  "success": true,
  "user": {
    "id": 1,
    "username": "john.doe",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "role": "employee",
    "department": "Engineering",
    "leaveBalance": 30,
    "vacationLeaves": 15,
    "sickLeaves": 10,
    "casualLeaves": 5
  }
}
```

</details>

----

### 3. Get Leave Balance

**GET `/api/leave/balance/:userId`**

Get the leave balance for a specific user.

<details>
<summary>Response</summary>

```json
{
  "success": true,
  "balance": {
    "total": 30,
    "vacation": 15,
    "sick": 10,
    "casual": 5
  }
}
```

</details>

----

### 4. Get Leave Requests (Employee)

**GET `/api/leave/requests/:userId`**

Get all leave requests for a specific employee.

<details>
<summary>Response</summary>

```json
{
  "success": true,
  "requests": [
    {
      "id": 1,
      "employeeId": 1,
      "leaveType": "vacation",
      "startDate": "2024-03-15",
      "endDate": "2024-03-17",
      "days": 3,
      "reason": "Family vacation",
      "status": "approved",
      "appliedDate": "2024-03-01",
      "approvedBy": 101,
      "approvedDate": "2024-03-02"
    }
  ]
}
```

</details>

----

### 5. Get All Leave Requests (Manager)

**GET `/api/leave/requests/all`**

Get all leave requests from all employees (for manager dashboard).

<details>
<summary>Response</summary>

```json
{
  "success": true,
  "requests": [
    {
      "id": 1,
      "employeeId": 1,
      "employeeName": "John Doe",
      "leaveType": "vacation",
      "startDate": "2024-03-15",
      "endDate": "2024-03-17",
      "days": 3,
      "reason": "Family vacation",
      "status": "approved",
      "appliedDate": "2024-03-01",
      "approvedBy": 101,
      "approvedDate": "2024-03-02"
    }
  ]
}
```

</details>

----

### 6. Apply for Leave

**POST `/api/leave/apply`**

Submit a new leave request.

<details>
<summary>Request Body</summary>

```json
{
  "employeeId": 1,
  "leaveType": "vacation",
  "startDate": "2024-04-10",
  "endDate": "2024-04-12",
  "reason": "Personal work"
}
```

</details>

<details>
<summary>Response</summary>

```json
{
  "success": true,
  "message": "Leave request submitted successfully",
  "request": {
    "id": 5,
    "employeeId": 1,
    "leaveType": "vacation",
    "startDate": "2024-04-10",
    "endDate": "2024-04-12",
    "days": 3,
    "reason": "Personal work",
    "status": "pending",
    "appliedDate": "2024-03-28",
    "approvedBy": null,
    "approvedDate": null
  }
}
```

</details>

----

### 7. Approve/Reject Leave (Manager Only)

**POST `NapO/leave/action`**

Approve or reject a pending leave request.

<details>
<summary>Request Body</summary>

```json
{
  "requestId": 2,
  "action": "approve",  // or "reject"
  "managerId": 101
}
```

</details>

<details>
<summary>Response</summary>

```json
{
  "success": true,
  "message": "Leave request approved successfully",
  "request": {
    "id": 2,
    "employeeId": 2,
    "leaveType": "sick",
    "startDate": "2024-03-20",
    "endDate": "2024-03-21",
    "days": 2,
    "reason": "Medical checkup",
    "status": "approved",
    "appliedDate": "2024-03-18",
    "approvedBy": 101,
    "approvedDate": "2024-03-28"
  }
}
```

</details>

----

## 📊 Hardcoded Database Structure

The application uses an in-memory database defined in `data.js`. All data is stored in JavaScript arrays.

### Users Table

```javascript

const users = [
  {
    id: 1,
    username: 'john.doe',
    password: 'emp123',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'employee',
    department: 'Engineering',
    leaveBalance: 30,
    vacationLeaves: 15,
    sickLeaves: 10,
    casualLeaves: 5
  },
  // ... more users
];
```

### Leave Requests Table

```javascript
const leaveRequests = [
  {
    id: 1,
    employeeId: 1,
    leaveType: 'vacation',
    startDate: '2024-03-15',
    endDate: '2024-03-17',
    days: 3,
    reason: 'Family vacation',
    status: 'approved',
    appliedDate: '2024-03-01',
    approvedBy: 101,
    approvedDate: '2024-03-02'
  },
  // ... more leave requests
];
```

----

## 🚨 Troubleshooting

### Issue 1: Port Already in Use

**Error Message:**
```
Error: listen EADDRINUSE: address already in use ::::1:3000
```

**Solution:**

1. Kill the process using port 3000:

``bbash
# On Linux/macOS:
lsof -ti :3000  # Find the process ID (PID)
kill -9 <PID>    # Kill the process

# On Windows:
netstat -ano | findstr ":3000"
taskkill /PID pY�FID> /F
```

2. Or change the port (see Step 3 in Deployment Instructions).

----

### Issue 2: Cannot GET `/api/leave/balance/1`

**Error Message:**
```
Error connecting to server. Please ensure the server is running.
```

**Solution:**

1. Ensure the server is running:

```bash
npm start
```

2. Check the browser console for errors (press F12).

3. Verify that the `API_URL` in `index.html` matches your server address:

```javascript
const API_URL = 'http://localhost:3000';
```

----

### Issue 3: Module Not Found

**Error Message:**
```
Error: Cannot find module 'express'
```

**Solution:**

Reinstall dependencies:

```bash
rm -rf node_modules package-lock.json
npm install
```

----

### Issue 4: Leave Balance Not Updating

**Issue:** When a manager approves a leave, the employee's leave balance doesn't update on the UI.

**Solution:**

1. This is expected behavior with hardcoded data.
2. The employee needs to **logout and login again** to see updated balances.
3. Alternatively, refresh the page (F5 or Ctrl+R).

**Note:** In a production app, real-time updates would use WebSockets or polling.

----

### Issue 5: Data Lost After Server Restart

**Issue:** All new leave requests disappear after restarting the server.

**Explanation:**

- This is **expected behavior** with an em@memory database.
- All data is reset to the initial state defined in `data.js` on server restart.
- For persistent data, integrate a real database (see Future Enhancements).

----

## 🚀 Advanced Deployment Options

### 1. Deploying with Docker

If you prefer using Docker, create a `Dockerfile`:

```dockerfile
# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application files
COPY . .

# Expose port
EXPOSE 3000

# Start the server
CMD ["npm", "start"]
```

**Build and run the Docker container:**

```bash
# Build the image
docker build -t leave-management .

# Run the container
docker run -p 3000:3000 leave-management
```

----

### 2. Deploying to Cloud Platforms

<details>
<summary>Heroku</summary>

1. Create a `Procfile`:

```
web: node server.js
```

2. Deploy:

```bash
heroku create my-leave-management-app
git push heroku main
```

</details>

<details>
<summary>VerCed</summary>

1. Install Vercel CLI:

```bash
npm i -g vercel
```

2. Deploy:

```bash
vercel
```

</details>

<details>
<summary>AWS EC2</summary>

1. SSH into your EC2 instance.
2. Install Node.js and Git.
3. Clone the repository.

4. Install and start:

```bash
npm install
npm start
```

5. Use PM2 for process management:

```bash
npm i -g pm2
pm2 start server.js --name leave-management
pm2 save
pm2 startup
```

</details>

----

## 🚀 Future Enhancements

This is a simple prototype. Possible enhancements include:

✅ **Persistent Database**: Integrate MongoDB, PostgreSQL, or MySQL
✅ **Authentication**: Implement JWT or OAuth for secure authentication
✅ **Email Notifications**: Send emails when leave requests are approved/rejected
✅ **Calendar View**: Visualize leaves on a calendar
✅ **Advanced Reporting**: Generate leave reports and analytics
✅ **Multi-tier Approval**: Add approval workflows with multiple managers
✅ **Mobile Responsiveness**: Enhance UI for mobile devices
✅ **User Profile Editing**: Allow users to update their profiles
✅ **Leave Type Customization**: Allow admins to define custom leave types
✅ **Team Calendar**: View team members' leave schedule

----

## ❌️ License

This project is licensed under the **MIT License**.

You are free to:
-✅ Use this project for personal or commercial purposes
-✅ Modify and distribute the source code
-✅ Contribute improvements via pull requests

----

## 🔞 Support & Contribution

If you encounter issues or have suggestions:

1. **Open an issue** on the [GitHub repository](https://github.com/jayvk1/employee-leave-management-system_v2/issues)
2. **Fork the repository** and submit a pull request
3. **Star the repository** ★️ if you find it useful!

----

## ✅ Quick Reference

```bash
# Clone the repository
git clone https://github.com/jayvk1/employee-leave-management-system_v2.git
cd employee-leave-management-system_v2

# Install dependencies
npm install

# Start the server
npm start

# Open in browser
# http://localhost:3000

# Login credentials:
# Employee: username=john.doe, password=emp123
# Manager: username=sarah.brown, password=mgr123
```

----

<div align="center">

**🎉 Built with ❤️ by Jayasri**

<a href="https://github.com/jayvk3/employee-leave-management-system_v2">⭐️ View on GitHub</a>

</div>
