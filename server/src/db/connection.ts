import mongoose from "mongoose";

//to Connect to DataBase
async function connectToDataBase() {
  try {
    //connect is asyncroness so i have provided await before it
    await mongoose.connect(process.env.MONGODB_URL);
  } catch (error) {
    console.log(error);
    throw new Error("Error connecting to DataBase");
  }
}

//disconnect to DataBase
async function disconnectFromDataBase() {
  try {
    //connect is asyncroness so i have provided await before it
    await mongoose.disconnect();
  } catch (error) {
    console.log(error);
    throw new Error("Error disConnecting to DataBase");
  }
}

export { connectToDataBase, disconnectFromDataBase };
