const { MongoClient } = require("mongodb");
const url =
  "mongodb+srv://elzoranymohamed232:23201823@learn-mongo-db.eey2xe1.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);

const main = async () => {
  // connect to database
  await client.connect();
  console.log("Connected successfully to server");
  // choose database to intereact with
  const db = client.db("codeZone");
  // choose collection to interact with
  const collection = db.collection("courses");
  await collection.insertOne({
    title: "New Course",
    price: 5000,
  });
  // get Query
  // get all courses
  const data = await collection.find().toArray();
  console.log("data", data);
};
main();
