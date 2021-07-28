const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  res.render('homepage');
});

router.get('/pageone', async (req, res) => {
  res.render('pageone');
});

router.get('/login', async (req, res) => {
  res.render('login');
});




module.exports = router;
