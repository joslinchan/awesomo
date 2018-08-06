require 'csv'

PASSWORD = "supersecret"

SearchTerm.delete_all
User.delete_all

super_user = User.create(
  first_name: 'Rick',
  last_name: 'Sanchez',
  email: 'rick@earthc137.dim',
  password: PASSWORD,
    admin: true
)

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

csv_text = File.read(Rails.root.join('lib', 'seeds', 'search_term_tags.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')

csv.each do |row|
  search = SearchTerm.new
  search.term = row['term']
  search.save
end

puts "Uploaded #{SearchTerm.count} search terms" 
puts "Login with #{super_user.email} and password of #{PASSWORD}"
