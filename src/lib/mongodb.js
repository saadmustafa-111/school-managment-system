import { MongoClient } from "mongodb";

let client;
export async function connectToDB() {
  if (!client) {
    try {
      client = new MongoClient(process.env.MONGODB_URI);
      await client.connect();
    } catch (error) {
      console.error("Database connection error:", error);
      throw new Error("Failed to connect to the database.");
    }
  }
  return client.db();
}
