const app = require('express')();
const appid = process.env.APPID;

app.get('/', (req, res ) => 
res.send(appid +'rooot hi from dockerrr container'))
app.get('/product', (req, res ) => 
res.send(appid +' product   hi from dockerrr container'))
app.get('/cat', (req, res ) => 
res.send(appid +'cattt  hi from dockerrr container'))
app.get('/cat3', (req, res ) => 
res.send(appid +'cat3333 hi from dockerrr container'))
app.get('/user', (req, res ) => 
res.send(appid +'user     hi from dockerrr container'))

app.listen(appid, ()=> console.log('listening on http://localhost:'+ appid))