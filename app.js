const express =require("express");
const path = require('path')

const app = express()
const port = 4000


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/',(req,res)=>{
   res.render('index')
})

app.listen(port,()=>{
   console.log('server is running..')
})