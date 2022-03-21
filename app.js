const express = require('express')
const mongoose = require('mongoose')
const methods = require('./routes/methods')
const port = process.env.PORT || '5000';
const cors = require('cors')

//replace <password> with your database password
dburl = 'mongodb+srv://amrit:root@cluster0.ec3ss.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (err) { console.log(err); }
  else {
    console.log('we good')
    app.listen(port,()=>{
      console.log(`Server started at port ${port}`)
    })
  }
})

const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'ejs')
app.use('/', methods)
