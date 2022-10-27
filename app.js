const express = require('express');
const app = express();
const path = require('path');
const passport = require('passport');
const flash = require('connect-flash')
const uuid = require('uuid');
const config = require('./config/database');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const port = 9986;
const expressValidator = require('express-validator');
const rando = require('generate-random-data');
const scramble = require('scramble');
scramble.attach();

//initializing mongobase
//create mongoose middleware
const mongoose = require('mongoose');
//ocnnect mongoose to database
mongoose.connect('mongodb://localhost/killerdb');
let db = mongoose.connection;
//verify database connection
db.once('open', ()=>{
    console.log('connected to killerbase');
})
db.on('error', (err)=>{
    console.log(err);
})
// import article middleware 
let Article = require('./models/article');



app.use(flash())
app.use(session({
    secret: config.secret,
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: +1000*60*30,
        sameSite: true
    }
}));

//setting up message receiver to pug template
app.use((req, res, next)=>{
    res.locals.messages = require('express-messages')(req, res);
    next();
});

//setting view engine 
app.set('view engine', 'pug')



//bcrypt hash password
async function hashpassword(){
    const hashedPassword = await bcrypt.hash('YeshuaMsheekha@0998', 10)
    users.push({
        id: uuid.v4(9),
        email: "ayo-fanibe0776@student.babcock.edu.ng",
        username: "admin@BLeague",
        password: hashedPassword 
    })
    //console.log(users)
}
hashpassword()
//push to users array ---------- mongoose/sub
let users = [
]


//passport config
// require('./config/passport')(passport);


//passport initialize and session
app.use(passport.initialize())
app.use(passport.session())
const initializePassport = require('./config/passport-config');
const { Cookie } = require('express-session');
const { cookie } = require('express-validator/check');
//using imported passport strategy
initializePassport(passport, 
    username => users.find(user => user.username === username),
    id => users.find(user => user.id === id)
)
app.use(express.json())
app.use(express.urlencoded({extended: false}))





//creating a static folder
app.use(express.static(path.join(__dirname, '/www')))

app.get('/mongo', (req, res)=>{
    Article.find({}, (err, articles)=>{
        if(err){
            console.log(err)
        }
        else{
            res.render('mongo', {
                title:'Articles', 
                articles: articles
            })
        }
    })
})

//get request to login page
app.get('/login', isLoggedIn, (req, res)=>{
    res.render('login')
})
//post request to /login with passport authentication
app.post('/login', isLoggedIn, (req, res, next)=>{
    passport.authenticate('local', {successRedirect: '/admin/server', failureRedirect: '/login', failureFlash: true})(req, res, next);
});
app.get('/admin/server', isAllowed, (req, res)=>{
    res.render('control-center');
})

//Access Control
function isAllowed(req, res, next){
    if(req.isAuthenticated()){
        next()
    }
    else{
        req.flash('danger', 'Please Login')
        res.redirect('/login')
    }
}
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        req.flash('danger', 'You are already logged in')
        res.redirect('/admin/server')
    }
    else{
        next()
    }
}

app.get('/logout', (req, res, next)=>{
    req.logOut();
    req.flash('success','You are logged out');
    res.redirect('/login')
})


//require body parser
const bodyParser = require('body-parser');
//initialize body parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
//demo
app.get('/layout', (req, res)=>{
    res.render('layout')
});

app.post('/add_article', (req, res)=>{
    let article = new Article({
        title: req.body.title,
        author: req.body.author,
        body: req.body.body
    })
    article.save((err)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log('Article saved successfully')
        }
    })
    res.redirect('/layout');
})

let initial_objects = [1, 2, 55, 55, 4];
// const output_objects = scramble(initial_objects);
initial_objects.scramble();
console.log(initial_objects);


app.listen(port, ()=> console.log(`Server running on port ${port}`));