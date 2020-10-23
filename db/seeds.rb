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

require 'open-uri'

User.destroy_all

demo_user = User.create({ 
    display_name: "demo", 
    email: "demo@login.com", 
    password: "password" })
file = open('https://allmyverybestrecipes-seeds.s3-us-west-1.amazonaws.com/pickle.jpg')
demo_user.photo.attach(io: file, filename: 'pickle.jpg')

domo_arigato = User.create({ 
    display_name: "Domo Arigato", 
    email: "domo@gmail.com", 
    password: "password" })
clark_kent = User.create({ 
    display_name: "Clark Kent", 
    email: "clark_kent@gmail.com", 
    password: "password" })
the_bees_knees = User.create({ 
    display_name: "The Bees Knees", 
    email: "beezus@gmail.com", 
    password: "password" })
brandon = User.create({ 
    display_name: "Brandon", 
    email: "brandon@gmail.com", 
    password: "password" })
the_dude = User.create({ 
    display_name: "The Dude", 
    email: "thedude@gmail.com", 
    password: "password" })
sherry_the_nurse = User.create({ 
    display_name: "Sherry, the nurse", 
    email: "sherry123@gmail.com", 
    password: "password" })
i_am_groot = User.create({ 
    display_name: "I am groot", 
    email: "groot@gmail.com", 
    password: "password" })
a_cup_of_refined_water = User.create({ 
    display_name: "A cup of refined water", 
    email: "refinedwater@gmail.com", 
    password: "password" })
coffee_enthusiast = User.create({ 
    display_name: "Coffee enthusiast", 
    email: "coffeethuse@gmail.com", 
    password: "password" })
this_be_wack = User.create({ 
    display_name: "This be wack", 
    email: "wack@gmail.com", 
    password: "password" })
ironman = User.create({ 
    display_name: "Ironman", 
    email: "ironman@gmail.com", 
    password: "password" })
ironmans_friend = User.create({ 
    display_name: "Ironman's friend", 
    email: "ironman_friend@gmail.com", 
    password: "password" })
protractor = User.create({ 
    display_name: "Protractor", 
    email: "protractor@gmail.com", 
    password: "password" })
zelda = User.create({ 
    display_name: "Zelda", 
    email: "link@gmail.com", 
    password: "password" })
gary_says_meow = User.create({ 
    display_name: "Gary says meow", 
    email: "spongebob@gmail.com", 
    password: "password" })
ubermensch = User.create({ 
    display_name: "Übermensch", 
    email: "germans@gmail.com", 
    password: "password" })
goku = User.create({ 
    display_name: "Goku", 
    email: "dbzunited@gmail.com", 
    password: "password" })
peter_pan = User.create({ 
    display_name: "Peter Pan", 
    email: "fairiesRreal@gmail.com", 
    password: "password" })
joaquin_phoenix = User.create({ 
    display_name: "Joaquin Phoenix", 
    email: "lejoker@gmail.com", 
    password: "password" })

roasted_pork_chop_with_vegetables = Recipe.create({
    title: "Roasted Pork Chop with Vegetables",
    description: "It's real yumms fam", 
    directions: "(1) Get some pork, roast it (2) Save the roasting liquids and make gravy (3) Dont forget to also roast them veggies (4) Boom. Food", 
    prep_time: 20, 
    cook_time: 30, 
    number_of_servings: 1,
    author_id: 10
})
    
file = open('https://allmyverybestrecipes-seeds.s3-us-west-1.amazonaws.com/alex-munsell-Yr4n8O_3UPc-unsplash.jpg')
roasted_pork_chop_with_vegetables.photo.attach(io: file, filename: 'alex-munsell-Yr4n8O_3UPc-unsplash.jpg')

coconut_popsicle = Recipe.create({
    title: "Coconut popsicle",
    description: "Got frozen coconut?", 
    directions: "(1) Get a can of coconut milk (2) Pour into ice tray (3) Leave in freezer for a bit (4) Stick toothpicks into semi frozen pops (6) Wait more (7) Now you have pops", 
    prep_time: 2, 
    cook_time: 6, 
    number_of_servings: 6,
    author_id: 5
})
    
