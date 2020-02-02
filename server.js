/* DO NOT EDIT */

const express = require('express');
const app = express();
require("dotenv").config()



app.use( express.urlencoded({extended : true}) )
app.use( express.json() )
app.use( express.static('./app/public/') )



const PORT = process.env.PORT || 5000;
app.listen(PORT, _ => {
    console.log(
        'Test Server —',
        `http://localhost:${PORT}`
    )
})

/* DO NOT EDIT */