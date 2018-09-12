PASSWORD = "supersecret".freeze

User.delete_all

super_user = User.create(
  first_name: 'Eric',
  last_name: 'Cartman',
  email: 'eric.cartman@southpark.com',
  password: PASSWORD,
  admin: true,
)

puts "🔥 Login with #{super_user.email} and password of #{PASSWORD} 🔥"
