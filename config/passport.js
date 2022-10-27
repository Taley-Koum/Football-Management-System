//passport config -1
// const LocalStrategy = require('passport-local').Strategy;
// const bcrypt = require('bcryptjs')
// let users = require('../models/user')

// module.exports = function (passport){
//     passport.use(new LocalStrategy({usernameField: 'username', passwordField: 'password'}, (username, password, done)=>{
//         //match username
//         let query = {username:username}
//         users.findOne(query, (err, user)=>{
//             if(err) throw err;
//             if(!user){
//                 return done(null, false, {message: 'No user found'})
//             }
//             bcrypt.compare(password, user.password, (err, isMatch) => {
//                 if (err)
//                     throw err;
//                 if (isMatch) {
//                     return done(null, user);
//                 }
//                 else {
//                     return done(null, false, { message: 'Incorrect Password' });
//                 }
//             })
//         })
//     }))
//     //serializeDeserialize
//     passport.serializeUser(function(user, done) {
//         done(null, user.id);
//     });
    
//     passport.deserializeUser(function(id, done) {
//         users.findById(id, function(err, user) {
//           done(err, user);
//         });
//       });
// }

//passport config -2
const bcrypt = require('bcryptjs')
const LocalStrategy = require('passport-local').Strategy

function initialize (passport, getUserByUserName, getUserById){
    const authenticateUser = async (username, password, done) => {
        const user = getUserByUserName(username)
        if(user == null){
            return done(null, false, {message: 'Incorrect Credentials'})
        }
        try{
            if (await bcrypt.compare(password, user.password)){
                return done(null, user)
            }
            else{
                return done(null, false, {message: 'Incorrect Credentials'})
            }
        }
        catch (e){
            return done (e);
        }
    }
    passport.use(new LocalStrategy(authenticateUser))
    passport.serializeUser((user, done) => done(null, user.id))
    passport.deserializeUser((id, done) => { 
        return done(null, getUserById(id))
    })
}

module.exports = initialize
