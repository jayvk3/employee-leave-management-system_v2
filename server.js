const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const { users, leaveRequests } = require('./data');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// API Routes

// Login Endpoint
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  
  const user = users.find(
    u => u.username === username && u.password === password
  );
  
  if (user) {
    const { password, ...userData } = user;
    res.json({
      success: true,
      message: 'Login successful',
      user: userData
    });
  } else {
    res.status(401).json({
      success: false,
      message: 'Invalid username or password'
    });
  }
});

// Get user profile
app.get('/api/user/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  
  if (user) {
    const { password, ...userData } = user;
    res.json({ success: true, user: userData });
  } else {
    res.status(404).json({ success: false, message: 'User not found' });
  }
});

// Get leave balance
app.get('/api/leave/balance/:userId', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.userId));
  
  if (user) {
    res.json({
      success: true,
      balance: {
        total: user.leaveBalance,
        vacation: user.vacationLeaves,
        sick: user.sickLeaves,
        casual: user.casualLeaves
      }
    });
  } else {
    res.status(404).json({ success: false, message: 'User not found' });
  }
});

// Get leave requests for an employee
app.get('/api/leave/requests/:userId', (req, res) => {
  const userLeaves = leaveRequests.filter(
    lr => lr.employeeId === parseInt(req.params.userId)
  );
  
  res.json({ success: true, requests: userLeaves });
});

// Get all leave requests (for manager)
app.get('/api/leave/requests/all', (req, res) => {
  const requestsWithEmployees = leaveRequests.map(request => {
    const employee = users.find(u => u.id === request.employeeId);
    return {
      ...request,
      employeeName: employee ? employee.name : 'Unknown'
    };
  });
  
  res.json({ success: true, requests: requestsWithEmployees });
});

// Apply for leave
app.post('/api/leave/apply', (req, res) => {
  const { employeeId, leaveType, startDate, endDate, reason } = req.body;
  
  // Calculate number of days
  const start = new Date(startDate);
  const end = new Date(endDate);
  const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;
  
  // Find user
  const user = users.find(u => u.id === employeeId);
  
  if (!user) {
    return res.status(404).json({ success: false, message: 'User not found' });
  }
  
  // Check leave balance
  let availableLeaves;
  switch (leaveType) {
    case 'vacation':
      availableLeaves = user.vacationLeaves;
      break;
    case 'sick':
      availableLeaves = user.sickLeaves;
      break;
    case 'casual':
      availableLeaves = user.casualLeaves;
      break;
    default:
      return res.status(400).json({ success: false, message: 'Invalid leave type' });
  }
  
  if (days > availableLeaves) {
    return res.status(400).json({
      success: false,
      message: `Insufficient ${leaveType} leave balance. Available: ${availableLeaves} days`
    });
  }
  
  // Create new leave request
  const newRequest = {
    id: leaveRequests.length + 1,
    employeeId,
    leaveType,
    startDate,
    endDate,
    days,
    reason,
    status: 'pending',
    appliedDate: new Date().toISOString().split('T')[0],
    approvedBy: null,
    approvedDate: null
  };
  
  leaveRequests.push(newRequest);
  
  res.json({
    success: true,
    message: 'Leave request submitted successfully',
    request: newRequest
  });
});

// Approve/Reject leave (manager only)
app.post('/api/leave/action', (req, res) => {
  const { requestId, action, managerId } = req.body;
  
  const request = leaveRequests.find(lr => lr.id === requestId);
  const manager = users.find(u => u.id === managerId && u.role === 'manager');
  
  if (!request) {
    return res.status(404).json({ success: false, message: 'Request not found' });
  }
  
  if (!manager) {
    return res.status(403).json({ success: false, message: 'Unauthorized' });
  }
  
  if (request.status !== 'pending') {
    return res.status(400).json({
      success: false,
      message: 'Request already processed'
    });
  }
  
  if (action === 'approve') {
    request.status = 'approved';
    
    // Deduct leave balance
    const employee = users.find(u => u.id === request.employeeId);
    if (employee) {
      switch (request.leaveType) {
        case 'vacation':
          employee.vacationLeaves -= request.days;
          break;
        case 'sick':
          employee.sickLeaves -= request.days;
          break;
        case 'casual':
          employee.casualLeaves -= request.days;
          break;
      }
      employee.leaveBalance = employee.vacationLeaves + employee.sickLeaves + employee.casualLeaves;
    }
  } else if (action === 'reject') {
    request.status = 'rejected';
  } else {
    return res.status(400).json({ success: false, message: 'Invalid action' });
  }
  
  request.approvedBy = managerId;
  request.approvedDate = new Date().toISOString().split('T')[0];
  
  res.json({
    success: true,
    message: `Leave request ${action}d successfully`,
    request
  });
});

// Serve index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
