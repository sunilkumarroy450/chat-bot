import mongoose from "mongoose";
async function connectToDataBase() {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
    }
    catch (error) {
        console.log(error);
        throw new Error("Error connecting to DataBase ");
    }
}
async function disconnectToDataBase() {
    try {
        await mongoose.disconnect();
    }
    catch (error) {
        console.log(error);
        throw new Error("Error disconnecting to DataBase ");
    }
}
export { connectToDataBase, disconnectToDataBase };
//# sourceMappingURL=connection.js.map