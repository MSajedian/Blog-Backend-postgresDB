import express from "express";
import endpointsList from "express-list-endpoints";
import blogRoute from "./services/blogs/index.js";
import authorRoute from "./services/authors/index.js";

const { PORT } = process.env;

const app = express();

app.use(express.json());
app.use("/blog", blogRoute);
app.use("/author", authorRoute);

console.table(endpointsList(app))
app.listen(PORT, () => console.log("server is running on port ", PORT));
app.on("error", (err) => console.log("server is not running ", err));
