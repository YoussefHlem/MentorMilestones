// @ts-nocheck
import { apiAdapter } from "@/utils/apiAdapter";
import { Product, ElectronicProduct, ProductFactory } from "./interfaces";

export class ElectronicFactory implements ProductFactory {
  getAllProducts(): Product[] {
    const response = apiAdapter({ endpoint: "/products", method: "GET" });
    return response;
  }
  getProduct(id: string): ElectronicProduct {
    const response = apiAdapter({ endpoint: "/products/" + id, method: "GET" });
    return response;
  }
  createProduct(product: ElectronicProduct): ElectronicProduct {
    const response = apiAdapter({ endpoint: "/products", method: "POST", payload: product });
    return response;
  }
  editProduct(id: string, product: ElectronicProduct): ElectronicProduct {
    const response = apiAdapter({ endpoint: "/products/" + id, method: "PUT", payload: product });
    return response;
  }
  deleteProduct(id: string): void {
    const response = apiAdapter({ endpoint: "/products/" + id, method: "DELETE" });
    return response;
  }
}
