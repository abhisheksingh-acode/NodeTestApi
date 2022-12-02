import express from "express";

const app = express();

const port = process.env.PORT || 3000;


app.get('/',(req,res)=>{
  res.json({msg:'welcome'});
});

app.get('/home',(req,res)=>{
  res.json({msg:'home'});
});

app.listen(port, () => console.log("running on heroku"));
