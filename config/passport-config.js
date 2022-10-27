
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



