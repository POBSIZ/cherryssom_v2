const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 2393;

app.use(cors());

app.get('/', (req, res, next)=>{
    res.sendFile(__dirname+'/index.html');
});
app.get('/style.css', (req, res, next)=>{
    res.sendFile(__dirname+'/style.css');
});

app.listen(process.env.PORT || 2393, () => {
	console.log(`Server Works !!! At port`+PORT);
});