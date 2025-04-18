// pages/api/categoryBlogs.js
import { client } from "src/libs/microcms";

export default async function handler(req, res) {
  const { categoryId, offset = 0, limit = 10 } = req.query;

  try {
    const data = await client.get({
      endpoint: "blogs",
      queries: {
        filters: `category[equals]${categoryId}`,
        offset: Number(offset),
        limit: Number(limit),
      },
    });

    res.status(200).json(data.contents);
  } catch (err) {
    res.status(500).json({ message: "Fetch failed", error: err });
  }
}
