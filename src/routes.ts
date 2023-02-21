import { Router } from "express";
import CreateCategoryController from "./controllers/CategoryCreateController";
import { CreateVideosController } from "./controllers/CreateVideosController";
import DeleteCategoryController from "./controllers/DeleteCategoryController";
import { GetAllCategoriesController } from "./controllers/GetAllCategoriesController";
import UpdateCategoryController from "./controllers/UpdateCategoryController";

const routes = Router();

routes.post("/categories", new CreateCategoryController().handle);
routes.get("/categories", new GetAllCategoriesController().handle);
routes.delete("/categories/:id", new DeleteCategoryController().handle);
routes.put("/categories/:id", new UpdateCategoryController().handle);

routes.post("/videos", new CreateVideosController().handle);


export { routes };