import {JsonDataProvider} from "./JsonDataProvider";
import {CategoryJsonService} from "../modules/category/service/CategoryJsonService";
import {TagsJsonService} from "../modules/tag/service/TagJsonService";
import {TaskJsonService} from "../modules/task/service/TaskJsonService";
import {ServiceProvider} from "./ServiceProvider";

export class JsonServiceProvider implements ServiceProvider {
    private tagsJsonService : TagsJsonService;
    private categoriesJsonService : CategoryJsonService;
    private tasksJsonService : TaskJsonService;

    public constructor(private dataProvider : JsonDataProvider) {
        this.tagsJsonService       = new TagsJsonService(dataProvider.getTags())
        this.categoriesJsonService = new CategoryJsonService(dataProvider.getCategories())

        this.tasksJsonService = new TaskJsonService(
            dataProvider.getTasks(),
            this.categoriesJsonService,
            this.tagsJsonService
        )
    }

    getTagService(): TagsJsonService {
        return this.tagsJsonService;
    }

    getTaskService(): TaskJsonService {
        return this.tasksJsonService;
    }

    getCategoryService(): CategoryJsonService {
        return new CategoryJsonService(this.dataProvider.getCategories())
    }

}