file = open('https://allmyverybestrecipes-seeds.s3-us-west-1.amazonaws.com/aliona-gumeniuk-pHDFgXWIOK0-unsplash.jpg')
coconut_popsicle.photo.attach(io: file, filename: 'aliona-gumeniuk-pHDFgXWIOK0-unsplash.jpg')

grilled_cheese = Recipe.create({
    title: "The very best grilled cheese",
    description: "CHEEEEEEESE!!!!", 
    directions: "(1) Procure some nice cheeses (2) Slap cheeses inbetween nice bread (3) Stick cheesy bread into George Foreman grill (4) Wait till its golden brown delicious (5) Now, you have a grilled cheese", 
    prep_time: 2, 
    cook_time: 5, 
    number_of_servings: 1,
    author_id: 11
})
    
file = open('https://allmyverybestrecipes-seeds.s3-us-west-1.amazonaws.com/asnim-ansari-SqYmTDQYMjo-unsplash.jpg')
grilled_cheese.photo.attach(io: file, filename: 'asnim-ansari-SqYmTDQYMjo-unsplash.jpg')

mixed_citrus = Recipe.create({
    title: "Mixed citrus",
    description: "Lots of vitamin C", 
    directions: "(1) Figure out what classifies as citrus (2) Cut the fruit in half (3) Now you have food", 
    prep_time: 2, 
    cook_time: 0, 
    number_of_servings: 3,
    author_id: 18
})
    
file = open('https://allmyverybestrecipes-seeds.s3-us-west-1.amazonaws.com/bruna-branco-7r1HxvVC7AY-unsplash.jpg')
mixed_citrus.photo.attach(io: file, filename: 'bruna-branco-7r1HxvVC7AY-unsplash.jpg')

soup = Recipe.create({
    title: "Soup",
    description: "Fastest recipe ever", 
    directions: "(1) Open a can of campbells and serve", 
    prep_time: 0, 
    cook_time: 0, 
    number_of_servings: 1,
    author_id: 10
})
    
file = open('https://allmyverybestrecipes-seeds.s3-us-west-1.amazonaws.com/cayla1-w6ftFbPCs9I-unsplash.jpg')
soup.photo.attach(io: file, filename: 'cayla1-w6ftFbPCs9I-unsplash.jpg')

dumplings = Recipe.create({
    title: "Gyoza",
    description: "It's authentic", 
    directions: "(1) Go to the frozen isle (2) Go home (3) Follow instructions on bag", 
    prep_time: 20, 
    cook_time: 30, 
    number_of_servings: 1,
    author_id: 10
})
    
file = open('https://allmyverybestrecipes-seeds.s3-us-west-1.amazonaws.com/charles-deluvio-D-vDQMTfAAU-unsplash.jpg')
dumplings.photo.attach(io: file, filename: 'charles-deluvio-D-vDQMTfAAU-unsplash.jpg')

popcorn = Recipe.create({
    title: "Buttered popcorn",
    description: "Oh snap, it's crackle. Jk, its just pop", 
    directions: "(1)Get a pot, with the flame on medium, and add just enough neutral oil to coat the bottom (2) Add in 1 cup of popcorn kernels and place lid on top (3) Shake pot sometimes (4) POP POP POP (5) and there's your popcorn", 
    prep_time: 2, 
    cook_time: 4, 
    number_of_servings: 1,
    author_id: 19
})
    
file = open('https://allmyverybestrecipes-seeds.s3-us-west-1.amazonaws.com/charles-deluvio-PvAAYZx-yf8-unsplash.jpg')
popcorn.photo.attach(io: file, filename: 'charles-deluvio-PvAAYZx-yf8-unsplash.jpg')

