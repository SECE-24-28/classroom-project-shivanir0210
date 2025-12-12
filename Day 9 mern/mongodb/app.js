const express=require('express')
const app=express()
const bodyparser=require('body-parser')//it is a middile var
const exhbs=require('express-handlebars')
const dbo=require('./db')
let msg="shivaa"
app.engine('hbs',exhbs.engine(
    {
        layoutsDir:'viewsfound',
        defaultLayout:'main',
        extname:'hbs'
    }
))



app.set('view engine','hbs')
app.set('views','viewsfound')
app.use(bodyparser.urlencoded({
    extended: true
}))
//app.get('/',(req,res)=>{
   // res.render('main',{msg})
//})
//const dbo=require('./db')
app.post('/store_book', async (req, res) => {

    let database=await dbo.getDataBase()
    const collection=database.collection('books')
    let bookdata={title:req.body.title,author:req.body.author}
    await collection.insertOne(bookdata)
    return res.redirect('/?status=1')
})
app.get('/',async(req,res)=>{
    let database=await dbo.getDataBase()
    const collection=database.collection('books')
    const books=await collection.find({})
    let mydata=await books.toArray()
    switch(req.query.status)
    {
        case '1':
            msg="data stored successfully"
            break
        
        default:
            msg="welcome to the page"
    }
    
    res.render('main', {msg,mydata})
})
app.listen(2006,()=>{console.log("listening to the port")})
