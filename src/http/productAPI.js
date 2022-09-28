import { $host } from ".";

export const fetchCreateProduct = async (name, price, shopId, img) => {
  const { data } = await $host.post("api/product/create", {
    name,
    price,
    shopId,
    img,
  });
  return data;
};

export const fetchGetAllProductsById = async (shopId) => {
  const { data } = await $host.get("api/product/getAll", {
    params: {
      shopId,
    },
  });
  return data;
};
