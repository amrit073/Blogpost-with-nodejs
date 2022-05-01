
const Blog = require('../models/blog')

const createData = (req, res) => {
    res.render('create')
}

const feedData = (req, res) => {

    const blog = new Blog({
        name: req.body.name,
        title: req.body.title,
        body: req.body.body,
        comment: []
    })
    blog.save((err, result) => {
        if (err) { console.log(err); } else { res.redirect('/') }
    })
}

const serveData = (req, res) => {
    Blog.find({}, null, { sort: { createdAt: -1 } }, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.render('./blog-pages/blogs', { result: result })
        }
        console.log(result[1].comment);
    })
}
const feedCom = (req, res) => {
    console.log(req.body.commentid);
    Blog.findOneAndUpdate(
        { "_id": req.body.commentid },
        {
            $push: {
                comment: req.body.comment
            }
        }
    ).then((result)=>{console.log(result);})
    
    res.redirect('/')

}

const fetchCom = (req, res)=>{
    console.log(req.body);
    res.status(200)   
}

const forReact =(req, res) =>{
    Blog.find({}, null, { sort: { createdAt: -1 } }, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result)
        }
        console.log(result[1].comment);
    })
}


module.exports = { createData, feedData, serveData, feedCom, fetchCom , forReact}

