import { Injectable, NotFoundException } from "@nestjs/common";
import { User } from "./user.entity";

@Injectable()
export class UserService {
  private users: User[] = [];

  findAllUsers(): User[] {
    return this.users;
  }

  findUserById(id: number): User {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado!`);
    }
    return user;
  }

  createUser(user: User): User {
    const newUser = { ...user, id: Date.now() };
    this.users.push(newUser);
    return newUser;
  }

  updateUser(id: number, updatedUser: Partial<User>): User {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado!`);
    }
    const exsitingUser = this.users[userIndex];
    const updated = { ...exsitingUser, ...updatedUser };
    this.users[userIndex] = updated;
    return updated;
  }

  deleteUser(id: number): void {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado!`);
    }
    this.users.splice(userIndex, 1);
  }
}
