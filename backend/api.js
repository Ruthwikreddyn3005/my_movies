import express from 'express';
import cors from "cors";
import mysql from 'mysql2';
import {faker} from '@faker-js/faker'
let app = express();

app.use(cors());
app.use(express.json())
 const connection = mysql.createConnection({

    host:'Localhost',
    user:'root',
    password:'Ruthwik@123',
    database:'movie_app'
 })

app.listen(8080,()=>{
    console.log('Server is running on port 8080');
})

// app.get('/profile',(req,res)=>{
//     res.json({message:'Welcome to the profile Page'});
    
// })

const getRandomId =()=>{
    return faker.number.int();
}

app.get('/login/:username',(req,res)=>{

    connection.query('SELECT id,username,email,password FROM users WHERE username=? or email=?',[req.params.username,req.params.username],(err,results)=>{
        if(err){
            res.status(400).send({message:"user not found"})
            console.log(results)
            console.log(err)
            
        }
        else{
            res.send(results)
            console.log(results)
        }
    })
})


app.post('/register',(req,res)=>{
    
    const {username,email,password}=req.body
    connection.query('INSERT INTO users (id,username,email,password) VALUES (?,?,?,?)',[getRandomId(),username,email,password], (err,results)=>{
        if(err){
            res.status(400).send(err)
            
        }
        else{
            res.status(200).send(results)
           

        }
    })
})


app.get('/favorites/:id',(req,res)=>{
    console.log("routehit")
    const id=req.params.id
    connection.query('SELECT M.movie FROM movies M, favorites F WHERE F.movie_id = M.movie_id AND F.user_id=?',[id], (err,results)=>{
        
      if (err) return res.status(500).json({ message: 'DB error', error: String(err.code || err) });
      res.json(results || []);
    
    })
    
    
})

app.post('/favorites',async (req,res)=>{
    console.log(req.body)
    const {userId, Movie, movieId}= req.body
    const movieString= typeof Movie==="string"? Movie : JSON.stringify(Movie)

    connection.query('INSERT IGNORE INTO movies (movie_id,movie) VALUES(?,?)',[movieId,movieString],(err,results)=>{
       if (err) return res.status(500).json({ message: 'Insert movie failed', error: String(err.code || err) });
    })

    connection.query('INSERT INTO favorites (user_id,movie_id) VALUES (?,?)',[userId,movieId],(err,results)=>{
        if (err) return res.status(500).json({ message: 'Insert favorite failed', error: String(err.code || err) });
          res.status(201).json({ ok: true });
        
    })
    
})

app.delete('/favorites/:user_id/:movie_id', async(req,res)=>{
    console.log("route hit")
    const user_id= req.params.user_id
    const movie_id= req.params.movie_id
    connection.query('DELETE FROM favorites WHERE user_id=? and movie_id=?',[user_id,movie_id],(err,results)=>{
        if(err) return res.status(500).json({message: 'DELETE movie failed', error: String(err.code || err)})
        console.log("maybe deleted")
    })

})



