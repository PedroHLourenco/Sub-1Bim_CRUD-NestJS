import { Module, CacheModule } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";
import { ProductsModule } from "./products/products.module";

@Module({
  imports: [CacheModule.register(), AuthModule, UsersModule, ProductsModule],
})
export class AppModule {}
