const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

//set middleware
app.use(cors());
app.use(express.json());

//user: dbuser2
//pass: CA3MCXZdkkIrjHp5



const uri = "mongodb+srv://dbuser2:CA3MCXZdkkIrjHp5@cluster0.bkopbwy.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        const userCollection = client.db('nodeMongoCrud').collection('users');
        const user = {
            name: 'testing test',
            email: 'testing@gmail.com'
        }
        const result = await userCollection.insertOne(user);
        console.log(result);
    }
    finally {

    }
}

run().catch(error => console.log(error));

app.get('/', (req, res) => {
    res.send('Hello from node mongo server');
});

app.listen(port, () => {
    console.log(`listenig to port ${port}`)
})