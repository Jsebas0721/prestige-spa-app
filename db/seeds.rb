# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Service.destroy_all

user1 = User.create(username: "test1234", password: "test1234", first_name: "", last_name: "", email: "" , profile_picture: "");

puts "Users Seeded!"

Service.create(service_name: "Swedish Massage", description: "A classic massage technique that uses long, flowing strokes to promote relaxation and ease tension.", duration: "60 minutes", cost: "$80", service_type: "Massage");
Service.create(service_name: "Deep Tissue Massage", description: "A therapeutic massage focused on targeting deeper muscle layers to release knots and alleviate chronic tension.", duration: "90 minutes", cost: "$110", service_type: "Massage");
Service.create(service_name: "Aromatherapy", description: "Essential oils are used to enhance relaxation and promote emotional balance in this gentle massage.",duration: "45 minutes", cost: "$70", service_type: "Massage");
Service.create(service_name: "Facial Renewal",description: "A rejuvenating facial treatment that cleanses, exfoliates, and nourishes the skin for a radiant complexion.",duration: "75 minutes",cost: "$120",service_type: "Facial")
Service.create(service_name: "Body Scrub", description: "Exfoliating treatment using natural scrubs to remove dead skin cells and reveal softer skin.",duration: "60 minutes",cost: "$75", service_type: "Body Treatment")

puts "Services Seeded!"