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

User.delete_all
User.reset_pk_sequence
ShoppingList.delete_all
ShoppingList.reset_pk_sequence
Recipe.delete_all
Recipe.reset_pk_sequence
Review.delete_all
Review.reset_pk_sequence

demo_user = User.create({ 
    display_name: "demo", 
    email: "demo@login.com", 
    password: "password" })
shopping_list1 = ShoppingList.create({
    owner_id: demo_user.id })

domo_arigato = User.create({ 
    display_name: "Domo Arigato", 
    email: "domo@gmail.com", 
    password: "password" })
shopping_list2 = ShoppingList.create({
    owner_id: domo_arigato.id })
    
clark_kent = User.create({ 
    display_name: "Clark Kent", 
    email: "clark_kent@gmail.com", 
    password: "password" })
shopping_list3 = ShoppingList.create({
    owner_id: clark_kent.id })

the_bees_knees = User.create({ 
    display_name: "The Bees Knees", 
    email: "beezus@gmail.com", 
    password: "password" })
shopping_list4 = ShoppingList.create({
    owner_id: the_bees_knees.id })

brandon = User.create({ 
    display_name: "Brandon", 
    email: "brandon@gmail.com", 
    password: "password" })
shopping_list5 = ShoppingList.create({
    owner_id: brandon.id })

roasted_pork_chop_with_vegetables = Recipe.create({
    title: "Roasted Pork Chop with Vegetables",
    description: "It's real yumms fam", 
    directions: "Lorem ipsum dolor sit amet , consectetur adipiscing elit , sed do eiusmod tempor incididunt et dolore magna aliqua", 
    ingredients: "1 cup flour , 2 tsp sugar , 1 pinch salt , 2 medium eggs", 
    prep_time: 20, 
    cook_time: 30, 
    number_of_servings: 1,
    author_id: 1
})
    
file = open('https://allmyverybestrecipes-seeds.s3-us-west-1.amazonaws.com/alex-munsell-Yr4n8O_3UPc-unsplash.jpg')
roasted_pork_chop_with_vegetables.photo.attach(io: file, filename: 'alex-munsell-Yr4n8O_3UPc-unsplash.jpg')

coconut_popsicle = Recipe.create({
    title: "Coconut popsicle",
    description: "Got frozen coconut?", 
    directions: "Lorem ipsum dolor sit amet , consectetur adipiscing elit , sed do eiusmod tempor incididunt et dolore magna aliqua", 
    ingredients: "1 cup flour , 2 tsp sugar , 1 pinch salt , 2 medium eggs", 
    prep_time: 2, 
    cook_time: 6, 
    number_of_servings: 6,
    author_id: 2
})
    
file = open('https://allmyverybestrecipes-seeds.s3-us-west-1.amazonaws.com/aliona-gumeniuk-pHDFgXWIOK0-unsplash.jpg')
coconut_popsicle.photo.attach(io: file, filename: 'aliona-gumeniuk-pHDFgXWIOK0-unsplash.jpg')

grilled_cheese = Recipe.create({
    title: "The very best grilled cheese",
    description: "CHEEEEEEESE!!!!", 
    directions: "Lorem ipsum dolor sit amet , consectetur adipiscing elit , sed do eiusmod tempor incididunt et dolore magna aliqua", 
    ingredients: "1 cup flour , 2 tsp sugar , 1 pinch salt , 2 medium eggs", 
    prep_time: 2, 
    cook_time: 5, 
    number_of_servings: 1,
    author_id: 3
})
    
file = open('https://allmyverybestrecipes-seeds.s3-us-west-1.amazonaws.com/asnim-ansari-SqYmTDQYMjo-unsplash.jpg')
grilled_cheese.photo.attach(io: file, filename: 'asnim-ansari-SqYmTDQYMjo-unsplash.jpg')

mixed_citrus = Recipe.create({
    title: "Mixed citrus",
    description: "Lots of vitamin C", 
    directions: "Lorem ipsum dolor sit amet , consectetur adipiscing elit , sed do eiusmod tempor incididunt et dolore magna aliqua", 
    ingredients: "1 cup flour , 2 tsp sugar , 1 pinch salt , 2 medium eggs", 
    prep_time: 2, 
    cook_time: 0, 
    number_of_servings: 3,
    author_id: 4
})
    
file = open('https://allmyverybestrecipes-seeds.s3-us-west-1.amazonaws.com/bruna-branco-7r1HxvVC7AY-unsplash.jpg')
mixed_citrus.photo.attach(io: file, filename: 'bruna-branco-7r1HxvVC7AY-unsplash.jpg')

