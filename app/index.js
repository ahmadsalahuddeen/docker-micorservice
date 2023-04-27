const app = require('express')();


app.get('/', (req, res ) => 
res.send('hi from dockerrr container'))

app.listen(9999, ()=> console.log('listening on http://localhost:9999'))