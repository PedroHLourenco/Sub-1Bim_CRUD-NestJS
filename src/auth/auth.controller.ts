import { Controller, Post, Request } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("login")
  async login(@Request() req) {
    const user = this.authService.validateUser(
      req.body.username,
      req.body.password
    );

    if (user) {
      return this.authService.login(user);
    }
    return { message: "dados incorretos" };
  }
}
