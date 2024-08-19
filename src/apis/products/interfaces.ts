export interface ProductFactory {
  createProduct(product: Product): Product;
  editProduct(id: string, product: Product): Product;
  deleteProduct(id: string): void;
  getProduct(id: string): Product;
  getAllProducts(): Product[];
}

export interface Product {
  id?: number;
  title: string;
  price: number;
  description: string;
  category: string;
  creationAt?: string;
  updatedAt?: string;
}

export interface ClothesProduct {
  title: string;
  price: number;
  description: string;
  category: "clothes";
}

export interface ElectronicProduct {
  title: string;
  price: number;
  description: string;
  category: "electronic";
}
