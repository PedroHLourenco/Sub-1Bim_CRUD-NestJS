import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "./product.entity";

@Injectable()
export class ProductsService {
  private products: Product[] = [
    { id: 1, name: "Mouse", price: 10.99 },
    { id: 2, name: "Teclado", price: 9.99 },
  ];

  findAllProducts(): Product[] {
    return this.products;
  }

  findProductById(id: number): Product {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found.`);
    }
    return product;
  }

  createProduct(product: Product): Product {
    const newProduct = { ...product, id: Date.now() };
    this.products.push(newProduct);
    return newProduct;
  }

  updateProduct(id: number, updatedProduct: Partial<Product>): Product {
    const productIndex = this.products.findIndex((product) => product.id === id);
    if (productIndex === -1) {
      throw new NotFoundException(`Product with ID ${id} not found.`);
    }
    const existingProduct = this.products[productIndex];
    const updated = { ...existingProduct, ...updatedProduct };
    this.products[productIndex] = updated;
    return updated;
  }

  deleteProduct(id: number): void {
    const productIndex = this.products.findIndex((product) => product.id === id);
    if (productIndex === -1) {
      throw new NotFoundException(`Product with ID ${id} not found.`);
    }
    this.products.splice(productIndex, 1);
  }
}
