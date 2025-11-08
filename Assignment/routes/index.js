var express = require('express');
var router = express.Router();

/* GET home (/) page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
}); /*Default landing page upon landing onto the site for the first time*/


/* GET home page */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
}); /*Dedicated section for the home landing page which is seperate from the above home page*/




/*The remaining code segments below this comment are all dedicated to creating specific landing pages for each page of the overall website*/

/* GET About Me Page */
router.get('/aboutme', function(req, res, next) {
  res.render('Aboutme', { title: 'About Me' });
});



/* Get Projects Page */
router.get('/projects', function(req, res, next) {
  res.render('Projects', { title: 'Projects' });
});


/* Contact Me */
router.get('/contactme', function(req, res, next) {
  res.render('Contactme', { title: 'Contact Me' });
});


module.exports = router;
