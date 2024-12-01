import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  ParseIntPipe,
} from "@nestjs/common";
import { ProductsService } from "./products.service";
import { Product } from './product.entity';

@Controller("products")
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  findAllProducts() {
    return this.productsService.findAllProducts();
  }

  @Get(':id')
  findProductById(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findProductById(id);
  }

  @Post()
  createProduct(@Body() product: Product) {
    return this.productsService.createProduct(product);
  }

  @Put(':id')
  updateProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatedProduct: Partial<Product>,
  ) {
    return this.productsService.updateProduct(id, updatedProduct);
  }

  @Delete(':id')
  deleteProduct(@Param('id', ParseIntPipe) id: number) {
    this.productsService.deleteProduct(id);
    return { message: `Product with ID ${id} deleted successfully.` };
  }
}
