# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create([
  {first_name: 'John', last_name: 'Dunwald', email: 'john.dunwald@company.com', password: 'abc123'},
  {first_name: 'Karen', last_name: 'Foley', email: 'karen.foley@company.com', password: 'def456'},
  {first_name: 'Richard', last_name: 'Rodriguez', email: 'richard.rodriguez@company.com', password: 'ghi789'},
  {first_name: 'Theresa', last_name: 'Jacobs', email: 'theresa.jacobs@company.com', password: 'jkl111'}
  ])
