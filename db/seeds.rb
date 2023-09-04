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
Appointment.destroy_all

user1 = User.create(username: "test1234", password: "test1234", first_name: "Juan Sebastian", last_name: "Medina Lopez", email: "sebastianlopez_21@hotmail.com" , profile_picture: "https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-businessman-in-office.jpg?s=612x612&w=0&k=20&c=QjebAlXBgee05B3rcLDAtOaMtmdLjtZ5Yg9IJoiy-VY=");
user2 = User.create(username: "sebas1234", password: "sebas1234", first_name: "Sebastian", last_name: "Medina", email: "sebastianlopez_21@gmail.com" , profile_picture: "https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-businessman-in-office.jpg?s=612x612&w=0&k=20&c=QjebAlXBgee05B3rcLDAtOaMtmdLjtZ5Yg9IJoiy-VY=");
puts "Users Seeded!"

serv1 = Service.create(service_name: "Swedish Massage", description: "A classic massage technique that uses long, flowing strokes to promote relaxation and ease tension.", duration: "60 minutes", cost: "$80", service_type: "Massage");
serv2 = Service.create(service_name: "Deep Tissue Massage", description: "A therapeutic massage focused on targeting deeper muscle layers to release knots and alleviate chronic tension.", duration: "90 minutes", cost: "$110", service_type: "Massage");
serv3 = Service.create(service_name: "Aromatherapy", description: "Essential oils are used to enhance relaxation and promote emotional balance in this gentle massage.",duration: "45 minutes", cost: "$70", service_type: "Massage");
serv4 = Service.create(service_name: "Facial Renewal",description: "A rejuvenating facial treatment that cleanses, exfoliates, and nourishes the skin for a radiant complexion.",duration: "75 minutes",cost: "$120",service_type: "Facial")
serv5 = Service.create(service_name: "Body Scrub", description: "Exfoliating treatment using natural scrubs to remove dead skin cells and reveal softer skin.",duration: "60 minutes",cost: "$75", service_type: "Body Treatment")

puts "Services Seeded!"

pro1 = Professional.create(
    name: "Jessica Anderson", 
    picture: "https://img.freepik.com/free-photo/portrait-dentist-standing-with-arms-crossed_107420-73978.jpg?w=2000",
    gender: "Female", 
    about: "With over 7 years of experience in the wellness industry, Jessica is a skilled therapist dedicated to helping clients achieve relaxation and rejuvenation. Her soothing touch and attention to detail create a serene atmosphere that promotes total well-being.", 
    service_type: "Massage",
    );

pro2 = Professional.create(
    name: "Michael Williams", 
    picture: "https://riverviewphotography.com/wp-content/uploads/2020/03/Male-Business-Headshot-Riverview-Photography-1.jpg",
    gender: "Male", 
    about: "Michael is a highly trained specialist with a passion for body treatments. His extensive knowledge of herbal therapies and exfoliation techniques allows him to create custom treatments tailored to each client's unique needs, leaving them feeling refreshed and revitalized.", 
    service_type: "Body Treatment");

pro3 = Professional.create(
    name: "Emily Roberts", 
    picture: "https://img.freepik.com/free-photo/beautician-woman-clinic_23-2148878877.jpg?w=360", 
    gender: "Female", 
    about: "As a licensed esthetician, Emily is committed to enhancing her clients' natural beauty. Her expertise in skincare and deep cleansing facials helps clients achieve radiant and glowing skin. With a gentle touch and a wealth of knowledge, Emily ensures a pampering experience like no other.", 
    service_type: "Facial");

pro4 =Professional.create(
    name: "David Lee",
    picture: "https://skinmedspa.com/wp-content/uploads/2016/10/guy5-e1475694983441.jpg",  
    gender: "Male", 
    about: "With a background in holistic therapies, David brings a balanced approach to his massage sessions. His strong hands and intuitive touch alleviate tension and promote relaxation. Whether it's a deep tissue massage or a soothing Swedish massage, David's techniques are tailored to each client's preferences.", 
    service_type: "Massage");

