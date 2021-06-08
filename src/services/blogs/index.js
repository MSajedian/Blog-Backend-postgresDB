import { Router } from "express";

import Model from "../../utils/model/index.js";

const route = Router();

const Blogs = new Model("blogs", "blog_id");

route.get("/", async (req, res, next) => {
  try {
    const dbResponse = await Blogs.find(req.query, "blog_id,category, title, cover, read_time_value, read_time_unit, author_id, content");
    res.send(dbResponse);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

route.get("/:id", async (req, res, next) => {
  try {
    const dbResponse = await Blogs.findById(req.params.id);
    res.send(dbResponse);
  } catch (error) {
    res.status(error.code || 500).send({ error: error.message });
  }
});

route.put("/:id", async (req, res, next) => {
  try {
    const dbResponse = await Blogs.update(req.params.id, req.body);
    res.send(dbResponse);
  } catch (error) {
    res.status(500).send({ error });
  }
});

route.post("/", async (req, res, next) => {
  try {
    const dbResponse = await Blogs.create(req.body);
    res.send(dbResponse);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

route.delete("/:id", async (req, res, next) => {
  try {
    const dbResponse = await Blogs.deleteById(req.params.id);
    res.send(dbResponse);
  } catch (error) {
    res.status(500).send({ error });
  }
});
export default route;
