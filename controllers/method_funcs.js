
const Blog = require('../models/blog')

const createData = (req, res) => {
    res.render('create')
}

const feedData = (req, res) => {

    const blog = new Blog({
        name: req.body.name,
        title: req.body.title,
        body: req.body.body
    })
    blog.save((err, result) => {
        if (err) { console.log(err); } else { res.redirect('/') }
    })
}

const serveData = (req, res) => {
    Blog.find((err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.render('./blog-pages/blogs', { result: result })
        }
    })
}

module.exports = { createData, feedData, serveData }