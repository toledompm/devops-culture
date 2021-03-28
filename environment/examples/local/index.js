const express = require("express");

const app = express();
const PORT = process.env.PORT;

app.get("/", (_, res) => res.json({ status: "ok" }));

app.listen(PORT, () => console.log("Server listening on port", PORT));
