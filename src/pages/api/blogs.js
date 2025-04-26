// pages/api/blogs.js
import { getBlogList } from "src/libs/microcms";

export default async function handler(req, res) {
  const { offset = 0, limit = 10 } = req.query;

  try {
    const data = await getBlogList({
      offset: Number(offset),
      limit: Number(limit),
      orders: "-publishedAt",
    });

    res.status(200).json(data.contents);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Fetch error" });
  }
}
