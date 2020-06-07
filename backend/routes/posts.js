const router = require('express').Router();
let Post = require('../models/post.model');

router.route('/').get((req, res) => {
  Post.find()
  .then(posts => res.json(posts))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const author = req.body.author;
  //const image = req.body.image;
  const content = req.body.content;
  //const date = Date.parse(req.body.date)

  const newPost = new Post({
    title,
    author,
    //image,
    content,
    //date
  });

  newPost.save()
    .then(() => res.json('Post added'))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').get((req, res) => {
    Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req,res) => {
  Post.findById(req.params.id)
  .then(post => {
    post.title = req.body.name;
    post.author = req.body.author;
    post.content = req.body.content;

    post.save()
      .then(() => res.json('Post added'))
      .catch(() => res.status(400).json(`Error: ${err}`))
  })
  .catch(() => res.status(400).json(`Error: ${err}`))
})

router.route('/:id').delete((req, res) => {
  Post.findByIdAndDelete(req.params.id)
  .then(() => res.json('Post deleted'))
  .catch(err => res.status(400).json(`Error: ${err}`))
})

module.exports = router; 