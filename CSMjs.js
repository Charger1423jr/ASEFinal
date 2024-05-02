            document.getElementById('signInLink').addEventListener('click', function() {
                $('#signinModal').modal('show');
            });


            document.getElementById('checkoutLink').addEventListener('click', function() {
                $('#checkoutModal').modal('show');
            });


const express=require('express');
const fs=require('fs');
const app=express();
const port=3000;

const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extend:false }));

app.use(bodyParser.json());

app.get('/api/:filename',function(req, res) {
    res.setHeader('Content-Type', 'application/json')
    const fs=require('fs');
    //CHECK IF FILE EXISTS
    let content=fs.readFileSync(`./${req.params.filename}.json`,'utf8');
    res.end(content);
});

app.post('/api',function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    console.log(req.body);
    const fs=require('fs');
    let filename=Date.now();
    fs.writeFileSync(`./${filename.toString()}.json`,JSON.stringify(req.body));
    //Makes test.json file in folder when POST is sent, and it will contain what content is POSTed
    res.end(filename.toString());
});

app.put('/api/:filename',function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    console.log(req.body);
    console.log(req.params);
    const fs=require('fs');
    //CHECK IF FILE EXISTS
    fs.writeFileSync(`./${req.params.filename}.json`,JSON.stringify(req.body));
    res.end(JSON.stringify(req.body,null,2));
});

app.delete('/api/:filename', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    const fs=require('fs');
    fs.unlinkSync(`./${req.params.filename}.json`);
    res.end('file deleted');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
