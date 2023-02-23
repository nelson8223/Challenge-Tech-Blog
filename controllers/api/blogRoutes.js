const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
   console.log("hello world") 
    const newBlog = await Blog.create({
      ...req.body,
      user_name: req.session.user_name,
    });

    res.status(200).json(newBlog);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const blogData = await Blog.destroy({
      where: {
        user_name: req.params.user_name,
        user_name: req.session.user_name,
      },
    });

    if (!blogData) {
      res.status(404).json({ message: 'unable to add Blog!' });
      return;
    }

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
