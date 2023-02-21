import { getRepository } from "typeorm";
import Category from "../database/models/Category";


interface Request {
  name: string;
  description: string;
}

class CreateCategoryService {
  public async execute({
    name,
    description
  }: Request): Promise<Category> {
    const repo = getRepository(Category);

    const checkCategoryExists = await repo.findOne({
      where: { name}
    })
    if (checkCategoryExists) {
      throw new Error("Category already exists")
    }

    const category = repo.create({
      name,
      description
    })

    await repo.save(category);

    return category;
  }
}

export default CreateCategoryService;