soup = Recipe.create({
    title: "Soup",
    description: "Fastest recipe ever", 
    directions: "Lorem ipsum dolor sit amet , consectetur adipiscing elit , sed do eiusmod tempor incididunt et dolore magna aliqua", 
    ingredients: "1 cup flour , 2 tsp sugar , 1 pinch salt , 2 medium eggs", 
    prep_time: 0, 
    cook_time: 0, 
    number_of_servings: 1,
    author_id: 5
})
    
file = open('https://allmyverybestrecipes-seeds.s3-us-west-1.amazonaws.com/cayla1-w6ftFbPCs9I-unsplash.jpg')
soup.photo.attach(io: file, filename: 'cayla1-w6ftFbPCs9I-unsplash.jpg')

dumplings = Recipe.create({
    title: "Gyoza",
    description: "It's authentic", 
    directions: "Lorem ipsum dolor sit amet , consectetur adipiscing elit , sed do eiusmod tempor incididunt et dolore magna aliqua", 
    ingredients: "1 cup flour , 2 tsp sugar , 1 pinch salt , 2 medium eggs", 
    prep_time: 20, 
    cook_time: 30, 
    number_of_servings: 1,
    author_id: 1
})
    
file = open('https://allmyverybestrecipes-seeds.s3-us-west-1.amazonaws.com/charles-deluvio-D-vDQMTfAAU-unsplash.jpg')
dumplings.photo.attach(io: file, filename: 'charles-deluvio-D-vDQMTfAAU-unsplash.jpg')

popcorn = Recipe.create({
    title: "Buttered popcorn",
    description: "Oh snap, it's crackle. Jk, its just pop", 
    directions: "Lorem ipsum dolor sit amet , consectetur adipiscing elit , sed do eiusmod tempor incididunt et dolore magna aliqua", 
    ingredients: "1 cup flour , 2 tsp sugar , 1 pinch salt , 2 medium eggs", 
    prep_time: 2, 
    cook_time: 4, 
    number_of_servings: 1,
    author_id: 2
})
    
file = open('https://allmyverybestrecipes-seeds.s3-us-west-1.amazonaws.com/charles-deluvio-PvAAYZx-yf8-unsplash.jpg')
popcorn.photo.attach(io: file, filename: 'charles-deluvio-PvAAYZx-yf8-unsplash.jpg')

grilled_corn = Recipe.create({
    title: "Elote",
    description: "We can make some smokey syrup outa this", 
    directions: "Lorem ipsum dolor sit amet , consectetur adipiscing elit , sed do eiusmod tempor incididunt et dolore magna aliqua", 
    ingredients: "1 cup flour , 2 tsp sugar , 1 pinch salt , 2 medium eggs",  
    prep_time: 2, 
    cook_time: 10, 
    number_of_servings: 1,
    author_id: 3
})
    
file = open('https://allmyverybestrecipes-seeds.s3-us-west-1.amazonaws.com/dragne-marius-ennARkXrF74-unsplash.jpg')
grilled_corn.photo.attach(io: file, filename: 'dragne-marius-ennARkXrF74-unsplash.jpg')

fruit_smoothie = Recipe.create({
    title: "Mixed berry smoothie",
    description: "All the vitamins", 
    directions: "Lorem ipsum dolor sit amet , consectetur adipiscing elit , sed do eiusmod tempor incididunt et dolore magna aliqua", 
    ingredients: "1 cup flour , 2 tsp sugar , 1 pinch salt , 2 medium eggs", 
    prep_time: 0, 
    cook_time: 2, 
    number_of_servings: 1,
    author_id: 4
})
    
file = open('https://allmyverybestrecipes-seeds.s3-us-west-1.amazonaws.com/element5-digital-CpBBsda2eRI-unsplash.jpg')
fruit_smoothie.photo.attach(io: file, filename: 'element5-digital-CpBBsda2eRI-unsplash.jpg')

meatballs = Recipe.create({
    title: "Lamb meatballs",
    description: "You'll be ballin'", 
    directions: "Lorem ipsum dolor sit amet , consectetur adipiscing elit , sed do eiusmod tempor incididunt et dolore magna aliqua", 
    ingredients: "1 cup flour , 2 tsp sugar , 1 pinch salt , 2 medium eggs", 
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
    directions: "Lorem ipsum dolor sit amet , consectetur adipiscing elit , sed do eiusmod tempor incididunt et dolore magna aliqua", 
    ingredients: "1 cup flour , 2 tsp sugar , 1 pinch salt , 2 medium eggs", 
    prep_time: 3, 
    cook_time: 0, 
    number_of_servings: 1,
    author_id: 1
})
    
file = open('https://allmyverybestrecipes-seeds.s3-us-west-1.amazonaws.com/hanny-naibaho-6JUjdlHyqw0-unsplash.jpg')
morning_bowl.photo.attach(io: file, filename: 'hanny-naibaho-6JUjdlHyqw0-unsplash.jpg')