grilled_corn = Recipe.create({
    title: "Elote",
    description: "We can make some smokey syrup outa this", 
    directions: "(1) Boil corn (2) Slap it on a grill (3) throw butter, cotija cheese, and lime on it (maybe some cilantro) (4) Oh, my, gosh.", 
    prep_time: 2, 
    cook_time: 10, 
    number_of_servings: 1,
    author_id: 1
})
    
file = open('https://allmyverybestrecipes-seeds.s3-us-west-1.amazonaws.com/dragne-marius-ennARkXrF74-unsplash.jpg')
grilled_corn.photo.attach(io: file, filename: 'dragne-marius-ennARkXrF74-unsplash.jpg')

fruit_smoothie = Recipe.create({
    title: "Mixed berry smoothie",
    description: "All the vitamins", 
    directions: "(1)Get some fruit (2) Blend em together (3) Wait till it's smoothie-like", 
    prep_time: 0, 
    cook_time: 2, 
    number_of_servings: 1,
    author_id: 5
})
    
file = open('https://allmyverybestrecipes-seeds.s3-us-west-1.amazonaws.com/element5-digital-CpBBsda2eRI-unsplash.jpg')
fruit_smoothie.photo.attach(io: file, filename: 'element5-digital-CpBBsda2eRI-unsplash.jpg')

meatballs = Recipe.create({
    title: "Lamb meatballs",
    description: "You'll be ballin'", 
    directions: "(1) Get some ground lamb (2) Add some egg and breadcrumbs (3) Roll em into balls (4) Cook till they look cooked", 
    prep_time: 20, 
    cook_time: 30, 
    number_of_servings: 2,
    author_id: 5
})
    
file = open('https://allmyverybestrecipes-seeds.s3-us-west-1.amazonaws.com/emiliano-vittoriosi-OFismyezPnY-unsplash.jpg')
meatballs.photo.attach(io: file, filename: 'emiliano-vittoriosi-OFismyezPnY-unsplash.jpg')

morning_bowl = Recipe.create({
    title: "Morning Bowl",
    description: "It's healthy i swear", 
    directions: "(1)YOGURT, GRANOLA, HONEY, SLICED STRAWBERRIES (2) Serve", 
    prep_time: 3, 
    cook_time: 0, 
    number_of_servings: 1,
    author_id: 19
})
    
file = open('https://allmyverybestrecipes-seeds.s3-us-west-1.amazonaws.com/hanny-naibaho-6JUjdlHyqw0-unsplash.jpg')
morning_bowl.photo.attach(io: file, filename: 'hanny-naibaho-6JUjdlHyqw0-unsplash.jpg')

ice_cream = Recipe.create({
    title: "Ice Cream",
    description: "Requirement: a grocery", 
    directions: "(1) Get your favorite ice cream and put it in a bowl (2) Get a spoon", 
    prep_time: 1, 
    cook_time: 0, 
    number_of_servings: 1,
    author_id: 5
})
    
file = open('https://allmyverybestrecipes-seeds.s3-us-west-1.amazonaws.com/ian-dooley-TLD6iCOlyb0-unsplash.jpg')
ice_cream.photo.attach(io: file, filename: 'ian-dooley-TLD6iCOlyb0-unsplash.jpg')

egg = Recipe.create({
    title: "Hard Boiled Eggs",
    description: "Cheapest source of protein", 
    directions: "(1) Get a pot and fill it with the eggs and some water (2) Bring said pot to a boil (3) Cover and turn the heat off (4) Let it sit there for at least 10 mins ", 
    prep_time: 0, 
    cook_time: 12, 
    number_of_servings: 2,
    author_id: 5
})
    
file = open('https://allmyverybestrecipes-seeds.s3-us-west-1.amazonaws.com/joseph-gonzalez-fdlZBWIP0aM-unsplash.jpg')
egg.photo.attach(io: file, filename: 'joseph-gonzalez-fdlZBWIP0aM-unsplash.jpg')

