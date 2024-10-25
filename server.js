const express = require('express');
const app = express();
const connectDb = require('./utils/db');
const PORT = process.env.PORT || 3000;
const AuthRouter = require('./router/auth-router');
app.use("/api/auth", AuthRouter);
app.get('/', (req, res) => {
    res.status(200).send({message: 'Hello World! from server '});
})

connectDb.then(()=>{
    app.listen(PORT,()=>{console.log("Server running on port: "+PORT)});
})
