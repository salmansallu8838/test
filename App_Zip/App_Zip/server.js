const express = require("express");
const app = express();
app.get("/", (_, res) => res.send("Hello from Azure App Service 👋"));
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on ${port}`));
