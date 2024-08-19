import { apiAdapter } from "@/utils/apiAdapter";

export const getProducts = async () => {
  const response = await apiAdapter({ method: "GET", endpoint: "/products" });
  return response;
};

export const getProduct = async (id) => {
  const response = await apiAdapter({ method: "GET", endpoint: `/products/${id}` });
  return response;
};

export const createProduct = async (body) => {
  const response = await apiAdapter({ method: "POST", endpoint: "/products/", payload: body });
  return response;
};

export const updateProduct = async (id, body) => {
  const response = await apiAdapter({ method: "PUT", endpoint: `/products/${id}`, payload: body });
  return response;
};

export const deleteProduct = async (id) => {
  const response = await apiAdapter({ method: "DELETE", endpoint: `/products/${id}` });
  return response;
};
