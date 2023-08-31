# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Service.destroy_all
Professional.destroy_all
Location.destroy_all

user1 = User.create(username: "test1234", password: "test1234", first_name: "Juan Sebastian", last_name: "Medina Lopez", email: "sebastianlopez_21@hotmail.com" , profile_picture: "https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-businessman-in-office.jpg?s=612x612&w=0&k=20&c=QjebAlXBgee05B3rcLDAtOaMtmdLjtZ5Yg9IJoiy-VY=");

puts "Users Seeded!"

Service.create(service_name: "Swedish Massage", description: "A classic massage technique that uses long, flowing strokes to promote relaxation and ease tension.", duration: "60 minutes", cost: "$80", service_type: "Massage");
Service.create(service_name: "Deep Tissue Massage", description: "A therapeutic massage focused on targeting deeper muscle layers to release knots and alleviate chronic tension.", duration: "90 minutes", cost: "$110", service_type: "Massage");
Service.create(service_name: "Aromatherapy", description: "Essential oils are used to enhance relaxation and promote emotional balance in this gentle massage.",duration: "45 minutes", cost: "$70", service_type: "Massage");
Service.create(service_name: "Facial Renewal",description: "A rejuvenating facial treatment that cleanses, exfoliates, and nourishes the skin for a radiant complexion.",duration: "75 minutes",cost: "$120",service_type: "Facial")
Service.create(service_name: "Body Scrub", description: "Exfoliating treatment using natural scrubs to remove dead skin cells and reveal softer skin.",duration: "60 minutes",cost: "$75", service_type: "Body Treatment")

puts "Services Seeded!"

Professional.create(
    name: "Jessica Anderson", 
    gender: "Female", 
    picture: "https://img.freepik.com/free-photo/portrait-dentist-standing-with-arms-crossed_107420-73978.jpg?w=2000",
    about: "With over 7 years of experience in the wellness industry, Jessica is a skilled therapist dedicated to helping clients achieve relaxation and rejuvenation. Her soothing touch and attention to detail create a serene atmosphere that promotes total well-being.", 
    service_type: "Massage");

Professional.create(name: "Michael Williams", 
    gender: "Male", 
    picture: "https://riverviewphotography.com/wp-content/uploads/2020/03/Male-Business-Headshot-Riverview-Photography-1.jpg",
    about: "Michael is a highly trained specialist with a passion for body treatments. His extensive knowledge of herbal therapies and exfoliation techniques allows him to create custom treatments tailored to each client's unique needs, leaving them feeling refreshed and revitalized.", 
    service_type: "Body Treatment");

Professional.create(name: "Emily Roberts", 
    gender: "Female", 
    picture: "https://img.freepik.com/free-photo/beautician-woman-clinic_23-2148878877.jpg?w=360", 
    about: "As a licensed esthetician, Emily is committed to enhancing her clients' natural beauty. Her expertise in skincare and deep cleansing facials helps clients achieve radiant and glowing skin. With a gentle touch and a wealth of knowledge, Emily ensures a pampering experience like no other.", 
    service_type: "Facials");

Professional.create(name: "David Lee", 
    gender: "Male", 
    picture: "https://skinmedspa.com/wp-content/uploads/2016/10/guy5-e1475694983441.jpg", 
    about: "With a background in holistic therapies, David brings a balanced approach to his massage sessions. His strong hands and intuitive touch alleviate tension and promote relaxation. Whether it's a deep tissue massage or a soothing Swedish massage, David's techniques are tailored to each client's preferences.", 
    service_type: "Massage");

Professional.create(name: "Sophia Nguyen", 
    gender: "Female", 
    picture: "https://img.freepik.com/free-photo/beautician-woman-clinic-with-tablet_23-2148878886.jpg", 
    about: " Sophia's passion for natural ingredients and healing rituals shines through in her body treatments. Drawing from her international spa experiences, she offers an array of exfoliating scrubs and nourishing wraps that transport clients to a world of serenity and self-care.", 
    service_type: "Body Treatment");

Professional.create(name: "Daniel Smith", 
    gender: "Male", 
    picture: "https://i.pinimg.com/originals/13/03/1f/13031f78b55de893567abe78f8f23dff.jpg", 
    about: "With a commitment to skin health, Daniel specializes in advanced facial treatments. His in-depth knowledge of skincare technology and personalized consultation approach ensures that clients receive tailored solutions for their specific concerns, leaving their skin revitalized and youthful.", 
    service_type: "Facials");

Professional.create(name: "Olivia Brown", 
    gender: "Female", 
    picture: "https://media.istockphoto.com/id/1280387272/photo/woman-cosmetologist-or-dermatologist-looking-at-camera-in-beauty-spa-salon-room.jpg?s=612x612&w=0&k=20&c=hRlG6gAZpwg-47z8Gl07zkaKIYIR4gL15N2xvOy9icM=", 
    about: "Olivia's soothing presence and extensive massage training make her a favorite among clients seeking relaxation. Her expertise in aromatherapy and hot stone massage techniques melts away stress, promoting a sense of tranquility and balance.", 
    service_type: "Massage");

Professional.create(name: "Ethan Martinez", 
    gender: "Male", 
    picture: "https://thumbs.dreamstime.com/b/portrait-male-masseur-specialist-spa-uniform-portrait-male-masseur-specialist-spa-center-141100316.jpg", 
    about: "With a focus on holistic wellness, Ethan offers body treatments that nourish both body and mind. His commitment to using organic ingredients and traditional techniques ensures that clients experience a harmonious blend of rejuvenation and relaxation.", 
    service_type: "Body Treatment");

Professional.create(name: "Isabella Clark", 
    gender: "Female", 
    picture: "https://img.freepik.com/premium-photo/portrait-young-cosmetologist_506452-21384.jpg?w=360", 
    about: "Isabella's passion for skincare and beauty is evident in her facials. Her extensive training in European skincare methods and luxurious facial massage techniques leave clients feeling pampered and glowing, with a renewed sense of self-care.", 
    service_type: "Facials");

puts "Professionals Seeded!"

Location.create(address: "123 Main Street", city: "Albany", state: "NY", postal_code: "12345", country: "United States", phone: "(555) 123-4567")
Location.create(address: "456 Wellness Avenue", city: "New York", state: "NY", postal_code: "10001", country: "United States", phone: "(631) 987-6543")
Location.create(address: "79 Serenity Lane", city: "Buffalo", state: "NY", postal_code: "14202", country: "United States", phone: "(555) 789-0123")

puts "Locations Seeded!"