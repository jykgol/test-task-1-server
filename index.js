const express = require('express');
const userRouter = require('./routes/user.routes')
const cors = require('cors');
const PORT = 3080

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}


const app = express()
app.use(cors(corsOptions));
app.use(express.json())
app.use('/api',userRouter)

app.listen(PORT, () => console.log('server started on port ' + PORT));