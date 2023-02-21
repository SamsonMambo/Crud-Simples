import { getRepository } from 'typeorm';
import Category from '../database/models/Category';
import Videos from '../database/models/Videos';

type VideosRequest = {
  name: string;
  description: string;
  duration: number;
  category_id: string
}

export default class CreateVideosService {
  async execute({name, description, duration, category_id}: VideosRequest) {
    const repo = getRepository(Videos);

    const repoCategory = getRepository(Category);

    /*if(await repoCategory.findOne(category_id)) {
      return new Error("Category does not exists");
    }*/
    const checkCategoryExists = await repoCategory.findOne({
      //buscando por user com mesmo nome
      where: { category_id}
    })
    //se encontrar o primeiro nome e o ultimo existente dara o erro;
    if (checkCategoryExists) {
      throw new Error('User already exists');
    }
    
    const video = repo.create({
      name,
      description,
      duration,
      category_id
    })

    await repo.save(video);

    return video;
  }
}