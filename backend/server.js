const express = require('express');
const { body } = require('express-validator');
const connectDB = require('./config/db')
const cors = require('cors')
const path = require('path')
const app = express();

//connect the database
connectDB();
//initialise middleware
app.use(express.json());

app.use(cors())

// app.get('/',(req,res) => res.send('testing api running'));

//define routes
app.use('/api/users',require('./routes/api/users'));
app.use('/api/auth',require('./routes/api/auth'));
app.use('/api/profile',require('./routes/api/profile'));
app.use('/api/posts',require('./routes/api/posts'));
app.use('/api/todo',require('./routes/api/todo'))

//serve static assests in production (while deploying to heroku)
if(process.env.NODE_ENV === 'production'){

    app.use(express.static('client/build'));

    app.get('*',(req,res) => {
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT , () =>console.log('serer started on port ' + PORT));
