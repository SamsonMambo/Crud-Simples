import { getRepository } from "typeorm";
import Category from "../database/models/Category";

export class GetAllCategoriesService {
  async execute() {
    const repo = getRepository(Category);

    const categories = await repo.find();

    return categories;
  }
}