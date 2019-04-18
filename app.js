const express = require('express');
const authExpress = require('./routes/auth-routes');
const app = express();

// setup view engine
app.set('view engine', 'ejs');

// setup routes
app.use('/auth', authExpress)

// Create home route
app.get('/', (req, res)=>{
    res.render('home');
});

app.listen(3000);
