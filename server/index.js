import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import studentRoutes from './routes/student.js'

app.use('/students', studentRoutes);

//initializes express package
const app = express();
//Parse incoming request bodies in a middleware before your handlers, available under the req.body property
//sets up our server for sending requests properly
//limit of the image so that json data cannot be greater than 20mb. 
//extended: true makes sure that everything even strings don't exceed 20mb
//app.use(bodyParser.json({limit: "20mb", extended: true}));
//app.use(bodyParser.urlencoded({limit: "20mb", extended: true}));

app.use(cors());

const CONNECTION_URL = 'rdburck:W1ll5h1r3@cluster0.eai4m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' 

const PORT = process.env.PORT || 3000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => app.listen(PORT, () => console.log(`connected to port ${PORT}`)))
.catch((err) => console.log(err.message));

mongoose.set(`useFindAndModify`, false);

