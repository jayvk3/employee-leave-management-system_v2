// Hardcoded database for Employee Leave Management System

// Users data (Employees and Managers)
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
  {
    id: 2,
    username: 'jane.smith',
    password: 'emp123',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'employee',
    department: 'Marketing',
    leaveBalance: 30,
    vacationLeaves: 15,
    sickLeaves: 10,
    casualLeaves: 5
  },
  {
    id: 3,
    username: 'mike.johnson',
    password: 'emp123',
    name: 'Mike Johnson',
    email: 'mike.johnson@example.com',
    role: 'employee',
    department: 'Sales',
    leaveBalance: 30,
    vacationLeaves: 15,
    sickLeaves: 10,
    casualLeaves: 5
  },
  {
    id: 101,
    username: 'sarah.brown',
    password: 'mgr123',
    name: 'Sarah Brown',
    email: 'sarah.brown@example.com',
    role: 'manager',
    department: 'HR',
    leaveBalance: 30,
    vacationLeaves: 15,
    sickLeaves: 10,
    casualLeaves: 5
  },
  {
    id: 102,
    username: 'david.wilson',
    password: 'mgr123',
    name: 'David Wilson',
    email: 'david.wilson@example.com',
    role: 'manager',
    department: 'Operations',
    leaveBalance: 30,
    vacationLeaves: 15,
    sickLeaves: 10,
    casualLeaves: 5
  }
];

// Leave requests data
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
  {
    id: 2,
    employeeId: 2,
    leaveType: 'sick',
    startDate: '2024-03-20',
    endDate: '2024-03-21',
    days: 2,
    reason: 'Medical checkup',
    status: 'pending',
    appliedDate: '2024-03-18',
    approvedBy: null,
    approvedDate: null
  },
  {
    id: 3,
    employeeId: 3,
    leaveType: 'casual',
    startDate: '2024-03-25',
    endDate: '2024-03-25',
    days: 1,
    reason: 'Personal work',
    status: 'pending',
    appliedDate: '2024-03-19',
    approvedBy: null,
    approvedDate: null
  },
  {
    id: 4,
    employeeId: 1,
    leaveType: 'sick',
    startDate: '2024-02-10',
    endDate: '2024-02-11',
    days: 2,
    reason: 'Flu',
    status: 'rejected',
    appliedDate: '2024-02-08',
    approvedBy: 101,
    approvedDate: '2024-02-09'
  }
];

module.exports = {
  users,
  leaveRequests
};
