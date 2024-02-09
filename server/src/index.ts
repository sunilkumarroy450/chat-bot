import app from "./app.js";
import { connectToDataBase } from "./db/connection.js";
const PORT = process.env.PORT || 8080;

connectToDataBase()
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Server is running on Port ${PORT} && DataBase Is connected`)
    );
  })
  .catch((err) => console.log(err));
