# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# demoUser = User.new({
#     display_name: "demo", 
#     email: "demo@login.com", 
#     password: "password"
# })

User.destroy_all

# demo user
User.create({ display_name: "demo", email: "demo@login.com", password: "password" })

# pseudo users
User.create({ display_name: "Domo Arigato", email: "demo@gmail.com", password: "password" })
User.create({ display_name: "Clark Kent", email: "demo@gmail.com", password: "password" })
User.create({ display_name: "The Bees Knees", email: "demo@gmail.com", password: "password" })
User.create({ display_name: "Brandon", email: "demo@gmail.com", password: "password" })
User.create({ display_name: "The Dude", email: "demo@gmail.com", password: "password" })
User.create({ display_name: "Sherry, the nurse", email: "demo@gmail.com", password: "password" })
User.create({ display_name: "I am groot", email: "demo@gmail.com", password: "password" })
User.create({ display_name: "A cup of refined water", email: "demo@gmail.com", password: "password" })
User.create({ display_name: "Coffee enthusiast", email: "demo@gmail.com", password: "password" })
User.create({ display_name: "This be wack", email: "demo@gmail.com", password: "password" })
User.create({ display_name: "Ironman", email: "demo@gmail.com", password: "password" })
User.create({ display_name: "Ironman's friend", email: "demo@gmail.com", password: "password" })
User.create({ display_name: "Protractor", email: "demo@gmail.com", password: "password" })
User.create({ display_name: "Zelda", email: "demo@gmail.com", password: "password" })
User.create({ display_name: "Gary says meow", email: "demo@gmail.com", password: "password" })
User.create({ display_name: "Übermensch", email: "demo@gmail.com", password: "password" })
User.create({ display_name: "Goku", email: "demo@gmail.com", password: "password" })
User.create({ display_name: "Peter Pan", email: "demo@gmail.com", password: "password" })
User.create({ display_name: "Joaquin Phoenix", email: "demo@gmail.com", password: "password" })
User.create({ display_name: "I too am groot", email: "demo@gmail.com", password: "password" })