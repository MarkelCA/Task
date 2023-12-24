import TaskController from './modules/task/TaskController'
import TaskService from './modules/task/service/TaskService';
import TagController from './modules/tag/TagController';
import CategoryService from './modules/category/service/CategoryService';
import CategoryController from './modules/category/CategoryController';
import {Application} from 'express';
import {ServiceProvider} from './providers/ServiceProvider';
import TagService from './modules/tag/service/TagService';

export class ControllerBuilder {
    private categoryService : CategoryService;
    private tagService : TagService;
    private taskService : TaskService;

    constructor( private app : Application, serviceProvider : ServiceProvider) {
        this.categoryService = serviceProvider.getCategoryService();
        this.tagService      = serviceProvider.getTagService()
        this.taskService     = serviceProvider.getTaskService()
    }

    public init() : void {
        const categoryController : CategoryController = new CategoryController(this.app, this.categoryService)
        categoryController.init();

        const tagController : TagController = new TagController(this.app, this.tagService)
        tagController.init();


        const taskController : TaskController = new TaskController(this.app, this.taskService);
        taskController.init();
    }
}
