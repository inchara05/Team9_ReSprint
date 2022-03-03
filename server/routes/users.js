const express = require("express");
const router = express.Router();
const data = require('../data/users');


router.post('/login', async(req,res) => {
    try{
        let user = req.body.username;
        let pass = req.body.password;
        const existedUser = await data.checkUser(user, pass);
        if(existedUser.authenticated){
            req.session.username = user;
            res.redirect("/private");
            return;
        }
    }
    catch(e){
        console.log(e)
        res.status(400).render("login/login",{error:"Invalid username, password"});
        return;
    }
});

router.get('/', async(req,res) => {
    let session = req.session;
    if(session['username']){
        res.redirect("/private");
        return;
    }
        res.render("login/login");
        return;
});

router.post('/signup', async(req,res)=>{
    try{
        try{
            let user = req.body.username;
            let pass = req.body.password;
            const newUser = await data.createUser(user ,pass);
            if(newUser.userInserted){
                res.redirect("/");
            }
        }
        catch(e){
            res.status(400).render("signup/signup", {"error":e});
            return;
        }
    }
       
    catch(e){
        res.status(500).json({error : "Internal server error"});
    }
});

router.get('/signup', async(req,res) => {

    try{
        let session = req.session;
        if(session['username']){
            res.redirect("/private");
            return;
        }
        else {
           res.render("signup/signup") 
           return;
        }
    }
    catch(e){
        res.render("signup/signup");
        return;
    }
});

module.exports = router;