ice_cream = Recipe.create({
    title: "Ice Cream",
    description: "Requirement: a grocery", 
    directions: "Lorem ipsum dolor sit amet , consectetur adipiscing elit , sed do eiusmod tempor incididunt et dolore magna aliqua", 
    ingredients: "1 cup flour , 2 tsp sugar , 1 pinch salt , 2 medium eggs", 
    prep_time: 1, 
    cook_time: 0, 
    number_of_servings: 1,
    author_id: 2
})
    
file = open('https://allmyverybestrecipes-seeds.s3-us-west-1.amazonaws.com/ian-dooley-TLD6iCOlyb0-unsplash.jpg')
ice_cream.photo.attach(io: file, filename: 'ian-dooley-TLD6iCOlyb0-unsplash.jpg')

egg = Recipe.create({
    title: "Hard Boiled Eggs",
    description: "Cheapest source of protein", 
    directions: "Lorem ipsum dolor sit amet , consectetur adipiscing elit , sed do eiusmod tempor incididunt et dolore magna aliqua", 
    ingredients: "1 cup flour , 2 tsp sugar , 1 pinch salt , 2 medium eggs", 
    prep_time: 0, 
    cook_time: 12, 
    number_of_servings: 2,
    author_id: 3
})
    
file = open('https://allmyverybestrecipes-seeds.s3-us-west-1.amazonaws.com/joseph-gonzalez-fdlZBWIP0aM-unsplash.jpg')
egg.photo.attach(io: file, filename: 'joseph-gonzalez-fdlZBWIP0aM-unsplash.jpg')

french_toast = Recipe.create({
    title: "French Toast with mixed fruit",
    description: "A hearty breakfast for those who love sweets", 
    directions: "Lorem ipsum dolor sit amet , consectetur adipiscing elit , sed do eiusmod tempor incididunt et dolore magna aliqua", 
    ingredients: "1 cup flour , 2 tsp sugar , 1 pinch salt , 2 medium eggs", 
    prep_time: 10, 
    cook_time: 5, 
    number_of_servings: 2,
    author_id: 4
})
    
file = open('https://allmyverybestrecipes-seeds.s3-us-west-1.amazonaws.com/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg')
french_toast.photo.attach(io: file, filename: 'joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg')

banana = Recipe.create({
    title: "banana",
    description: "It's a fruit", 
    directions: "Lorem ipsum dolor sit amet , consectetur adipiscing elit , sed do eiusmod tempor incididunt et dolore magna aliqua", 
    ingredients: "1 cup flour , 2 tsp sugar , 1 pinch salt , 2 medium eggs",  
    prep_time: 3, 
    cook_time: 0, 
    number_of_servings: 1,
    author_id: 5
})
    
file = open('https://allmyverybestrecipes-seeds.s3-us-west-1.amazonaws.com/lucian-alexe-1MUBZt4zoJ0-unsplash.jpg')
banana.photo.attach(io: file, filename: 'lucian-alexe-1MUBZt4zoJ0-unsplash.jpg')

melon = Recipe.create({
    title: "melon",
    description: "It's also a fruit", 
    directions: "Lorem ipsum dolor sit amet , consectetur adipiscing elit , sed do eiusmod tempor incididunt et dolore magna aliqua", 
    ingredients: "1 cup flour , 2 tsp sugar , 1 pinch salt , 2 medium eggs", 
    prep_time: 1, 
    cook_time: 0, 
    number_of_servings: 1,
    author_id: 1
})
    
file = open('https://allmyverybestrecipes-seeds.s3-us-west-1.amazonaws.com/oriol-portell-AbwqpFnBDms-unsplash.jpg')
melon.photo.attach(io: file, filename: 'oriol-portell-AbwqpFnBDms-unsplash.jpg')

berry_pop = Recipe.create({
    title: "Berry pop",
    description: "A treat", 
    directions: "Lorem ipsum dolor sit amet , consectetur adipiscing elit , sed do eiusmod tempor incididunt et dolore magna aliqua", 
    ingredients: "1 cup flour , 2 tsp sugar , 1 pinch salt , 2 medium eggs", 
    prep_time: 0, 
    cook_time: 2, 
    number_of_servings: 1,
    author_id: 2
})
    
file = open('https://allmyverybestrecipes-seeds.s3-us-west-1.amazonaws.com/pablo-merchan-montes-MXovqM130UI-unsplash.jpg')
berry_pop.photo.attach(io: file, filename: 'pablo-merchan-montes-MXovqM130UI-unsplash.jpg')

new_york_pizza = Recipe.create({
    title: "New York style pizza",
    description: "It's real simple", 
    directions: "Lorem ipsum dolor sit amet , consectetur adipiscing elit , sed do eiusmod tempor incididunt et dolore magna aliqua", 
    ingredients: "1 cup flour , 2 tsp sugar , 1 pinch salt , 2 medium eggs", 
    prep_time: 0, 
    cook_time: 0, 
    number_of_servings: 1,
    author_id: 3
})
    
