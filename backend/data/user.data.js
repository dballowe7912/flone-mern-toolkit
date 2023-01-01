const bcrypt = require('bcryptjs')
// firstName, lastName, email, password, isAdmin
const users = [
  {
    firstName: 'Admin',
    lastName: 'User',
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    firstName: 'John',
    lastName: 'Doe',
    name: 'John Doe',
    email: 'john@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    name: 'Jane Doe',
    email: 'jane@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

module.exports = users
