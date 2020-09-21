# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
users = User.create([
  {first_name: 'John', last_name: 'Dunwald', email: 'john.dunwald@company.com', password: 'abc123'},
  {first_name: 'Karen', last_name: 'Foley', email: 'karen.foley@company.com', password: 'def456'},
  {first_name: 'Richard', last_name: 'Rodriguez', email: 'richard.rodriguez@company.com', password: 'ghi789'},
  {first_name: 'Theresa', last_name: 'Jacobs', email: 'theresa.jacobs@company.com', password: 'jkl111'},
  {first_name: 'Beau', last_name: 'Reyes', email: 'beau.reyes@company.com', password: 'mno121'},
  {first_name: 'Paul', last_name: 'Baum', email: 'paul.baum@company.com', password: 'pqr131'},
  {first_name: 'Lauren', last_name: 'Tran', email: 'lauren.tran@company.com', password: 'stu141'},
  {first_name: 'David', last_name: 'Fabian', email: 'david.fabian@company.com', password: 'vwx151'}
  ])
