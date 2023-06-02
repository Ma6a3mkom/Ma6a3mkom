const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const pool = require('./db');


// library for working with JSON Web Tokens (JWTs).
const jwt = require('jsonwebtoken');

const secretKey = 'ZhQrZ951';

// Get All Records
app.post("/records", async function (req, res) {
  try {
    const name = req.body.name;
    const phone = req.body.phone;
    const email = req.body.email;
    const password = req.body.password;

    const all_records = await pool.query("INSERT INTO users (username,phone_number, email, password,type_id,flags) VALUES($1, $2, $3 , $4 , $5 $6) RETURNING *",
    [name,phone, email, password,0,1]);
    res.json(all_records.rows);
  } catch (err) {
    console.log(err.message);
  }
});

// Get All restaurants
app.get('/restaurants', async function(req, res) {

  try{
      const all_records = await pool.query("SELECT *  FROM restaurant JOIN users ON users.userid = restaurant.user_id WHERE users.flags = 1 ;");res.json(all_records.rows);
  }
  catch(err){
      console.log(err.message);
  }
  
  });

// Get All reporters
app.get('/reporters', async function(req, res) {

  try{
      const all_records = await pool.query("SELECT * FROM contacts");
      res.json(all_records.rows);
  }
  catch(err){
      console.log(err.message);
  }
  
  });


// Get All Records
app.get('/records', async function(req, res) {

    try{
        const all_records = await pool.query("SELECT * FROM users where flags=1 and type_id=0 or type_id=1 ");
        res.json(all_records.rows);
    }
    catch(err){
        console.log(err.message);
    }
    
    });

// Get a Specific Record
app.get("/records/:id", async function (req, res) {
  try {
    const { id } = req.params;
    const record = await pool.query("SELECT * FROM users WHERE userid = $1", [id]);
    res.json(record.rows);
  } catch (err) {
    console.log(err.message);
  }
});



app.post('/recordp', async function(req, res){
    try{
         const email = req.body.email;
         const password = req.body.password;
         const all_records = await pool.query("SELECT * FROM users");

         let persons0 = all_records.rows

          persons0.map((e)=>{
            if(e.email==email ){

              if(e.password==password){
                const token = jwt.sign({ email: e.email, password:e.password }, secretKey,{expiresIn:'9weeks'}); // Generate JWT
                res.json({token});

              }else {
                res.json( "not passed ==> password");

              }

            }
               
           })

        //   res.json({email,password});
    }
    catch(err){
        console.log(err.message);
    }
});
app.put('/recordss/:userid', async function(req, res) {
  try {
      const { userid } = req.params;
      const deleteRecord = await pool.query("UPDATE users SET flags = 0 WHERE userid = $1", [userid]);
      res.send("Deleted Successfully");
  } catch (err) {
      console.log(err.message);
  }
});

app.put('/restaurants/:userid', async function(req, res) {

  // try{
  //   console.log("sasasas")
  //     const {userid} = req.params;
  //   const deleteRecord = await pool.query("UPDATE users SET flags = false WHERE userid = $1", [userid]);
  //     res.send("Deleted Successfully")
  // }
  // catch (err){
  //     console.log(err.message);
  // }

  try {
    const { userid } = req.params;
    const deleteRecord = await pool.query("UPDATE users SET flags = 0 WHERE userid = $1", [userid]);
    res.send("Deleted Successfully");
} catch (err) {
    console.log(err.message);
}
})
// Update a Specific Record
app.put('/records/:userid', async function(req, res){
  try{
      const { userid } = req.params;
      let id0 = req.body.id;
      if(id0 == 0){
        id0=1
      }else{id0=0}
      
      const record = await pool.query("UPDATE users SET type_id = $1 WHERE userid = $2",
      [id0,userid]);
      res.send("Updated Successfully");
  }
  catch(err){console.log(err.message);}
});



app.post("/restaurants", async function (req, res) {
  try {
    const name = '';
    const phone = '';
    const email = req.body.email;
    const password = '';
    const all_records = await pool.query("INSERT INTO users (username,phone_number, email, password,type_id,flags) VALUES($1, $2, $3 , $4 , $5,$6) RETURNING *",
    [name,phone, email, password,2,1]);
    res.json(all_records.rows);
  } catch (err) {
    console.log(err.message);
  }
});






// Add a new Record
// app.post("/record", async function (req, res) {
//   console.log(req.body);
//   try {
//     const name = req.body.name;
//     const email = req.body.email;
//     const password = req.body.password;
//     const newRecord = await pool.query(
//       "INSERT INTO users (name, email, password ) VALUES($1, $2, $3) RETURNING *",
//       [name, email, password]
//     );

//     res.json(newRecord.rows);
//   } catch (err) {
//     console.log(err.message);
//   }
// });

// Update a Specific Record
// app.put("/records/:id", async function (req, res) {
//   try {
//     const { id } = req.params;
//     const name = req.body.name;
//     const email = req.body.email;
//     const password = req.body.password;
//     const record = await pool.query(
//       "UPDATE users SET name = $1, email = $2, password = $3  WHERE id = $4",
//       [name, email, password, id]
//     );
//     res.send("Updated Successfully");
//   } catch (err) {
//     console.log(err.message);
//   }
// });

// app.delete("/records/:id", async function (req, res) {
//   try {
//     const { id } = req.params;
//     const deleteRecord = await pool.query("DELETE FROM users WHERE id = $1", [
//       id,
//     ]);
//     res.send("Deleted Successfully");
//   } catch (err) {
//     console.log(err.message);
//   }
// });

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});