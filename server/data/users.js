const bcrypt = require("bcrypt");
const saltRounds = 16;
const mongoCollection = require('../config/mongoCollections');
const users = mongoCollection.users;

module.exports = {

    async createUser(username, password){

        if(typeof username !== "string")
            throw "You must provide a string"
        if(username.length === 0)
            throw "You must not provide empty string"
        if(typeof password !== "string")
            throw "You must provide a string"
        if(password.length === 0)
            throw "You must not provide empty password"
        if(username.length < 4)
            throw "Username should be atleast 4 characters"
        if(password.length < 6)
            throw "Password should be atleast 6 characters"
        if(username.trim().length === 0)
            throw "You must provide username"
        let re = new RegExp(/[^A-Za-z0-9]/g);
        if(re.test(username))
           throw "You must provide alphanumeric characters"
        if (username.indexOf(' ') !== -1)
              throw "Given input has spaces"
        if (password.indexOf(' ') !== -1)
              throw "Given input has spaces"
        
        const Collection = await users();
        const h_password = await bcrypt.hash(password, saltRounds);
        const user = username.toLowerCase();
            let newUser = {
                username : user,
                password : h_password,
            }
    
        let repeated_input = await Collection.findOne({username: username});
        if(repeated_input !== null)
        throw "Username already exist"

    let insertInfo = Collection.insertOne(newUser);
    if(insertInfo.insertedCount === 0)
        throw "User doesn't exist"

    return{userInserted:true};
},

    async checkUser(username,password){

        if(typeof username !== "string")
            throw "You must provide a string"
        if(username.length === 0)
            throw "You must not provide empty string"
        if(typeof password !== "string")
            throw "You must provide a string"
        if(password.length === 0)
            throw "You must not provide empty password"
        if(username.length < 4)
            throw "Username should be atleast 4 characters"
        if(password.length < 6)
            throw "Password should be atleast 6 characters"
        if(username.trim().length === 0)
            throw "You must provide username"
            let re = new RegExp(/[^A-Za-z0-9]/g);
            if(re.test(username))
               throw "You must provide alphanumeric characters"
        if (username.indexOf(' ') !== -1)
              throw "Given input has spaces"
        if (password.indexOf(' ') !== -1)
              throw "Given input has spaces"
    
        const Collection = await users();
        let User = await Collection.findOne({username: username});
        let value = false;
        try{
            value = await bcrypt.compare(password, User.password);
        }
        catch(e){
            console.log(e);
        }
        if(value)
            return{authenticated:true};
        else{
            throw "You must provide a valid username and password";
        }
    } 
}