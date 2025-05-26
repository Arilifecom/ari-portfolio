import { createClient } from "microcms-js-sdk";

// Initialize Client SDK.
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export const getBlogList = async (queries = {}) => {
  const list = await client.getList({
    endpoint: "blogs",
    queries: {
      fields: "id,title,publishedAt",
      orders: "-publishedAt",
      ...queries,
    },
  });

  return list;
};

export const getBlogDetail = async (contentId, queries = {}) => {
  const detail = await client.getListDetail({
    endpoint: "blogs",
    contentId,
    queries,
  });

  return detail;
};

export const getCategoryList = async (queries = {}) => {
  const list = await client.getList({
    endpoint: "categories",
    queries: {
      fields: "id,name",
      orders: "-publishedAt",
      limit: 100,
      ...queries,
    },
  });

  return list;
};

export const getCategoryDetail = async (categoryId, queries = {}) => {
  const detail = await client.get({
    endpoint: "categories",
    contentId: categoryId,
    queries: {
      fields: "id,name,tag",
      ...queries,
    },
  });

  return detail;
};

export const getTagList = async (queries = {}) => {
  const list = await client.getList({
    endpoint: "tags",
    queries: {
      fields: "id,name",
      limit: 100,
      orders: "-publishedAt",
      ...queries,
    },
  });

  return list;
};

export const getTagDetail = async (tagId, queries = {}) => {
  const detail = await client.get({
    endpoint: "tags",
    contentId: tagId,
    queries: {
      fields: "id,name",
      ...queries,
    },
  });

  return detail;
};