french_toast = Recipe.create({
    title: "French Toast with mixed fruit",
    description: "A hearty breakfast for those who love sweets", 
    directions: "(1) Start of with some challah bread, sliced (2) Mix together some eggs, cinammon, nutmeg, sugar, vanilla extract, and milk (3) Drench the slices (4) Pan fry slices with butter and wait till they're GBD", 
    prep_time: 10, 
    cook_time: 5, 
    number_of_servings: 2,
    author_id: 19
})
    
file = open('https://allmyverybestrecipes-seeds.s3-us-west-1.amazonaws.com/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg')
french_toast.photo.attach(io: file, filename: 'joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg')

banana = Recipe.create({
    title: "banana",
    description: "It's a fruit", 
    directions: "(1) Buy a banana (2) Wait for it to ripen", 
    prep_time: 3, 
    cook_time: 0, 
    number_of_servings: 1,
    author_id: 19
})
    
file = open('https://allmyverybestrecipes-seeds.s3-us-west-1.amazonaws.com/lucian-alexe-1MUBZt4zoJ0-unsplash.jpg')
banana.photo.attach(io: file, filename: 'lucian-alexe-1MUBZt4zoJ0-unsplash.jpg')

melon = Recipe.create({
    title: "melon",
    description: "It's also a fruit", 
    directions: "(1) Buy a melon (2) Chop it", 
    prep_time: 1, 
    cook_time: 0, 
    number_of_servings: 1,
    author_id: 19
})
    
file = open('https://allmyverybestrecipes-seeds.s3-us-west-1.amazonaws.com/oriol-portell-AbwqpFnBDms-unsplash.jpg')
melon.photo.attach(io: file, filename: 'oriol-portell-AbwqpFnBDms-unsplash.jpg')

berry_pop = Recipe.create({
    title: "Berry pop",
    description: "A treat", 
    directions: "(1) get some mixed berries and blend with your favorite milk/milk-substitute", 
    prep_time: 0, 
    cook_time: 2, 
    number_of_servings: 1,
    author_id: 1
})
    
file = open('https://allmyverybestrecipes-seeds.s3-us-west-1.amazonaws.com/pablo-merchan-montes-MXovqM130UI-unsplash.jpg')
berry_pop.photo.attach(io: file, filename: 'pablo-merchan-montes-MXovqM130UI-unsplash.jpg')

new_york_pizza = Recipe.create({
    title: "New York style pizza",
    description: "It's real simple", 
    directions: "Just go to new york", 
    prep_time: 0, 
    cook_time: 0, 
    number_of_servings: 1,
    author_id: 1
})
    
file = open('https://allmyverybestrecipes-seeds.s3-us-west-1.amazonaws.com/thomas-tucker-MNtag_eXMKw-unsplash.jpg')
new_york_pizza.photo.attach(io: file, filename: 'thomas-tucker-MNtag_eXMKw-unsplash.jpg')

avocado = Recipe.create({
    title: "avocado",
    description: "It's the california special", 
    directions: "(1) Chop it in half when it's ripe", 
    prep_time: 0, 
    cook_time: 0, 
    number_of_servings: 1,
    author_id: 19
})
    
file = open('https://allmyverybestrecipes-seeds.s3-us-west-1.amazonaws.com/thought-catalog-9aOswReDKPo-unsplash.jpg')
avocado.photo.attach(io: file, filename: 'thought-catalog-9aOswReDKPo-unsplash.jpg')

monstrosity = Recipe.create({
    title: "Watermelon Hawaiian Pizza",
    description: "Don't dis it till you try it", 
    directions: "(1) It's a secret", 
    prep_time: 0, 
    cook_time: 0, 
    number_of_servings: 100,
    author_id: 5
})
    
file = open('https://allmyverybestrecipes-seeds.s3-us-west-1.amazonaws.com/watermelon-hawaiian-pizza.png')
monstrosity.photo.attach(io: file, filename: 'watermelon-hawaiian-pizza.png')