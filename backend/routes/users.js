const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
  .then(users => res.json(users))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('admin/users').post((req, res) => {
  if(err) {
    console.log(err)
  }
  res.redirect('/admin/landing')
})

router.route('/add').post((req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

  const newUser = new User({
    firstname,
    lastname,
    username,
    password,
    email
  });

  newUser.save()
    .then(() => res.json('User added'))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router; 