pro5 = Professional.create(
    name: "Sophia Nguyen", 
    picture: "https://img.freepik.com/free-photo/beautician-woman-clinic-with-tablet_23-2148878886.jpg", 
    gender: "Female", 
    about: " Sophia's passion for natural ingredients and healing rituals shines through in her body treatments. Drawing from her international spa experiences, she offers an array of exfoliating scrubs and nourishing wraps that transport clients to a world of serenity and self-care.", 
    service_type: "Body Treatment");

pro6 = Professional.create(
    name: "Daniel Smith",
    picture: "https://i.pinimg.com/originals/13/03/1f/13031f78b55de893567abe78f8f23dff.jpg",  
    gender: "Male", 
    about: "With a commitment to skin health, Daniel specializes in advanced facial treatments. His in-depth knowledge of skincare technology and personalized consultation approach ensures that clients receive tailored solutions for their specific concerns, leaving their skin revitalized and youthful.", 
    service_type: "Facial");

pro7 = Professional.create(
    name: "Olivia Brown",
    picture: "https://media.istockphoto.com/id/1280387272/photo/woman-cosmetologist-or-dermatologist-looking-at-camera-in-beauty-spa-salon-room.jpg?s=612x612&w=0&k=20&c=hRlG6gAZpwg-47z8Gl07zkaKIYIR4gL15N2xvOy9icM=", 
    gender: "Female",  
    about: "Olivia's soothing presence and extensive massage training make her a favorite among clients seeking relaxation. Her expertise in aromatherapy and hot stone massage techniques melts away stress, promoting a sense of tranquility and balance.", 
    service_type: "Massage");

pro8 = Professional.create(
    name: "Ethan Martinez", 
    picture: "https://thumbs.dreamstime.com/b/portrait-male-masseur-specialist-spa-uniform-portrait-male-masseur-specialist-spa-center-141100316.jpg", 
    gender: "Male", 
    about: "With a focus on holistic wellness, Ethan offers body treatments that nourish both body and mind. His commitment to using organic ingredients and traditional techniques ensures that clients experience a harmonious blend of rejuvenation and relaxation.", 
    service_type: "Body Treatment");

pro9 = Professional.create(
    name: "Isabella Clark", 
    picture: "https://img.freepik.com/premium-photo/portrait-young-cosmetologist_506452-21384.jpg?w=360", 
    gender: "Female", 
    about: "Isabella's passion for skincare and beauty is evident in her facials. Her extensive training in European skincare methods and luxurious facial massage techniques leave clients feeling pampered and glowing, with a renewed sense of self-care.", 
    service_type: "Facial");

puts "Professionals Seeded!"

loc1 = Location.create(name: "PRESTIGE Albany", address: "123 Main Street", city: "Albany", state: "NY", postal_code: "12345", country: "United States", phone: "(555) 123-4567")
loc2 = Location.create(name: "PRESTIGE New York City", address: "456 Wellness Avenue", city: "New York", state: "NY", postal_code: "10001", country: "United States", phone: "(631) 987-6543")
loc3 = Location.create(name: "PRESTIGE Buffalo", address: "79 Serenity Lane", city: "Buffalo", state: "NY", postal_code: "14202", country: "United States", phone: "(555) 789-0123")

puts "Locatiions Seeded!"

ap1 = Appointment.create(service_name: serv1.service_name, service_type: serv1.service_type, date: "2023-11-08",time: "11:00 AM", duration: serv1.duration, cost: serv1.cost, location: loc1.name, user_id: user1.id, professional_id: pro1.id);
ap2 = Appointment.create(service_name: serv5.service_name, service_type: serv5.service_type, date: "2023-11-09",time: "12:00 AM", duration: serv5.duration, cost: serv5.cost, location: loc3.name, user_id: user2.id, professional_id: pro8.id);
# Appoinment.create(service_name: "", service_type: "", date_time: "", duration: "", location: "", user_id: "", specialist_id: "");

puts "Appointments Seeded!"

