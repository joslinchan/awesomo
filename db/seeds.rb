PASSWORD = "supersecret"

User.delete_all

super_user = User.create(
  first_name: 'Eric',
  last_name: 'Cartman',
  email: 'eric.cartman@southpark.com',
  password: PASSWORD,
    admin: true
)

=begin 
10.times do
  first_name = Faker::Name.first_name
  last_name = Faker::Name.last_name

  User.create(
    first_name: first_name,
    last_name: last_name,
    email: "#{first_name.downcase}.#{last_name.downcase}@example.com",
    password: PASSWORD
  )
end 

puts "👩👨 Created #{User.count} users"
=end

puts "Login with #{super_user.email} and password of #{PASSWORD}"
