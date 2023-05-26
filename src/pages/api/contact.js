// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() == "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({
        message: "invalid input",
      });
      return;
    }

    // store it in database

    const newMessage = { name, email, message };

    let client;

    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clusterName}cluster0.4ay2k2c.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
    // "mongodb+srv://sudhindraise:Sudhi123@cluster0.4ay2k2c.mongodb.net/?retryWrites=true&w=majority"
    
    try {
      client = await MongoClient.connect("mongodb+srv://sudhindraise:Sudhi123@@cluster0.4ay2k2c.mongodb.net/my-site?retryWrites=true&w=majority");
      console.log(client)
    } catch (error) {
      console.log(error)
      res.status(500).json({
        message: "Internal server error",
      });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage._id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({
        message: "Internal Server Error",
      });
      return;
    }

    client.close();

    res.status(201).json({
      message: "successfully stored message",
      message: newMessage,
    });
  }
};

export default handler;
