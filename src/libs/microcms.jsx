import { createClient } from "microcms-js-sdk";

// Initialize Client SDK.
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export const getBlogList = async (queries) => {
  const list = await client.getList({
    endpoint: "blogs",
    queries,
    fields: "id,title,publishedAt",
  });
  return list;
};

export const getBlogDetail = async (contentId, queries) => {
  const detail = await client.getListDetail({
    endpoint: "blogs",
    contentId,
    queries,
  });
  return detail;
};
