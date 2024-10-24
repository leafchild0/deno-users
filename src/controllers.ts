import { User } from "./entities.ts";
import { AppDataSource } from "./config.ts";

export class UserController {
  static async getAll() {
    const userRepository = AppDataSource.getRepository(User);
    return await userRepository.find();
  }

  static async create(userData: Partial<User>) {
    const userRepository = AppDataSource.getRepository(User);
    const user = userRepository.create({
      ...userData,
      createdAt: new Date(),
    });
    return await userRepository.save(user);
  }

  static async getById(id: number) {
    const userRepository = AppDataSource.getRepository(User);
    return await userRepository.findOne({ where: { id } });
  }

  static async deleteById(id: number) {
    const userRepository = AppDataSource.getRepository(User);
    return await userRepository.delete(id);
  }

  static async update(id: number, userData: Partial<User>) {
    const userRepository = AppDataSource.getRepository(User);
    return await userRepository.update(
      id,
      userData
    );
  }
}
