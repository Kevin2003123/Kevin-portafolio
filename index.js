const express = require('express'); 
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'home.html'));
});
console.log("in");
app.listen(process.env.PORT || 5000)
