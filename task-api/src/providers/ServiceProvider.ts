import CategoryService from "./modules/category/service/CategoryService";
import TagService from "./modules/tag/service/TagService";
import TaskService from "./modules/task/service/TaskService";

export interface ServiceProvider {
    getCategoryService() : CategoryService;
    getTagService()      : TagService;
    getTaskService()     : TaskService;
}
