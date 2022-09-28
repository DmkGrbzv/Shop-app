import { $host } from ".";

export const fetchCreateShop = async (name) => {
  const { data } = await $host.post("api/shop/create", { name });
  return data;
};

export const fetchGetAllShops = async () => {
  const { data } = await $host.get("api/shop/getAll");
  return data;
};
