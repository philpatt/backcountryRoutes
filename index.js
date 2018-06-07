let express = require('express');
let app = express();
let path = require('path');

app.use(express.static(path.join(__dirname, 'views')));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index');
});

app.listen(3000);
