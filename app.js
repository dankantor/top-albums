var express = require('express');
var fs = require('fs');

var app = express();
app.set('views', 'views');
app.set('view engine', 'ejs');  



app.get('/albums-2013', function(req, res){
    fs.readFile(
        'albums-2013.json', 
        'utf8',
        function(err, data){
            res.render(
                'albums',
                {
                    'albums': JSON.parse(data)
                }        
            );       
        }
    )
});  

app.listen(3000);