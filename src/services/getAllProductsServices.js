import http from "./httpService";
export const getAllProductsServices = () => {
  return http.get("/product");
};
