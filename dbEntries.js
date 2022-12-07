import User from './models/UserModel.js';
import Post from './models/PostModel.js';
import bcrypt from "bcrypt";

const addEnrty = {

    newUser1: async function () {
        const hashedPassword = await bcrypt.hash("password1", 10);
        var newUser = {
            name: "Nicolai Sergey",
            username: "Foodlover112",
            email: "foodlov@gmail.com",
            school: "DE LA SALLE UNIVERSITY, MANILA",
            password: hashedPassword,
            profilePic: 'profile6.jpg',
            bio: "Cooking for my kids is the best!"
        };
        User.create(newUser, err => {
            if (err) console.log(err);
        });
    },

    newUser2: async function () {
        const hashedPassword = await bcrypt.hash("password2", 10);

        var newUser = {
            name: "Nancy Bartolomeo",
            username: "nancyVegan",
            email: "nancyVeg@gmail.com",
            school: "DE LA SALLE UNIVERSITY, MANILA",
            password: hashedPassword,
            profilePic: 'blank.png',
            bio: "I am a proud Vegan! Let's all be vegan"
        };
        User.create(newUser, err => {
            if (err) console.log(err);
        });
    },

    newUser3: async function () {
        const hashedPassword = await bcrypt.hash("password3", 10);
        var newUser = {
            name: "Ray Mund",
            username: "raymund2",
            email: "raymund@gmail.com",
            school: "DE LA SALLE UNIVERSITY, MANILA",
            password: hashedPassword,
            profilePic: 'profile3.jpg',
            bio: "Baguio City is the best place for food and comfort! Sioma rice is best meal :)"
        };
        User.create(newUser, err => {
            if (err) console.log(err);
        });
    },

    newUser4: async function () {
        const hashedPassword = await bcrypt.hash("password4", 10);
        var newUser = {
            name: "Michelle Jones",
            username: "pastalover012",
            email: "pasta012@gmail.com",
            school: "DE LA SALLE UNIVERSITY, MANILA",
            password: hashedPassword,
            profilePic: 'profile7.jpg',
            bio: "If i were to eat one meal forever, it would be pasta!"
        };
        User.create(newUser, err => {
            if (err) console.log(err);
        });
    },

    newUser5: async function () {
        const hashedPassword = await bcrypt.hash("password5", 10);
        var newUser = {
            name: "Tiffany Uy",
            username: "Tifanny24",
            email: "Tifanny24@gmail.com",
            school: "UNIVERSITY OF THE PHILIPPINES, DILIMAN",
            password: hashedPassword,
            profilePic: 'profile5.png',
            bio: "I am always craving for fries! Always Looking for the best Chicken restaurant"
        };
        User.create(newUser, err => {
            if (err) console.log(err);
        });
    },

    newUser1Post1: function () { 
        const dateNow = new Date();
        const date = dateNow.toDateString() + " " + dateNow.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        var postInfo = {
            name: "Nicolai Sergey",
            username: "Foodlover112",
            school: "DE LA SALLE UNIVERSITY, MANILA",
            content: "Cooking some nuggets for the kids! #breakfasttime",
            date: date,
            img: "picture1.jpg",
            profilePic: 'profile6.jpg',
            tempId: "User1Post1",
            bio: "Cooking for my kids is the best!"
        }
        Post.create(postInfo, err => {
            if (err) { console.log(err); }
        });
    },

    newUser1Post2: function () {
        const dateNow = new Date();
        const date = dateNow.toDateString() + " " + dateNow.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        var postInfo = {
            name: "Nicolai Sergey",
            username: "Foodlover112",
            school: "DE LA SALLE UNIVERSITY, MANILA",
            content: "Vegies  #Vegan",
            date: date,
            img: "picture2.jpg",
            profilePic: 'profile6.jpg',
            tempId: "User1Post2",
            bio: "Cooking for my kids is the best!"
        }
        Post.create(postInfo, err => {
            if (err) { console.log(err); }
        });
    },

    newUser1Post3: function () {
        const dateNow = new Date();
        const date = dateNow.toDateString() + " " + dateNow.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        var postInfo = {
            name: "Ray Mund",
            username: "raymund2",
            school: "DE LA SALLE UNIVERSITY, MANILA",
            content: "Siomai tayo dyan mga pare!",
            date: date,
            img: "picture3.jpg",
            profilePic: 'profile3.jpg',
            tempId: "User1Post3",
            bio: "Baguio City is the best place for food and comfort! Sioma rice is best meal :) "
        }
        Post.create(postInfo, err => {
            if (err) { console.log(err); }
        });
    },

    newUser1Post4: function () {
        const dateNow = new Date();
        const date = dateNow.toDateString() + " " + dateNow.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        var postInfo = {
            name: "Michelle Jones",
            username: "pastalover012",
            school: "DE LA SALLE UNIVERSITY, MANILA",
            content: "Pasta date with my special someone :> Pizza is so good as well. definitely going back here again!!",
            date: date,
            img: "picture7.jpg",
            profilePic: 'profile7.jpg',
            tempId: "User1Post4",
            bio: "If i were to eat one meal forever, it would be pasta!"
        }
        Post.create(postInfo, err => {
            if (err) { console.log(err); }
        });
    },

    newUser1Post5: function () {
        const dateNow = new Date();
        const date = dateNow.toDateString() + " " + dateNow.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        var postInfo = {
            name: "Tifanny Uy",
            username: "Tifanny24",
            school: "DE LA SALLE UNIVERSITY, MANILA",
            content: "Chicken and Fries :D #Yum",
            date: date,
            img: "picture5.jpg",
            profilePic: 'profile5.png',
            tempId: "User1Post5",
            bio: "I am alwasy craving for fries! Always Looking for the best Chicken restaurant."
        }
        Post.create(postInfo, err => {
            if (err) { console.log(err); }
        });
    },

    newUser1Post6: function () {
        const dateNow = new Date();
        const date = dateNow.toDateString() + " " + dateNow.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        var postInfo = {
            name: "Nancy Bartolomeo",
            username: "nancyVegan",
            school: "DE LA SALLE UNIVERSITY, MANILA",
            content: "Super yummy food!",
            date: date,
            img: "picture7.jpg",
            profilePic: 'blank.png',
            tempId: "User1Post6",
            bio: "I am a proud Vegan! Let's all be vegan."
        }
        Post.create(postInfo, err => {
            if (err) { console.log(err); }
        });
    },



    deleteUser: function (username) {
        User.deleteOne({ username: username }, function (err, result) {
            if (err) { console.log(err) }
        })
    },

    deletePost: function (tempId) {
        Post.deleteOne({ tempId: tempId }, function (err, result) {
            if (err) { console.log(err); }
        })
    },

}

export default addEnrty;