file = open('https://allmyverybestrecipes-seeds.s3-us-west-1.amazonaws.com/thomas-tucker-MNtag_eXMKw-unsplash.jpg')
new_york_pizza.photo.attach(io: file, filename: 'thomas-tucker-MNtag_eXMKw-unsplash.jpg')

avocado = Recipe.create({
    title: "avocado",
    description: "It's the california special", 
    directions: "Lorem ipsum dolor sit amet , consectetur adipiscing elit , sed do eiusmod tempor incididunt et dolore magna aliqua", 
    ingredients: "1 cup flour , 2 tsp sugar , 1 pinch salt , 2 medium eggs", 
    prep_time: 0, 
    cook_time: 0, 
    number_of_servings: 1,
    author_id: 4
})
    
file = open('https://allmyverybestrecipes-seeds.s3-us-west-1.amazonaws.com/thought-catalog-9aOswReDKPo-unsplash.jpg')
avocado.photo.attach(io: file, filename: 'thought-catalog-9aOswReDKPo-unsplash.jpg')

monstrosity = Recipe.create({
    title: "Watermelon Hawaiian Pizza",
    description: "Don't dis it till you try it", 
    directions: "Lorem ipsum dolor sit amet , consectetur adipiscing elit , sed do eiusmod tempor incididunt et dolore magna aliqua", 
    ingredients: "1 cup flour , 2 tsp sugar , 1 pinch salt , 2 medium eggs", 
    prep_time: 0, 
    cook_time: 0, 
    number_of_servings: 100,
    author_id: 5
})
    
file = open('https://allmyverybestrecipes-seeds.s3-us-west-1.amazonaws.com/watermelon-hawaiian-pizza.png')
monstrosity.photo.attach(io: file, filename: 'watermelon-hawaiian-pizza.png')

review1 = Review.create({
    rating: 1, 
    body: "Diam ut venenatis tellus in metus. Donec pretium vulputate sapien nec sagittis aliquam. Amet nulla facilisi morbi tempus iaculis.", 
    recipe_id: 1, 
    reviewer_id: 2
})
review1 = Review.create({
    rating: 2, 
    body: "Diam ut venenatis tellus in metus. Donec pretium vulputate sapien nec sagittis aliquam. Amet nulla facilisi morbi tempus iaculis.", 
    recipe_id: 2, 
    reviewer_id: 2
})
review1 = Review.create({
    rating: 3, 
    body: "Diam ut venenatis tellus in metus. Donec pretium vulputate sapien nec sagittis aliquam. Amet nulla facilisi morbi tempus iaculis.", 
    recipe_id: 2,
    reviewer_id: 1
})
review1 = Review.create({
    rating: 4, 
    body: "Diam ut venenatis tellus in metus. Donec pretium vulputate sapien nec sagittis aliquam. Amet nulla facilisi morbi tempus iaculis.", 
    recipe_id: 3,
    reviewer_id: 2
})
review1 = Review.create({
    rating: 5, 
    body: "Diam ut venenatis tellus in metus. Donec pretium vulputate sapien nec sagittis aliquam. Amet nulla facilisi morbi tempus iaculis.", 
    recipe_id: 4,
    reviewer_id: 1
})
review1 = Review.create({
    rating: 3, 
    body: "Diam ut venenatis tellus in metus. Donec pretium vulputate sapien nec sagittis aliquam. Amet nulla facilisi morbi tempus iaculis.", 
    recipe_id: 3,
    reviewer_id: 1
})
review1 = Review.create({
    rating: 4, 
    body: "Diam ut venenatis tellus in metus. Donec pretium vulputate sapien nec sagittis aliquam. Amet nulla facilisi morbi tempus iaculis.", 
    recipe_id: 6,
    reviewer_id: 1
})
review1 = Review.create({
    rating: 4, 
    body: "Diam ut venenatis tellus in metus. Donec pretium vulputate sapien nec sagittis aliquam. Amet nulla facilisi morbi tempus iaculis.", 
    recipe_id: 4,
    reviewer_id: 2
})
review1 = Review.create({
    rating: 2, 
    body: "Diam ut venenatis tellus in metus. Donec pretium vulputate sapien nec sagittis aliquam. Amet nulla facilisi morbi tempus iaculis.", 
    recipe_id: 1,
    reviewer_id: 4
})
review1 = Review.create({
    rating: 1, 
    body: "Diam ut venenatis tellus in metus. Donec pretium vulputate sapien nec sagittis aliquam. Amet nulla facilisi morbi tempus iaculis.", 
    recipe_id: 5,
    reviewer_id: 2
})