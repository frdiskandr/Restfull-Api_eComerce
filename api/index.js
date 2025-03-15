import app from "../src/app/api.js";
import Logger from "../src/app/logger.js";

const port = process.env.PORT || 5000;

app.listen(port, () => {
    Logger.info(`server is running on http://localhost:${port}`);
})