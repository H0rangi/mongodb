const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://john:johndoe1234@cluster0.ty4icts.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Connect to your Atlas cluster
const client = new MongoClient(url);

async function connectToMongo() {
    try {
        await client.connect();
        console.log("Successfully connected to MongoDB");
        return client.db('database');
    } catch (error) {
        console.error('error connecting to mongodb:', error);
        throw new Error (error)
    }
}
module.exports = connectToMongo;