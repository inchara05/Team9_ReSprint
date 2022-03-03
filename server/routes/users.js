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

module.exports = router;