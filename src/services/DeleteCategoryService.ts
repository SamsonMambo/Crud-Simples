import { getRepository } from "typeorm";
import Category from "../database/models/Category";

export default class DeleteCategoryService {
  async execute (id: string) {
    const repo = getRepository(Category);

    if (!(await repo.findOne(id))) {
      return new Error("Category does not exist")
    }

    await repo.delete(id);
  }
}