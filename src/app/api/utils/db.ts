// import mongoose from "mongoose";

// const MONGODB_URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.wgmqb0q.mongodb.net/`;

// let client;
// let clientPromise;

// if (!MONGODB_URI) {
//  throw new Error('Please add your Mongo URI to .env.local') 
// }

// if (process.env.NODE_ENV === 'development') {
//  // In development mode, use a global variable so the connection is shared across
//  // requests
//  global.mongoose. = new MongoClient(MONGODB_URI, {
//    useNewUrlParser: true,
//  })
//  client = global.mongoClient
//  clientPromise = global.mongoClient.connect()
// } else {
//  // In production mode, create a new client for each request
// client = new MongoClient(MONGODB_URI);  
//  clientPromise = client.connect()
// }

// export default async function handler (req, res) {
//  await clientPromise

//  const db = client.db()

//  // ... rest of your API route handler
// }