// @ts-nocheck
import { apiAdapter } from "@/utils/apiAdapter";
import { ClothesProduct, Product, ProductFactory } from "./interfaces";

export class ClothesFactory implements ProductFactory {
  getAllProducts(): Product[] {
    const response = apiAdapter({ endpoint: "/products", method: "GET" });
    return response;
  }
  getProduct(id: string): ClothesProduct {
    const response = apiAdapter({ endpoint: "/products/" + id, method: "GET" });
    return response;
  }
  createProduct(product: ClothesProduct): ClothesProduct {
    const response = apiAdapter({ endpoint: "/products", method: "POST", payload: product });
    return response;
  }
  editProduct(id: string, product: ClothesProduct): ClothesProduct {
    const response = apiAdapter({ endpoint: "/products/" + id, method: "PUT", payload: product });
    return response;
  }
  deleteProduct(id: string): void {
    const response = apiAdapter({ endpoint: "/products/" + id, method: "DELETE" });
    return response;
  }
}
