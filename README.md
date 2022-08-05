# MWA-Project-Backend
Modern web application final project backend using Node.js

# request for register
api : http://localhost:9090/user/register

req :
{
    name: String,
    email: String,
    password: String,
    authType: String,
    dob: Date,
    interests: [String]
}

res : 
{
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjJlYzhlYmViZDJiNTBiYjZlOTIyNzQ5IiwiZnVsbG5hbWUiOiJEaW5lc2ggU2FybWEiLCJlbWFpbCI6ImRzYXJtYUBtaXUuZWR1IiwiaWF0IjoxNjU5NjcwMjA2fQ.TWBp0wq_PCNUCnKarGXJ1CT78w5-pgJW_eNkus1bFiM',
  data: {
    name: 'Dinesh Sarma',
    email: 'dsarma@miu.edu',
    password: 'dinesh123',
    authType: 'Admin',
    dob: '12/12/1991',
    interests: [ 'thriller', 'horror' ]
  }
}

# req for login
api : http://localhost:9090/user/login

req: 
{
    "email": "abcd",
    "password": "12cd"
}

res : 
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjJlYzgxNmJiZTA5MjBjYTU3ODBhOTliIiwiZnVsbG5hbWUiOiJEaW5lc2ggU2FybWEiLCJlbWFpbCI6ImRzYXJtYUBtaXUuZWR1IiwiaWF0IjoxNjU5NjY5NzUzfQ.nVUaWKgwlVJcfz1-HfO8--v4f9V7REd_z3IYCPdUv6A"
}