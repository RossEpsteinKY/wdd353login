const express = require('express');
const router = express.Router();

router.get('/', (req,res) =>{
        res.render('index',{
            pagename: "Home"
        });
});

router.get('/about', (req,res) =>{
    res.render('about',{
        pagename: "About"
    });
});

router.get('/portfolio', (req,res) =>{
    res.render('portfolio',{
        pagename: "Portfolio"
    });
});

module.exports = router;
