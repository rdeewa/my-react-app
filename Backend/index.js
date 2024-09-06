
const mysql = require('mysql2');
const express = require("express")
const app = express()
const cors = require("cors")
const {
    createpool
} = require('mysql');



app.get('/',(req,res)=> {
    return res.json('from the backend side')
})

app.listen('8001',()=>{
    console.log('server is running on port 8001')
})

app.use(
    cors({
        origin: "*",
    })
)

app.use(express.json());

// Create a connection to the database
const db = mysql.createConnection({
    host: 'localhost',  
    user: 'root',         
    password: '',     
    database: 'streaming'   
  });
  
  // Connect to the database
  db.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err);
      return;
    }
    console.log('Connected to the MySQL database.');
  });

db.connect((err, connection) => {
    if (err) {
      console.error('Error connecting to the database:', err);
    } else {
      console.log('Successfully connected to the database');
      // connection.release(); // Release the connection back to the pool
    }
  });

app.post('/signup', (req, res) => {

    const { name, email, mobile, password, gender, dob } = req.body;
    const sql = 'INSERT INTO users (name, email, mobile, password, gender, date_of_birth) VALUES (?, ?, ?, ?, ?, ?)';
    const  params = [name, email, mobile, password, gender, dob];
    
    db.query(sql, params, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error saving data');
        } else {
            res.send('User registered successfully');
        }
    });
});

app.post('/login', (req, res) => {

    let {email , password} = req.body;
 
     const sql ="select * from users where email = ? and password =? "

     db.query(sql , [email,password] , (err,data) =>{
        if(err){
            return res.json(err)
        }else{
            return res.json(data)
        }
     })
});

app.get('/courses' , (req,res) =>{

    const sql = "select * from awt_courses where deleted = 0"

    db.query(sql , (err,data) =>{
        if(err){
            return res.json(err)
        }else{
            return res.json(data)
        }
    })
})

app.get('/allcourse', (req, res) => {
    const sql = 'SELECT * FROM all_courses WHERE deleted = 0';

    db.query(sql, (err, data) => {
        if (err) {
            return res.json(err);
        } else {
            return res.json(data);
        }
    });
});
app.get('/mycourse', (req, res) => {
    const sql = 'SELECT * FROM my_courses WHERE deleted = 0';

    db.query(sql, (err, data) => {
        if (err) {
            return res.json(err);
        } else {
            return res.json(data);
        }
    });
});


