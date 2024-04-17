const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = "";

// Connect to your Atlas cluster
const client = new MongoClient(url);

async function connectToMongo() {
    try {
        await client.connect();
      

        return client.db('my-app'); // Replace 'mydatabase' with your database name
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
       throw new Error (error)
    }
}

async function insertData() {
    const db = await connectToMongo();
    const users = db.collection("users");

    try {
        // Insert sample data
        const result = await users.insertMany([
            { name: "rami", age: 20},
            { name: "rami", age: 20},
        ]);
        console.log(`${result.insertedCount} documents inserted`);
    } catch (error) {
        console.error("Error inserting data:", error);
    }

    
}




async function createCollectionWithSchema() {
    await insertData()
    return await connectToMongo();
}






module.exports = createCollectionWithSchema;
