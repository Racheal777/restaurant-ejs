const express = require('express')
const connection = require('./db')
const cors = require('cors')

const Port = process.env.Port || 8000
const app = express()


app.set("view engine", "ejs")
app.use(express.static('public'))
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))


app.get('/', (req, res) =>{
    res.render('index', {title: "Homepage"})
})

app.get('/contact', (req, res) =>{
    res.render('contact', {title: "Contact"})
})

app.get('/about', (req, res) =>{
    res.render('about', {title: "About"})
})

app.get('/comment', (req, res) =>{
    res.render('comments', {title: "Comments"})
})






//post request
app.post('/comment', async (req, res) => {
    
        var  name    =  req.body.name;
        var message =   req.body.message;
        var rating1 = req.body.rating1;
        var d = new Date().toISOString().slice(0,10);

        const data = {
            "name"      :   name,
            "message"   :   message,
            "rating1":rating1,
            "date":d
        }
    
    const db = await connection.getConnect('restaurant')
    db.collection('comments').insertOne(data, (err, results ) =>{
        if(err) throw err
        if(results){
            
            res.redirect('/')
            // res.send(data)
            
        } 
  
       
    })
    
    
})



//get request
app.get('/comments', async(req, res) =>{

    const db = await connection.getConnect('restaurant')
    db.collection('comments').find({}).toArray((err, results )  =>{
        if(err) throw err
        if(results) res.send(results)
    })
    
})






connection.dbConnect().then(() =>{

    app.listen(Port, () => console.log(`server and mongodb is connected at ${Port}`))
})
