import app from "./app.js";
import { connectToDataBase } from "./db/connection.js";
const PORT = process.env.PORT || 8000;
//connection and listners
connectToDataBase()
    .then(() => {
    app.listen(PORT, () => console.log(`Server is running on PORT ${PORT} && Connected to DataBase`));
})
    .catch((err) => console.log(err));
//# sourceMappingURL=index.js.map