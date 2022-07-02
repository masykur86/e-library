import bcrypt from 'bcryptjs'
const users = [
  {
    name: 'Muhammad Masykur, S.Kom',
    email: 'john@example.com',
    nip: '199706022022031004',
    nrp: '622971329',
    password: bcrypt.hashSync('622971329', 10),
    isAdmin: true,
  },
]
export default users
