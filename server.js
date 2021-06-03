const express = require('express');
const app = express();
//const userRouter = require('./routes/users');
/* use app.post for post requests */

app.use(express.static('public'));

app.get('/sum', function(req,res){
    var sum = parseInt(req.query.First_Number) + parseInt(req.query.Second_Number);
    response={
        First_Number: req.query.First_Number,
        Second_Number:req.query.Second_Number,
        Sum: sum
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

// do the same thing for a post request with body parser

/*app.get('/', (req,res) => {
    res.send(form.element[0]+form.element[1]);
})*/

/*app.get('/',(req,res) => {
    res.send("100");
})*/

/*app.get('/', (req,res) => {
    res.send("Hello World!");
})*/
//app.use('/users', userRouter);
const port = process.env.PORT || 5000;
app.listen(port, () => 'Server running on port ${port}');
